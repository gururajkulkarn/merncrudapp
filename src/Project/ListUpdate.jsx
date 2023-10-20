    import React, { useEffect, useState } from 'react'
    import { useParams,useNavigate } from 'react-router-dom'
    import axios from 'axios'


    const FormUpdate = () => {

    const{ id } = useParams()
    const navigate = useNavigate()



    const [input,setInput] = useState({
    fname:'',
    lname:'',
    number:'',
    city:''
    })

   



useEffect(() => {

axios.get(`http://localhost:3001/getcandidate/${id}`)
.then((response)=>{
    console.log(response.data)
    setInput(response.data)
})
.catch((error)=>{
    console.log(error)
})

},[])


const handlesubmit = (e) =>{
e.preventDefault()
axios.put('http://localhost:3001/updatecandidate/'+id,input)
.then(result => {
    console.log('data updated')
    alert('data updated successfully')
    navigate('/list')
})
.catch((error) =>{
    console.log(error)
})


}










    return (
        <>
            <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"red"}}>Appllication Form</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

    <form onSubmit={handlesubmit}>
    <input type="text"  className='form-control mb-3'      placeholder='Firstname' name="fname"  value={input.fname}         onChange={(e)=>setInput({...input,fname:e.target.value})}  />
    <input type="text"  className='form-control  mb-3'     placeholder='Lastname' name="lname"    value={input.lname}        onChange={(e)=>setInput({...input,lname:e.target.value})}  />
    <input type="number"  className='form-control  mb-3'   placeholder='Mobile'   name="number"    value={input.number}      onChange={(e)=>setInput({...input,number:e.target.value})} />
    <input type="text"  className='form-control  mb-3'     placeholder='City'       name="city"   value={input.city}         onChange={(e)=>setInput({...input,city:e.target.value})}   />
    <button className='btn btn-success'>Update</button>
    </form>
    </div>


        </>
    )
    }

    export default FormUpdate

import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Form = () => {

  const navigate = useNavigate()


const [input,setInput] = useState({
  fname:'',
  lname:'',
  number:'',
  city:''
})




const handlesubmit = (e) => {
e.preventDefault();
axios.post('http://localhost:3001/application',input)
.then(response => {
  alert("FORM SUBMITTED SUCCESSFULLY...")
  console.log(input)
  navigate('/list')
})
.catch((error)=>{
  console.log(error)
})

}




  return (
    <>
    <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"red"}}>Appllication Form</h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

<form onSubmit={handlesubmit}>
  <input type="text"  className='form-control mb-3'    placeholder='Firstname'    name="fname"    onChange={(e)=>setInput({...input,fname:e.target.value})}  />
  <input type="text"  className='form-control  mb-3'   placeholder='Lastname'     name="lname"    onChange={(e)=>setInput({...input,lname:e.target.value})}  />
  <input type="number"  className='form-control  mb-3'   placeholder='Mobile'     name="number"   onChange={(e)=>setInput({...input,number:e.target.value})} />
  <input type="text"  className='form-control  mb-3'   placeholder='City'         name="city"     onChange={(e)=>setInput({...input,city:e.target.value})}   />
<button className='btn btn-success'>Submit</button>
</form>
</div>


    </>
  )
}

export default Form

import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {

const{id} = useParams()

const [text,setText] = useState({
  name:'',
  email:'',
  age:''
})
const navigate = useNavigate()



useEffect(()=>{
  axios.get('https://merncrudapp-nu.vercel.app/getUser/' + id)
  .then((response) => {
    console.log(response)
    setText(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])



const handlesubmit = (e) => {
  e.preventDefault()
  axios.put('https://merncrudapp-nu.vercel.app/updateUser/'+id,text)
  .then(result => {
    console.log(result)
    alert("Data Updated successfully...")
    navigate('/home')
  } )
  .catch(err => console.log(err))
}



  return (
    <div className='container'>
      <h1>Update User</h1>
<form onSubmit={handlesubmit}> 
    <input type="text" className='form-control w-25 m-3'  name="name" value={text.name}    placeholder='Name' onChange={e =>setText({...text,name: e.target.value})}/>
    <input type="text" className='form-control  w-25 m-3' name="email" value={text.email}  placeholder='Email' onChange={e =>setText({...text,email: e.target.value})}/>
    <input type="text" className='form-control  w-25 m-3' name="age" value={text.age}      placeholder='Age' onChange={e =>setText({...text,age: e.target.value})}/>
  
    <button className='btn btn-success m-3'>Update</button>
</form>

    </div>
  )
}

export default UpdateUser

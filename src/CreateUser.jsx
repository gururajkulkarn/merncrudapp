import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {

const [text,setText] = useState({
  name:'',
  email:'',
  age:''
})


const navigate = useNavigate()

const handlesubmit = (e) =>{
e.preventDefault()
axios.post('https://merncrudapp-nu.vercel.app/createUser',text)
.then(response => {
  navigate('/home')
}).catch(error => console.log(error))

}


  return (
    <> 
    <ToastContainer />
    <div className='container'>
      <h1>Add User  </h1>  
<form onSubmit={handlesubmit}>
    <input type="text" className='form-control  w-25 m-3'  name="name"  placeholder='Name'  onChange={e =>setText({...text,name: e.target.value})}/>
    <input type="text" className='form-control  w-25 m-3'  name="email" placeholder='Email' onChange={e =>setText({...text,email: e.target.value})}/>
    <input type="text" className='form-control  w-25 m-3'  name="age"   placeholder='Age'   onChange={e =>setText({...text,age: e.target.value})}/>
    <button className='btn btn-success m-3'>Submit</button>
</form>

    </div>
    </>
  )


}

export default CreateUser

import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {

const [text,setText] = useState({
  fname:'',
  lname:'',
  mobile:'',
  email:'',
  dob:'',
  education:'',
  state:'',
  city:''
})


const navigate = useNavigate()

const handlesubmit = (e) =>{
e.preventDefault()
axios.post('http://localhost:3001/createUser',text)
.then(response => {
  navigate('/home')
}).catch(error => console.log(error))

}


  return (
    <> 
    <ToastContainer />
    <div className='container'>
      <h1 style={{color:"red"}}>Application Form  </h1>  


<form onSubmit={handlesubmit}>
<div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="fname"  placeholder='FirstName'  onChange={e =>setText({...text,fname: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="lname" placeholder='LastName' onChange={e =>setText({...text,lname: e.target.value})}/>
    </div> 
  </div>

  <div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="mobile"   placeholder='Mobile'   onChange={e =>setText({...text,mobile: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="email"   placeholder='Email'   onChange={e =>setText({...text,email: e.target.value})}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    <input type="date" className='form-control   m-3'  name="dob"   placeholder='Date of Birth'   onChange={e =>setText({...text,dob: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="education"   placeholder='Qualification'   onChange={e =>setText({...text,education: e.target.value})}/>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="state"   placeholder='State'   onChange={e =>setText({...text,state: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="city"   placeholder='City'   onChange={e =>setText({...text,city: e.target.value})}/>
    </div>
  </div>
    <button className='btn btn-success m-3'>Submit</button>
   
</form>

    </div>
    </>
  )


}

export default CreateUser

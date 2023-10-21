import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {

const{id} = useParams()

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



useEffect(()=>{
  axios.get('http://localhost:3001/getUser/' + id)
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
  axios.put('http://localhost:3001/updateUser/'+id,text)
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

<div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="fname" value={text.fname}    placeholder='FirstName'    onChange={e =>setText({...text,fname: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="lname" value={text.lname}    placeholder='LastName'     onChange={e =>setText({...text,lname: e.target.value})}/>
    </div> 
  </div>

  <div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="mobile" value={text.mobile}  placeholder='Mobile'       onChange={e =>setText({...text,mobile: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="email" value={text.email}    placeholder='Email'        onChange={e =>setText({...text,email: e.target.value})}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    <input type="date" className='form-control   m-3'  name="dob" value={text.dob}        placeholder='Date of Birth'  onChange={e =>setText({...text,dob: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="education" value={text.education}   placeholder='Qualification'   onChange={e =>setText({...text,education: e.target.value})}/>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <input type="text" className='form-control   m-3'  name="state"  value={text.state}  placeholder='State'      onChange={e =>setText({...text,state: e.target.value})}/>
    </div>
    <div className="col">
    <input type="text" className='form-control   m-3'  name="city" value={text.city}     placeholder='City'       onChange={e =>setText({...text,city: e.target.value})}/>
    </div>
  </div>
  
    <button className='btn btn-success m-3'>Update</button>
   
</form>

    </div>
  )
}

export default UpdateUser

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {

const[data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/')
.then((response) => {
  console.log(response.data)
  setData(response.data)
})
.catch((error)=>{
  console.log(error)
})
},[])


const handleDelete = (id) => {
axios.delete('http://localhost:3001/deleteUser/'+ id)
.then(res => {console.log(res)
window.location.reload()
})
.catch(err => console.log(err))
}


  return (
    <>
<div style={{marginRight:"20px"}}>
  <Link to="/" > <button className='btn btn-primary'>Logout</button> </Link>
</div><br/><br/>
<div style={{marginRight:"20px"}}>
  <Link to="/website" > <button className='btn btn-success'>Website</button> </Link>
</div>

      <div className='container mt-5'>
<Link to="/create" className='btn btn-success'>Add+</Link>
<table className='table'>
    <thead>
        <tr>
            <th>FormListName</th>
            <th>LastName</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Qualification</th>
            <th>State</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
       {data.map((user,index)=>{
       return  <tr key={index}>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
            <td>{user.education}</td>
            <td>{user.state}</td>
            <td>{user.city}</td>
            <td>
            <Link to={`/update/${user._id}`} > <button className='btn btn-warning m-2'>Edit</button></Link>  
            
            <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button></td>

        </tr>
       })}
    </tbody>
</table>

      </div>
    </>
  )
}

export default Users

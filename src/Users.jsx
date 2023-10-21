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
</div>
<div style={{marginRight:"20px"}}>
  <Link to="/website" > <button className='btn btn-primary'>Website</button> </Link>
</div>

      <div className='container mt-5'>
<Link to="/create" className='btn btn-success'>Add+</Link>
<table className='table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
       {data.map((user,index)=>{
       return  <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
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

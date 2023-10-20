import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Admins = () => {


const[data,setData] = useState([])



useEffect(()=>{
    axios.get('http://localhost:3001/register')
    .then((response)=>{
        console.log(response.data)
        setData(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    
},[])


  return (
    <>
    <h1>Admin Dashboard</h1>
    <div className='container'>
   <Link  to="/">  <button>Logout</button></Link>   

      <table className='table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
    </thead>
    <tbody>
       {data.map((user,index)=>{
       return  <tr key={index}>
            <td>{user.fname}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>      

        </tr>
       })}
    </tbody>
</table>
        
</div>
    </>
  )
}

export default Admins

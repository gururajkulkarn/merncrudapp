import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FormList = () => {

const[data,setData] = useState([])



useEffect(()=>{
    axios.get('http://localhost:3001/list')
    .then((response)=>{
        console.log(response.data)
        setData(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])


const handleDelete = (id) => {
  axios.delete('http://localhost:3001/deleteCandate/'+ id)
  .then(res => {console.log(res)
  window.location.reload()
  })
  .catch(err => console.log(err))
  }
  


  return (
    <>
    <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"red"}}>List Of Appllication Forms</h1>
    <div className='container' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"1000px"}}>
<Link to="/form" ><button className='btn btn-success'>Apply+</button></Link> 
    <table className="table">
  <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Number</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item,index)=>(
        <>
        <tr key={index}>
      <td scope="row">{item.fname}</td>
      <td>{item.lname}</td>
      <td>{item.number}</td>
      <td>{item.city}</td>
    <Link  to={`/updateform/${item._id}`} ><td><button className='btn btn-warning'>Edit</button></td></Link>  
      <td><button  className='btn btn-danger' onClick={(e) => handleDelete(item._id)}>Delete</button></td>
    </tr> 
        
        
        </>
    ))}
    
  </tbody>
</table>





</div>




    </>
  )
}

export default FormList

import React from 'react'
import {Link} from 'react-router-dom'


const Recruitment = () => {
  return (
    <>
      <div className='container m-5'>
      <Link to="/create" ><button className='btn btn-primary m-5'>Create Application</button></Link>  
      <Link to="/home" ><button className='btn btn-success m-5'> Application Details</button></Link>
      </div>
    </>
  )
}

export default Recruitment

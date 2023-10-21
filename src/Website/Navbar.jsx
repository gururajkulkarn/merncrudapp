import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/website" className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
         <Link to="/recruitment" className="nav-link active"> Application</Link> 
        </li>
      </ul>
  
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar

import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import SignUp from './SignUp'
import Login from './Login'
import Appl from './Project/Form'
import FormList from './Project/List'
import FormUpdate from './Project/ListUpdate'
// import Admins from './Admins'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      {/* <Route path="/admins" element={<Admins/>}></Route> */}
      <Route path="/home" element={<Users/>}></Route>
      <Route path="/form" element={<Appl/>} />
      <Route path="/list" element={<FormList/>} />
      <Route path="/updateform/:id" element={<FormUpdate/>} />
      <Route path="/create" element={<CreateUser/>}></Route>
      <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

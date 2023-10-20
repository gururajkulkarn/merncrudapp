import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {
  const [text, setText] = useState({
    name: '',
    email: '',
    age: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ap-south-1.aws.data.mongodb-api.com/app/data-qkomn/endpoint/data/v1/createUser', text, {
        headers: {
          'Authorization': 'Bearer nUfQ0zaDktNoLKDy8uZZs3D9Csma0vVZfILfcVTLMi8XqGzoon0rWBHjRYbvZCn2',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        navigate('/home');
        toast.success('User created successfully');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error creating user');
      });
  };

  return (
    <>
      <ToastContainer />
      <div className='container'>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-control w-25 m-3'
            name='name'
            placeholder='Name'
            value={text.name}
            onChange={handleInputChange}
          />
          <input
            type='text'
            className='form-control w-25 m-3'
            name='email'
            placeholder='Email'
            value={text.email}
            onChange={handleInputChange}
          />
          <input
            type='text'
            className='form-control w-25 m-3'
            name='age'
            placeholder='Age'
            value={text.age}
            onChange={handleInputChange}
          />
          <button className='btn btn-success m-3' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;

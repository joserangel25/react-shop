import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/CreateUsser.scss'

export default function CreateUsser() {

  const { createUser } = useAuthContext();
  const [ usuario, setUsuario ] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeInput = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    const respuesta = await createUser(usuario)
    if(respuesta.created){
      alert(respuesta.message + '. Inicie sesión')
      console.log(respuesta)
      navigate('/login');
    } else {
      console.log(respuesta)
    }
  }
  
  return (
    <div className="login">
    <div className="form-container">
      <h1 className="title">Create account</h1>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Teff" 
            className="input input-name"
            value={usuario.name}
            onChange={changeInput} 
          />

          <label htmlFor="email" className="label">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="platzi@example.com" 
            className="input input-email" 
            value={usuario.email}
            onChange={changeInput} 
          />

          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="*********" 
            className="input input-password" 
            value={usuario.password}
            onChange={changeInput} 
          />

        </div>

        <input type="submit" value="Create" className="primary-button login-button" />
      </form>
    </div>
  </div>
  )
}

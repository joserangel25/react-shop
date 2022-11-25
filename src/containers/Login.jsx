import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { useAuthContext } from '../hooks/useAuthContext';
import Spinner from '@components/Spinner'

import logoYard from '@logos/logo_yard_sale.svg';

import '../styles/Login.scss'

const Login = () => {
  const refForm = useRef(null);
  const navigate = useNavigate();
  const { handleLogin, loadingAuth, mensaje, setMensaje } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(refForm.current);
    const userName = formData.get('email');
    const password = formData.get('password');
    if([userName, password].includes('')){
      alert('Todos los campos son obligatarios')
      return
    }
    const dataUsser = {
      email: userName,
      password
    }

    const { access } = await handleLogin(dataUsser)
    if(access){
      navigate('/all-0')
      setMensaje('')
    }
  }
  return (
    <div className="login-page">
      {
        loadingAuth && <Spinner />
      }
      {
        (!loadingAuth && mensaje) && <p>{mensaje}</p>
      }
      <div className="form-container-login">
        <img src={logoYard} alt="logo" className="logo-login" />

        <form className="form" ref={refForm} onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">Email address</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="platzi@example.cm" 
            className="input input-email" 
          />

          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="*********" 
            className="input input-password" 
          />

          <input type="submit" value="Log in" className="primary-button login-button" />

          <Link to="/recuperar-contrasena">Forgot my password</Link>
        </form>

        <button className="secondary-button signup-button">
          <Link to='/sigin'>
            Sign up
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Login;
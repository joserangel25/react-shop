import React, { useRef } from 'react'
import { Link } from 'react-router-dom' 
import '../styles/Login.scss'

const Login = () => {
  const refForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(refForm.current);
    const userName = formData.get('email');
    const password = formData.get('password');
    if([userName, password].includes('')){
      alert('Todos los campos son obligatarios')
      return
    }
    const data = {
      userName,
      password
    }
    console.log(data)
  }
  return (
    <div className="login">
      <div className="form-container-login">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

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
          {/* <Link to='/sigin' className='link-sigin'> */}
            Sign up
          {/* </Link> */}
        </button>
      </div>
    </div>
  )
}

export default Login;
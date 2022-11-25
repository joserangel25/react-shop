import React, { useState, createContext } from 'react'

export const AuthContext = createContext();
const API_USERS = 'https://api.escuelajs.co/api/v1/users/';
const API_AUTH  = 'https://api.escuelajs.co/api/v1/auth/login'

export const AuthProvider = ({children}) => {

  const [ loadingAuth, setLoadingAuth ] = useState(false);
  const [ mensaje, setMensaje ] = useState('');
  const [ usser, setUsser  ] = useState({});

  const createUser = async (usuario) => {
    usuario.avatar = 'https://api.lorem.space/image/face?w=640&h=480&r=4650'
    try {
      const res = await fetch(API_USERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      })
      // console.log(res)
      const data = await res.json();
      // console.log(data)
      if(res.status === 201){
        return {
          created: true,
          message: 'Usuario creado satisfactoriamente',
          usuario: data
        }
      } else {
        return {
          created: false,
          message: 'Hubo un error. No se pudo creara el usuario',
          statusCode: data.statusCode,
          statusText: data.message
        }
      }
      // return data
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (usuario) => {
    setLoadingAuth(true)
    setMensaje('')
    try {
      const res = await fetch(API_AUTH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      const data = await res.json()
      if(data.access_token){
        setUsser({
          email: usuario.email,
          ...data
        })
        setMensaje('Logeado correctamente. Transfiriendo...')
        return { access: true }
      } else {
        setMensaje(data.message)
        return { ...data, access: false }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingAuth(false)
    }
  }

  const auth = {
    loadingAuth,
    mensaje,
    setMensaje,
    createUser,
    handleLogin,
    usser
  }
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}
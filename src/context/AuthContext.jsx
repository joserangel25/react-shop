import React, { createContext } from 'react'

export const AuthContext = createContext();
const API_USERS = 'https://api.escuelajs.co/api/v1/users/'

export const AuthProvider = ({children}) => {

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

  const auth = {
    createUser
  }
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}
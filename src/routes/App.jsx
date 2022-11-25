import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../containers/Login'
import NotFound from '../pages/NotFound';

import '../styles/global.scss'
import NewPassword from '../pages/NewPassword';
import PasswordSend from '../pages/PasswordSend';
import CreateUsser from '../pages/CreateUsser';
import { AppContextProvider } from '../context/AppContext';
import ListadoProductos from '../containers/ListadoProductos';
import { AuthProvider } from '../context/AuthContext';

const App = () => {
  return (
    
    <AppContextProvider>
    <BrowserRouter>
      <AuthProvider>

        <Layout>
        <Routes>
            <Route path='/' element={<Home />}>
              <Route path=':categoria' element={<ListadoProductos />} />
            </Route>
            <Route path='/login' element={<Login />}/>
            <Route path='/sigin' element={<CreateUsser />}/>
            <Route path='/recuperar-contrasena' element={<NewPassword />} />
            <Route path='/password-send' element={<PasswordSend />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </Layout>
      </AuthProvider>
        
    </BrowserRouter>
    </AppContextProvider>       
  )
}

export default App
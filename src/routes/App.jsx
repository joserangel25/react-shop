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
import MainProductos from '../containers/MainProductos';
import ListadoProductos from '../containers/ListadoProductos';

const App = () => {
  return (
    
    <AppContextProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Home />}>
              <Route path=':categoria' element={<ListadoProductos />} />
            </Route>
            {/* <Route path='/categorias/:categoria' element={<Home />} /> */}

            <Route path='/login' element={<Login />}/>
            <Route path='/sigin' element={<CreateUsser />}/>
            <Route path='/recuperar-contrasena' element={<NewPassword />} />
            <Route path='/password-send' element={<PasswordSend />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
        
    </BrowserRouter>
    </AppContextProvider>       
  )
}

export default App
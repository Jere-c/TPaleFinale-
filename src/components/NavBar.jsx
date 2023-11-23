import { BrowserRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { PerfilUser } from '../pages/PerfilUser';
import Register from '../pages/Register';
import NuevaPublicacion from '../pages/CrearPublicacion';

import { estilos } from '../Styles';

export const NavBar = () => {
  return (
    <>
      <BrowserRouter>

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={estilos.navBar} >
            <Toolbar style={estilos.barra}>
              <div>
                <Link to={'./'}><Button color="inherit" style={estilos.boton2}>Home</Button></Link>
                <Link to={'./crearpublicacion'}><Button color="inherit" style={estilos.boton2}>Nueva Publicacion</Button></Link>
              </div>


              <div>
                <Link to={'./perfiluser'}><Button color="inherit" style={estilos.boton2}>Perfil</Button></Link>
                <Link to={'./login'}><Button color="inherit" style={estilos.boton2}>Login</Button></Link>
                <Link to={'./register'}><Button color="inherit" style={estilos.boton2}>Registrarse</Button></Link>
              </div>



            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route exact path='/' Component={Home}>
          </Route>
          <Route path='/crearpublicacion' Component={NuevaPublicacion}>
          </Route>
          <Route path='/login' Component={Login}>
          </Route>
          <Route path='/perfiluser' Component={PerfilUser}>
          </Route>
          <Route path='/register' Component={Register}>
          </Route>
        </Routes>

      </BrowserRouter>


    </>
  )
};



export default NavBar
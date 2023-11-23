import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageFiles from '../indeximg.jsx';
import { estilos } from '../Styles.jsx';
import { useState } from 'react';

import { AuthContext, useAuth } from '../context/AuthContext.jsx'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useContext } from 'react';



export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(AuthContext)


  const handleLogin = () => {
    axios.post(`http://localhost:3000/api/login`, {
      email,
      password
    })
      .then((res) => {
        const handleTheme = () =>{
          context.setUser(res.data)
      }
      handleTheme()
        console.log(context.user.image)
      })
  }

  return (
    <div style={estilos.todo}>
      <div style={estilos.card}>
        <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ maxHeight: 200, maxWidth: 200, margin: '2rem auto auto auto' }}
              image={ImageFiles.image1} // Use the imported image variable here
              alt=""
            />
            <br></br>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={estilos.titulos}>
                Iniciar Sesion
              </Typography>
              <TextField
                required
                id="outlined-required"
                label="Email (Requerido)"
                placeholder="Ingrese Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br>
              </br>
              <br>
              </br>
              <TextField
                required
                id="outlined-password-input"
                label="Contraseña(Requerida)"
                type='password'
                autoComplete="current-password"
                placeholder='Ingrese Contraseña'
                onChange={(e) => setPassword(e.target.value)}
              />

            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: 'flex' }}>
            <div style={estilos.cont}>
              <Button variant="contained" onClick={handleLogin} size="large" style={estilos.boton}>Login</Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>

  );

}




import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { estilos } from '../Styles';


import { useState } from 'react';
import axios from 'axios';

export default function Register() { 
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');

    const handleCreate = () => {
      axios.post(`http://localhost:3000/api/register`, {
          username,
          email,
          password,
          image
      })
          .then((res) => {
                alert('Se creo el nuevo usuario')
          })
  }

 
  return (
    <div style={estilos.todo}>
      <div style={estilos.card}>
    <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
      <CardMedia
        sx={{ height: 60 }} 
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" style={estilos.titulos}>
          Crea tu cuenta
        </Typography>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre" onChange={(e) => setUsername(e.target.value)} variant="filled" />
      <br/>
      <TextField id="filled-basic" label="E-mail" onChange={(e) => setEmail(e.target.value)} variant="filled" />
      <br/>
      <TextField id="standard-basic" type='password' onChange={(e) => setPassword(e.target.value)} label="Contraseña" variant="filled" />
      <br/>
      <TextField id="standard-basic" type='text' onChange={(e) => setImage(e.target.value)} label="URL de imagen" variant="filled" />
      <br/>
    </Box>
      </CardContent>
      <CardActions>
        <div style = {estilos.cont}>
        {/* <Button variant="secondary"  style={estilos.boton2}>cancelar</Button> */}
        <Button variant="contained" onClick={handleCreate} style={estilos.boton} >crear</Button>
        </div>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
  


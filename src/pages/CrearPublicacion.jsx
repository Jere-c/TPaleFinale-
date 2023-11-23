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
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function NuevaPublicacion() { 
  const context = useContext(AuthContext)
  const userid = context.user.id
  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleCreate = () => {
      axios.post(`http://localhost:3000/api/publicaciones`, {
          title,
          description,
          image,
          userid
      })
          .then((res) => {
                alert('Se creo la nueva publicacion')
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
         Nueva Publicacion
        </Typography>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Titulo" onChange={(e) => setTitle(e.target.value)} variant="filled" />
      <br/>
      <TextField id="filled-basic" label="Descripcion" onChange={(e) => setDescription(e.target.value)} variant="filled" />
      <br/>
      <TextField id="standard-basic" type='text' onChange={(e) => setImage(e.target.value)} label="Fecha" variant="filled" />
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

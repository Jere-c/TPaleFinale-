import React , {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import { estilos } from '../Styles';
import FormDialog from '../components/FormDialog';
import TextField from '@mui/material/TextField';
import { Card, CardContent, CardMedia } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, CardActionArea, CardActions } from '@mui/material';


export function PerfilUser() {
  const context = useContext(AuthContext)
  const [username, setUsername] = useState(context.user.username)
  const [image, setImage] = useState(context.user.image)
  
    return (
        <>
        <div style={estilos.todo}>
      <div style={estilos.card}>
    <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
      <CardMedia
        sx={{ height: 8 }} 
      />
      <CardContent >
      <div style={estilos.profile}>
                <h1 style={estilos.titulos}>Perfil</h1>
                <Avatar alt="Remy Sharp" src={image} style={estilos.avatar} />
                <TextField
                    disabled
                    label="Usuario"
                    id="outlined-size-small"
                    defaultValue={username}
                    size="small"
                    variant="filled"
                />
                <TextField
                    disabled
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    defaultValue="Agustin Gonzalez"
                    autoComplete="current-password"
                    variant="filled"
                />
                      <FormDialog title="Editar perfil" />
    </div>
      </CardContent>
    </Card>
    </div>
    </div>
        </>
    )
}


import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { estilos } from '../Styles';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function FormDialog(props) {
    const context = useContext(AuthContext)
    const [username, setUsername] = useState(context.user.username)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button style={estilos.boton} variant="contained" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={estilos.dialogo}>{props.title}</DialogTitle>
                <DialogContent style={estilos.dialogo}>
                    <TextField 
                        id="standard-basic"
                        label="Usuario"
                        defaultValue={username}
                        variant="filled"
                    />
                    <br></br>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        defaultValue="Agustin Gonzalez"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions style={estilos.dialogo}>
                    <Button style={estilos.dialogo} onClick={handleClose}>Cancelar</Button>
                    <Button style={estilos.dialogo} onClick={handleClose}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
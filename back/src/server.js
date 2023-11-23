import express from "express"
import morgan from "morgan"
import sequelize from "./db/config.js"
import cors from 'cors'
import cookieParser from "cookie-parser"

//esta importacion tiene un nombre inventado (porque se trae el archivo entero)
import authRoutes from "./routes/auth.routes.js"
import authPublicacion from "./routes/publicacion.routes.js"

class Server{
    constructor(){
        this.app = express()
        this.middlewares()
        this.connectionDB()
        this.listen()
    }
    
    connectionDB(){
        console.log("me estoy ejecutando")
        sequelize.authenticate()
        .then(()=>{
            console.log('Conexion exitosa a la BD')
        })
        .catch((error)=>{
            console.log('error al conectar con la BD', error)
        })
    }
    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(cookieParser())

        //se define la ruta donde inicia 
        this.app.use("/api" , authRoutes)
        this.app.use("/api" , authPublicacion)
    }
    listen(){ 
        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto', 3000)
        })

    }
}


export default Server

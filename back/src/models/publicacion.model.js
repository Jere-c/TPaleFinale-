import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config.js';
import User from './user.model.js';

class Publicacion extends Model { }

Publicacion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false

    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    userid:{
        type:DataTypes.INTEGER,
        foreignKey:true
        }
   },
    {
        sequelize,
        modelName: 'Publicacion'
    });
      
    Publicacion.associate = models => {
        Publicacion.belongsTo(models.User)
    }
   

Publicacion.sync()
    .then(() => {
        console.log('La tabla de Publicacion ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de Publicacion: ', error);
    });

export default Publicacion;
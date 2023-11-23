import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config.js';

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }    
   },
    {
        sequelize,
        modelName: 'User'
    });

    User.associate = models => {
        User.hasMany(models.Publicacion)
    }
      

User.sync()
    .then(() => {
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });

export default User;
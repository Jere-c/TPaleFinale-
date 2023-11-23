import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'socialize2.0',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

export default sequelize;
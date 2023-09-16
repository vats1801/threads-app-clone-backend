import { Sequelize } from "sequelize";
import * as connection from './connection'


// @ts-ignore
export default new Sequelize(
    String(connection.DBConfig.database),
    String(connection.DBConfig.username),
    String(connection.DBConfig.password),
    {
        host: connection.DBConfig.host,
        dialect: connection.DBConfig.dialect as any,
        logging: false, 
    }
);
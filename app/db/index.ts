import { Sequelize } from "sequelize-typescript";
import config from "../config";
import path from "path";
import  { dbLogger } from "../logger";


const sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_password, {
    host: config.db.db_host,
    port: config.db.db_port as unknown as number ,
    dialect: 'mysql',
    logging: msg => dbLogger.info(msg),
    models:[path.join(__dirname, '..','model/**/*.ts'),path.join(__dirname, '..','model/**/*.js')],
    define:{
        timestamps: true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
    },
  });

const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default db

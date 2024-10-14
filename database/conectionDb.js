import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_PASSWORD, DB_TEST_NAME, NODE_ENV } from "../config.js";

const DB_NAME = NODE_ENV === " test" ? DB_TEST_NAME:DB_DEV_NAME; 


const conection_db = new Sequelize(DB_NAME, 'root', DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

export default conection_db
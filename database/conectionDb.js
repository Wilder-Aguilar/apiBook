import { Sequelize } from "sequelize";

const conection_db = new Sequelize('book_app', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

export default conection_db

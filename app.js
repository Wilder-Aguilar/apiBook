import conection_db from "./database/conectionDb.js";
import bookModel from "./models/bookModel.js";

try {
    await conection_db.authenticate();
    console.log('Conexion exitosa, 👌');

    await bookModel.sync({ force: true });
    console.log('Tabla de libros creada');

  } catch (error) {
    console.error('Ups, conexion fallida 😢', error);
  }
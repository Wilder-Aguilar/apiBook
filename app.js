import conection_db from "./database/conectionDb.js";
import bookModel from "./models/bookModel.js";
import express from "express"
import bookRouter from "./routers/routes.js";
import cors from 'cors';

const app = express()

app.use (cors())
app.use (express.json())

app.get ("/hola", (req,res)=>{
  res.send('Hola primera api')
})

app.use('/book', bookRouter)

try {
    await conection_db.authenticate();
    console.log('Conexion exitosa, 👌');

    await bookModel.sync({ force: false });
    console.log('Tabla de libros creada');

  } catch (error) {
    console.error('Ups, conexion fallida 😢', error);
  }

app.listen(8000,()=>{
  console.log('working server up http://localhost:8000')
})
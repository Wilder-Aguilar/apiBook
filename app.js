import conection_db from "./database/conectionDb.js";
import bookModel from "./models/bookModel.js";
import userModel from "./models/userModel.js";
import express from "express"
import bookRouter from "./routers/routes.js";
import cors from 'cors';
import authRouter from "./routers/authRoutes.js";

export const app = express()

app.use(cors())
app.use(express.json())

app.get("/hola", (req, res) => {
  res.send('Hola primera api')
}
)

app.use('/books', bookRouter)
app.use('/auth', authRouter)

try {
  await conection_db.authenticate();
  console.log('Conexion exitosa, 👌');

  await bookModel.sync({ force: true });
  console.log('Tabla de libros creada');

  await userModel.sync({ force: true });  
    console.log('Tabla de usuario creada');

} catch (error) {
  console.error('Ups, conexion fallida 😢', error);
}

export const server = app.listen(8000, () => {
  console.log('working server up http://localhost:8000')
}
)
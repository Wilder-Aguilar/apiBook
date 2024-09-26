import express from 'express';
import { getAllBooks } from '../controllers/bookController.js';

const bookRouter = express.Router ();

bookRouter.get('/', getAllBooks);

//bookRouter.put('/:id', updateBook);
//bookRouter.delete('/:id', deleteBook);
//bookRouter.post('/', createBook);

export default bookRouter
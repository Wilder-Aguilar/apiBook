import express from 'express';
import { getAllBooks} from '../controllers/bookController.js';

const bookRouter = express.Router ();

bookRouter.get('/', getAllBooks);
// bookRouter.get('/:id', getOneBook);
// bookRouter.post('/', postBook);
// bookRouter.put('/:id', putBook);
// bookRouter.delete('/:id', deleteBook);

export default bookRouter
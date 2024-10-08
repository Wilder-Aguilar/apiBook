import bookModel from "../models/bookModel.js"

export const getAllBooks = async(req,res) => {
    try{
        const books = await bookModel.findAll()
        res.json(books)
    }
        catch(error){
            res.json(message, error.message)
        }
}

export const createBook = async(req,res) => {
    try {
        const bookTitle = req.body.bookTitle;
        const authorName = req.body.authorName;
        const bookDescription = req.body.bookDescription;
        const newBook = await bookModel.create({
            bookTitle,
            authorName,
            bookDescription
        });
        res.status(201).json(newBook);
    } catch (error){
        res.status(500).json({messageg: error.message});
    }
}
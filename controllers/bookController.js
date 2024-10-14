import bookModel from "../models/bookModel.js"

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.findAll()
        res.json(books);
    }
    catch (error) {
        res.json(message, error.message)
    }
}

export const createBook = async (req, res) => {
    try {
        const {bookTitle, authorName, bookDescription}=req.body;
        const newBook= await bookModel.create({
            bookTitle,
            authorName,
            bookDescription,
        });
        res.status(201).json(newBook);
    }
    catch(error){
        res.json({message:error.message});
    }

    // // EL SIGUIENTE CODIGO TAMBIÉN FUNCIONA
    // try {
    //     const bookTitle = req.body.bookTitle;
    //     const authorName = req.body.authorName;
    //     const bookDescription = req.body.bookDescription;
    //     const newBook = await bookModel.create({
    //         bookTitle,
    //         authorName,
    //         bookDescription
    //     });
    //     res.status(201).json(newBook);
    // } catch (error) {
    //     res.status(500).json({ messageg: error.message });
    // }
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await bookModel.findByPk(id);

        if (!deletedBook) {
            return res.status(404).json({
                message: "Libro no encontrado",
            });
        }
        await deletedBook.destroy();
        return res.status(200).json({
            message: "Libro eliminado"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fallo al eliminar el libro",
            error: error.message,
        });
    }
};
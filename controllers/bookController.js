import bookModel from "../models/bookModel.js"

export const getAllBooks = async(req,res)=>{
    try{
        const books = await bookModel.findAll()
        res.json(books)
    }
        catch(error){
            res.json(message, error.message)
        }
}

// export const getOneBook = async(req,res)=>{
//     const {id} = req.params;
//     res.json({
//         msg:'getOneBook'
//     })
// }

// export const putBook = async(req,res)=>{
//     const {id} = req.params;
//     const {body} = req;

//     res.json({
//         msg:'getUsuarios'
//     })
// }

// export const deleteBook = async(req,res)=>{
//     const {id} = req.params;
    
//     res.json({
//         msg:'deleteUsuarios'
//     })
// }

export const postBook = async(req,res)=>{
    const {body} = req;

    try {
      const book = new bookModel(body)
      await book.save();
      res.json(book)
    
    } catch (error) {
        res.json(message, error.message)
    }
}
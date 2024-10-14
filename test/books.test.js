import request from "supertest";
import { app, server } from "../app.js";
import conection_db from "../database/conectionDb.js";
import bookModel from "../models/bookModel.js";

describe("crud books", () => {
    test("METHOD GET - should return a response with status 200 and type json", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toBe(200);
        expect(response.header["content-type"]).toContain("application/json")
    });

    test('METHOD CREATE - should create a book', async () => {
        const bookData = {
            bookTitle: 'Test title',
            authorName: 'Test Author',
            bookDescription: 'This is a test description',
        };

        const response = await request(app).post('/books').send(bookData);
        expect(response.statusCode).toBe(201);
        expect(response.body.bookTitle).toBe(bookData.bookTitle);
        expect(response.body.authorName).toBe(bookData.authorName);
        expect(response.body.bookDescription).toBe(bookData.bookDescription);

    });

    test("METHOD DELETE - should delete a book", async () => {
        const bookForDelete = bookModel.create({
            bookTitle: 'Test title',
            authorName: 'Test Author',
            bookDescription: 'This is a delete test',
        });
        const response = await request(app)
            .delete(`/books/${bookForDelete.id}`);

        expect(response.statusCode).toBe(200);
        // expect(response.body.message).toBe("Libro eliminado")
    });

    test("METHOD UPDATE - should update the book", async () => {
        const bookForUpdate = await bookModel.create({
            bookTitle: 'Test title',
            authorName: 'Test Author',
            bookDescription: 'Test description',
        });
        const updateData = {
            bookTitle: 'Test title',
            authorName: 'Test Author',
            bookDescription: 'This is a test update',
        };
        const response = await request(app)
            .put(`/books/${bookForUpdate.id}`).send(updateData);
        expect(response.statusCode).toBe(200);
        expect(response.body.bookDescription).toContain("update")
    });

    afterEach(async () => {

        await bookModel.destroy({
            where: { bookTitle: 'Test title' }
        });
    });

    afterAll(() => {
        server.close();
        conection_db.close();
    });
});
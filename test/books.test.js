import request from "supertest";
import { app, server } from "../app.js";
import conection_db from "../database/conectionDb.js";

describe("crud books", () => {
    test("should return a response with status 200 and type json", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toBe(200);
        expect(response.header["content-type"]).toContain("application/json")
    });

    test('should create a book', async () => {
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

    afterAll(() => {
        server.close();
        conection_db.close();
    });
});
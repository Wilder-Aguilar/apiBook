import request from "supertest";
import { app } from "../app.js";

describe ("crud books", ()=>{
    test("should return a response with status 200 and type json", async ()=>{
        const response = await request (app).get("/books");
        expect(response.statusCode).toBe(200);
        expect(response.header["content-type"]).toContain("application/json")
    });
    afterAll(()=>{
        app.close();
    });
});

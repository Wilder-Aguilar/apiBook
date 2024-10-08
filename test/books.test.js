import request from "supertest";
import { app , server } from "../app.js";
import conection_db from "../database/conectionDb.js";


describe ("crud books", ()=>{
    test("should return a response with status 200 and type json", async ()=>{
        const response = await request (app).get("/books");
        expect(response.statusCode).toBe(200);
        expect(response.header["content-type"]).toContain("application/json")
    });
    afterAll(()=>{
        server.close();
        conection_db.close();
    });
});

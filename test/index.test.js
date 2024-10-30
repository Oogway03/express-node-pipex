const request = require("supertest");
const app = require("../app");

describe("GET /hello", () => {
  it("should return a hello message", async () => {
    const response = await request(app).get("/"); // Usa Supertest per fare la richiesta
    expect(response.status).toBe(200); // Verifica che lo status sia 200
    expect(response.body).toHaveProperty(
      "message",
      "Hello from master Oogway!"
    ); // Verifica il corpo della risposta
  });
});

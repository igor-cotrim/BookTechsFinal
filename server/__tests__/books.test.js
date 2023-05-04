const request = require("supertest");

const connection = require("../connection");

beforeAll(async () => {
  // run the migrations and do any other setup here
  await connection.migrate.latest();
});

describe("Books API", () => {
  test("should return status 200", async () => {
    const response = await request("http://localhost:3000").get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

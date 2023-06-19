import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
  it("Should return 404 when city is not found", async () => {
    const response = await request
      .post("/")
      .send({ cityName: "The city does not city" });
    expect(response.status).toBe(200);
    expect(response.body.weatherText).toBe("City not found");
  });
  it("Should return 404 when city is not found", async () => {
    const response = await request.post("/").send({ cityName: "Paris" });
    expect(response.status).toBe(200);
    expect(response.body.weatherText);
  });
});

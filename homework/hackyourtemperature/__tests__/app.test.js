import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
  it("City not found", async () => {
    const response = await request
      .post("/")
      .send({ cityName: "city does not city" });
    expect(response.status).toBe(200);
    expect(response.body.weatherText).toBe("City not found");
  });
  it("City found", async () => {
    const response = await request.post("/").send({ cityName: "Paris" });
    expect(response.status).toBe(200);
    expect(response.body.weatherText);
  });
});

const supertest = require("supertest");
const mongoose = require("mongoose");
const { mongodbUriTest } = require("../config");

const { startServer } = require("../app");

describe("Test for Purchases", () => {
  let api;
  let serverApp;
  beforeAll(async () => {
    const { app, server } = await startServer();
    api = supertest(app);
    serverApp = server;
    await mongoose.set("strictQuery", false).connect(mongodbUriTest);
  });
  afterAll(async () => {
    await mongoose.connection.close();
    serverApp.close();
  });

  describe(" /api/payments", () => {
    it("payments with user not found", async () => {
      const response = await api
        .post("/api/payments", {
          product: "63ca2323a3c4fa10013fe5b5",
          quantity: 5,
          user: "63cada2a21e7f44addb794d2",
        })
        .send();
      expect(response.status).toBe(422);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("payments with product not found", async () => {
      const response = await api
        .post("/api/payments", {
          product: "63ca2323a3c4fa10013fe5b3",
          quantity: 5,
          user: "63cada2a21e7f44addb794d2",
        })
        .send();
      expect(response.status).toBe(422);
      expect(response.headers["content-type"]).toContain("json");
    });
  });
});

const supertest = require("supertest");
const mongoose = require("mongoose");
const { mongodbUriTest } = require("../config");

const { startServer } = require("../app");

describe("Test for Products", () => {
  let api;
  let serverApp;
  beforeAll(async () => {
    const { app, server } = await startServer();
    api = supertest(app);
    serverApp = server;
    await mongoose.set("strictQuery", false).connect(mongodbUriTest);
  });
  afterAll(async () => {
    serverApp.close();
    await mongoose.connection.close();
  });

  describe(" /api/products", () => {
    it("products are found", async () => {
      const response = await api.get("/api/products").send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("products return data", async () => {
      const response = await api.get("/api/products").send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("metadata");
    });
    it("products return data not empty", async () => {
      const response = await api.get("/api/products").send();
      expect(response.body.data).toBeInstanceOf(Array);
    });
    it("products return data with 4 items", async () => {
      const response = await api.get("/api/products?size=4").send();
      expect(response.body.data).toHaveLength(4);
    });
  });

  describe(" /api/products/63ca2323a3c4fa10013fe5b5", () => {
    const productId = "63ca2323a3c4fa10013fe5b5";
    it("product is found", async () => {
      const response = await api.get("/api/products/" + productId).send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("product is not found", async () => {
      const productIdFake = "63ca2323a3c4fa10013fe5b3";
      const response = await api.get("/api/products/" + productIdFake).send();
      expect(response.status).toBe(404);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("product return object", async () => {
      const response = await api.get("/api/products/" + productId).send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("metadata");
    });
    it("product return object valid", async () => {
      const response = await api.get("/api/products/" + productId).send();
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("price");
      expect(response.body.data).toHaveProperty("currency");
      expect(response.body.data).toHaveProperty("quantity");
    });
  });
});

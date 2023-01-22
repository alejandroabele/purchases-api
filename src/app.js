const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongodbUri, port } = require("./config");
const productRoutes = require("./routes/products");
const purchaseRoutes = require("./routes/purchases");

const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const startServer = async () => {
  // Routes
  app.get("/", (req, res) => {
    res.send("Welcome Purchases API");
  });

  //Middleware
  app.use(express.json());
  app.use("/api", productRoutes);
  app.use("/api", purchaseRoutes);

  const swaggerOptions = {
    swaggerDefinition: require("./docs/swagger.json"), // swagger definition
    apis: [], // path where API specification are written
  };
  app.use(
    "/api-doc",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSDoc(swaggerOptions))
  );

  if (process.env.NODE_ENV !== "test") {
    //Mongodb connection
    mongoose
      .set("strictQuery", false)
      .connect(mongodbUri)
      .then(() => console.log("Connected to Mongo DB "))
      .catch((err) => console.log(err));
  }

  //Listen port
  const server = app.listen(port, () => {
    console.log("Server listening on port", port);
  });
  return { app, server };
};

module.exports = { startServer };

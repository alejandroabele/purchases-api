const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const { port } = require("./config");
const doc = {
  info: {
    title: "Purchases API",
    description: "Purchases and product manager api",
  },
  host: `localhost:${port}/api`,
  schemes: ["http"],
  definitions: {
    Product: {
      name: "product 2",
      price: 2.5,
      currency: "USD",
      image: "url:image",
      quantity: 1,
    },
    User: {
      name: "alejandro",
      email: "alejandroabele@hotmail.com",
    },
    Purchase: {
      currency: "USD",
      quantity: 1,
      totalAmount: 5.2,
      user: "63cada670677729b7939e349",
      product: "63ca2323a3c4fa10013fe5b5",
    },
    PurchaseRequest: {
      product: "63ca2323a3c4fa10013fe5b5",
      quantity: 5,
      user: "63cada670677729b7939e349",
    },
    PurchaseSuccess: {
      metadata: {},
      data: {
        currency: "USD",
        quantity: 1,
        totalAmount: 5.2,
        user: "63cada670677729b7939e349",
        product: "63ca2323a3c4fa10013fe5b5",
      },
    },
    ProductSuccess: {
      metadata: {},
      data: {
        _id: "63ca2323a3c4fa10013fe5b5",
        name: "pepito",
        price: 1.5,
        currency: "USD",
        quantity: 15,
      },
    },
    PurchaseProductNotFound: {
      message: "Product not found",
    },
    ProductNotFound: {
      message: "Product not found",
    },
    ProductsSuccess: {
      metadata: {
        page: 1,
        total_records: 44,
      },
      data: [
        {
          _id: "63ca2323a3c4fa10013fe5b5",
          name: "pepito",
          price: 1.5,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:14:11.304Z",
          updatedAt: "2023-01-20T05:14:11.304Z",
          __v: 0,
        },
        {
          _id: "63ca23744ed3b7362bb88b99",
          name: "product 2",
          price: 123,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:15:32.857Z",
          updatedAt: "2023-01-20T05:15:32.857Z",
          __v: 0,
        },
        {
          _id: "63ca23b84577b2282486886f",
          name: "product 2",
          price: 123,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:16:40.813Z",
          updatedAt: "2023-01-20T05:16:40.813Z",
          __v: 0,
        },
        {
          _id: "63ca23bf4577b22824868871",
          name: "product 3",
          price: 123,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:16:47.896Z",
          updatedAt: "2023-01-20T05:16:47.896Z",
          __v: 0,
        },
        {
          _id: "63ca23cb4577b22824868873",
          name: "product 3",
          price: 1223.2,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:16:59.479Z",
          updatedAt: "2023-01-20T05:16:59.479Z",
          __v: 0,
        },
        {
          _id: "63ca24042d15268c01990d69",
          name: "pepito",
          price: 1.5,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:17:56.199Z",
          updatedAt: "2023-01-20T05:17:56.199Z",
          __v: 0,
        },
        {
          _id: "63ca24a2bc212582cf2fbf9b",
          name: "product 3",
          price: 1223.2,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:20:34.609Z",
          updatedAt: "2023-01-20T05:20:34.609Z",
          __v: 0,
        },
        {
          _id: "63ca24a5bc212582cf2fbf9e",
          name: "product 3",
          price: 1223.2,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:20:37.427Z",
          updatedAt: "2023-01-20T05:20:37.427Z",
          __v: 0,
        },
        {
          _id: "63ca24a5bc212582cf2fbfa0",
          name: "product 3",
          price: 1223.2,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:20:37.998Z",
          updatedAt: "2023-01-20T05:20:37.998Z",
          __v: 0,
        },
        {
          _id: "63ca24a6bc212582cf2fbfa2",
          name: "product 3",
          price: 1223.2,
          currency: "USD",
          quantity: 15,
          createdAt: "2023-01-20T05:20:38.338Z",
          updatedAt: "2023-01-20T05:20:38.338Z",
          __v: 0,
        },
      ],
    },
  },
  components: {
    responses: {
      PurchaseSuccess: {
        description: "Éxito al realizar la operación",
        content: {
          "application/json": {
            example: {
              metadata: {},
              data: {
                currency: "USD",
                quantity: 1,
                totalAmount: 5.2,
                user: "63cada670677729b7939e349",
                product: "63ca2323a3c4fa10013fe5b5",
              },
            },
          },
        },
      },
    },
  },
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/products", "./routes/purchases"];
swaggerAutogen(outputFile, endpointsFiles, doc);

const express = require("express");
const router = express.Router();
const { find, findOne, create } = require("../controllers/products");
const { isAuthenticated } = require("../middleware");

router.get("/products", isAuthenticated, (req, res, next) => {
  find(req, res);
  /* #swagger.parameters['page'] = {
        in: "query",
        description: "number page of page" ,
} */
  /* #swagger.parameters['size'] = {
        in: "query",
        description: "size of page, default value is 10" ,
} */
  /* #swagger.parameters['query'] = {
        in: "query",
        description: "filter by name" ,
} */
  /* #swagger.parameters['currency'] = {
        in: "query",
        description: "filter by currency" ,
} */
  /* #swagger.responses[200] = {
       description: 'Product Success',
       schema: { $ref: '#/definitions/ProductsSuccess' }
   } */
});
router.get("/products/:id", isAuthenticated, (req, res, next) => {
  findOne(req, res);
  /*  #swagger.responses[404] = {
       description: 'Product not found',
       schema: { $ref: '#/definitions/ProductNotFound' }
   }
     #swagger.responses[200] = {
       description: 'Product Success',
       schema: { $ref: '#/definitions/ProductSuccess' }
   } */
});

/* router.post("/products", isAuthenticated, (req, res, next) => {
  create(req, res);
}); */
module.exports = router;

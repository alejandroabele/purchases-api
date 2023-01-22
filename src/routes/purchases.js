const express = require("express");
const router = express.Router();
const { create } = require("../controllers/purchases");
const { isAuthenticated } = require("../middleware");

router.post("/payments", isAuthenticated, (req, res, next) => {
  create(req, res);
  /*	#swagger.requestBody = {
            required: true,
            schema: { $ref: "#/definitions/PurchaseRequest" }
    } */
  /* #swagger.responses[200] = {
      description: 'Success Purchases',
      schema: { $ref: '#/definitions/PurchaseSuccess' }
  } 
  #swagger.responses[422] = {
      description: 'Product not found in purchases',
      schema: { $ref: '#/definitions/PurchaseProductNotFound' }
  }  */
});
module.exports = router;

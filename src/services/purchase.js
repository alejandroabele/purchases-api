const purchaseSchema = require("../models/purchase");
const { findOne: findOneProduct } = require("../services/product");
const { findOne: findOneUser } = require("../services/user");
const { CodeError } = require("../utils");
module.exports = {
  create: async ({ product, quantity, user }) => {
    try {
      await findOneUser(user);
      const productFound = await findOneProduct(product);
      const totalAmount = productFound.price * quantity;
      const client = purchaseSchema({
        product,
        totalAmount,
        user,
        quantity,
        currency: productFound.currency,
      });
      return client.save();
    } catch (error) {
      if (error.code === 404) {
        throw new CodeError(error.message, 422);
      }
      throw new CodeError(error.message, 500);
    }
  },
};

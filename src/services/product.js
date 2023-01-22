const productSchema = require("../models/product");
const { options, CodeError } = require("../utils");
const buildFilter = ({ query, currency }) => {
  const filter = {};
  if (query) {
    filter.name = query;
  }
  if (currency) {
    filter.currency = currency;
  }
  return filter;
};
module.exports = {
  findPaginate: ({ page, size, query, currency }) => {
    try {
      return productSchema.paginate(
        buildFilter({ query, currency }),
        options({ page, size })
      );
    } catch (error) {
      throw error;
    }
  },
  findOne: async (id) => {
    try {
      const data = await productSchema.findById(id);
      if (data) {
        return data;
      }
      throw new CodeError("Product not found", 404);
    } catch (error) {
      throw error;
    }
  },
  create: (data) => {
    try {
      const client = productSchema(data);
      return client.save();
    } catch (error) {}
  },
};

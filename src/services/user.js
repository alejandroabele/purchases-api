const userSchema = require("../models/user");
const { CodeError } = require("../utils");
module.exports = {
  findOne: async (id) => {
    try {
      const data = await userSchema.findById(id);
      if (data) {
        return data;
      }
      throw new CodeError("User not found", 404);
    } catch (error) {
      throw error;
    }
  },
};

require("dotenv").config();
module.exports = {
  port: process.env.PORT || 9000,
  mongodbUri: process.env.MONGODB_URI,
  //TODO: Set other database for testing or memory database
  mongodbUriTest: process.env.MONGODB_URI_TEST,
};

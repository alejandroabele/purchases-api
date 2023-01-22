const isAuthenticated = (req, res, next) => {
  //TODO: Build Middleware based in jwt
  next();
};
module.exports = {
  isAuthenticated,
};

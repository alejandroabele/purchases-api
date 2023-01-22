const { create: createServices } = require("../services/purchase");
const { handleSuccessResponse, handleErrorResponse } = require("../utils");
const create = (req, res) => {
  createServices(req.body)
    .then((data) => {
      res.status(200).json(handleSuccessResponse(data));
      
    })
    .catch((error) =>
      res.status(error.code || 500).json(handleErrorResponse(error.message))
    );
};

module.exports = {
  create,
};

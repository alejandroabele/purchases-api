const {
  findPaginate,
  findOne: findOneServices,
  create: createService,
} = require("../services/product");
const {
  handlePaginateResponse,
  handleErrorResponse,
  handleSuccessResponse,
} = require("../utils");

const find = (req, res) => {
  findPaginate(req.query)
    .then((data) => {
      res.status(200).json(handlePaginateResponse(data));
      
    })
    .catch((err) => {
      res.status(500).json(handleErrorResponse(err));
    });
};
const findOne = async (req, res) => {
  const { id } = req.params;
  findOneServices(id)
    .then((data) => {
      res.status(200).json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.status(error.code || 500).json(handleErrorResponse(error.message));
    });
};

const create = async (req, res) => {
  createService(req.body).then((data) => {
    res.status(200).json(data);
  });
};

module.exports = {
  find,
  findOne,
  create,
};

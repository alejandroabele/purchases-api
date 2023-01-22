const {
  handleSuccessResponse,
  handleErrorResponse,
  handlePaginateResponse,
} = require("./responseHandler");
const { CodeError } = require("./codeError");
const { options } = require("./optionsPaginate");
module.exports = {
  handleSuccessResponse,
  handleErrorResponse,
  handlePaginateResponse,
  CodeError,
  options,
};

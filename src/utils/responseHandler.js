const handlePaginateResponse = (data) => {
  const response = {
    metadata: {},
  };
  if (data.page) {
    response.metadata.page = data.page;
  }
  if (data.totalDocs) {
    response.metadata.total_records = data.totalDocs;
  }
  response.data = data.docs;

  return response;
};

const handleErrorResponse = (message) => {
  return {
    message,
  };
};

const handleSuccessResponse = (data) => {
  const response = {
    metadata: {},
  };
  response.data = data;
  return response;
};

module.exports = {
  handlePaginateResponse,
  handleErrorResponse,
  handleSuccessResponse,
};

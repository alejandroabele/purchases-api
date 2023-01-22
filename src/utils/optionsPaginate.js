module.exports = {
  options: ({ page, size }) => {
    const optionsPaginate = {};
    if (page) {
      optionsPaginate.page = parseInt(page);
    }
    if (size) {
      optionsPaginate.limit = parseInt(size);
    }
    return optionsPaginate;
  },
};

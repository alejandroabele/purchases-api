class CodeError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.code = code;
    this.date = new Date();
  }
}

module.exports = {
  CodeError,
};

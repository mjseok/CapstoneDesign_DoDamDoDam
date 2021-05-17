exports.FormError = class FormError {
  code = 422;
  type = 'form';
  error = {};

  constructor(error) {
    this.error = error;
  }
};

exports.CustomError = class CustomError {
  code = 500;
  type = 'general';
  name = 'Server Error';
  message = 'Unknown Server Error';

  constructor({ code, name, message }) {
    this.code = code;
    this.name = name;
    this.message = message;
  }
};

exports.wrapper = (fn) => (req, res, next) => fn(req, res, next).catch(next);

exports.handleErrors = async (err, req, res, next) => {
  console.log(err.message);
  res.status(err.code || 500).json(err);
};

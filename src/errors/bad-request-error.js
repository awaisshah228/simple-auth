const CustomError=require('./custom-errors');

module.exports= class BadRequestError extends CustomError {
    statusCode = 400;
  
    constructor(message) {
      super(message);
  
      Object.setPrototypeOf(this, BadRequestError.prototype);
    }
  
    serializeErrors() {
      return [{message: this.message}];
    }
  }
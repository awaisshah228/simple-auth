const CustomError=require('./custom-errors');

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Not found error');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{message: 'Not Found'}];
  }
}
module.exports=NotFoundError
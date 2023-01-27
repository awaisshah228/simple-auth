const CustomError = require("../errors/custom-errors");

const errorHandler = (err, req, res, next) => {
  // console.log("hi")
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (err) {
    return res.status(400).send({
      errors:[err.errors],
    });
  }
 
  
 return res.status(400).send({
    errors: ["something went wrong "],
  });
};
module.exports=errorHandler

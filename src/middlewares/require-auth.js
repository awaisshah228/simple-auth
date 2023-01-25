const NotAuthorizedError =require('../errors/not-authorized');

export const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};

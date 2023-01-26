const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const currentUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return next();

    const decoded = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);

    const user = await User.findOne({ _id: decoded.id });
    if (!user) return next();

    req.user = user;
  } catch (error) {}
  next();
};
module.exports = currentUser;

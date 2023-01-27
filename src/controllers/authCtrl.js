const User = require("../models/userModel");
const BadRequestError = require("../errors/bad-request-error");
const { generateAccessToken } = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const authCtrl = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new BadRequestError("User email not found");
    }
    if (!isMatch) {
      throw new BadRequestError("password not match");
    }
    // if(user.password!=password){
    //     throw new BadRequestError("Password not valid")
    // }

    const token = generateAccessToken({ id: user._id });

    res.json(token);
  },
  addUser: async (req, res) => {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    
    if (userExist) {
      throw new BadRequestError("Email already registered");
    }

    const  user = new User({ email, password });
    await user.save();

    res.json({ msg: "User Added", user });
  },
};
module.exports = authCtrl;

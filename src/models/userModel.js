const mongoose = require("mongoose");
const bcrypt= require('bcrypt')

const userSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  //   maxlength: 50,
  // },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await bcrypt.hash(this.get("password"), 12);

    //   const hashed = await Password.toHash(this.get('password'));
    this.set("password", hashed);
  }
  done();

});

module.exports = mongoose.model('user', userSchema)

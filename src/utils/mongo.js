const mongoose = require("mongoose");
const User=require('../models/userModel')

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL || "";
console.log(MONGO_URL)

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

/** */
async function mongoConnect() {

 
  // console.log(MONGO_URL)

  // await mongoose.set("strictQuery", false);

  await mongoose.connect(MONGO_URL);
  if(process.env.DEV){
    const dummy={email:"hamid@gmail.com",password:"12345"}
    const userExist=await User.findOne({email:dummy.email})
    if(!userExist){
      const user=new User(dummy)
      await user.save();

    }
    
  }
}

/** */
async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};

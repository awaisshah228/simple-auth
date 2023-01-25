const User=require('../models/userModel')
const BadRequestError=require('../errors/bad-request-error')
const {generateAccessToken}= require('../utils/generateToken')
const authCtrl={
    login: async(req,res)=>{
        const{email,password}=req.body;

        const user= await User.findOne({email})

        if(!user){
            throw new BadRequestError("User email not found")
        }
        if(user.password!=password){
            throw new BadRequestError("Password not valid")  
        }

        

        const token= generateAccessToken({id:user._id})

        res.json(token)
    }

}
module.exports=authCtrl
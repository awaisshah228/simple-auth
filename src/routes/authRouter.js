const express= require('express')
const router= express.Router();
const authCtrl=require('../controllers/authCtrl')
const requireAuth=require('../middlewares/require-auth')



router.post('/login',authCtrl.login)
router.post('/admin',requireAuth,authCtrl.addUser)


module.exports=router
const express = require('express');
const { userModel } = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
 var cookieParser = require('cookie-parser')
 var cors = require('cors')
require("dotenv").config()
const userRouter = express.Router();
userRouter.use(cors())

userRouter.post("/signup",async(req,res)=>{
      const {name,email,password}=req.body
    try {
        // res.send("santi")
         const isUserPresent = await userModel.findOne({email})
        if(isUserPresent) return res.send("User is already present please resister")

        const hash = await bcrypt.hash(password,8)
        const data = new userModel({name,email,password:hash})
        await data.save()
        res.send({"message":"user SignUp Succesfull"})
        
    } catch (error) {
        res.send(error.message)
        console.log(error)
    }
})

userRouter.post("/login",async(req,res)=>{

    try {
        const {email,password}= req.body;
        const isUserPresent = await userModel.findOne({email})
        if(!isUserPresent) return res.send("User is not register plzz signup ")

        const isPasswordCorrect = await bcrypt.compare(password,isUserPresent.password)
        if(!isPasswordCorrect) return res.send("Invalid Credential")

        const token = await jwt.sign({userId:isUserPresent._id},process.env.JWT_SECRET)
          res.cookie("token",token)
        // console.log(cookieToken)
        res.send({msg:"loggin Succeful",token})
       

        
    } catch (error) {
        res.send(error.message)
        console.log(error)
    }
})

userRouter.get("/logout",async(req,res)=>{

    try {
        const {token} = req.cookies
        if(!token) return res.status(401).send("Unauthorization")

        
            res.send("logout Succesful")        
    } catch (error) {
        res.send(error.message)
    }
})

module.exports={
    userRouter

}




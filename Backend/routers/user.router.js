const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { userModel } = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
var cookieParser = require('cookie-parser')
var cors = require('cors')
const axios = require('axios')
require("dotenv").config()
const userRouter = express.Router();
userRouter.use(cors())

const Client_id = "e943d3a1b6c71a113d3c"
const Client_secret = "6209fd35eeca74bf05684b1cb2634313183598d1"


userRouter.get("/auth/github", async(req, res) => {
    const { code } = req.query
    console.log(code)
    // POST https://github.com/login/oauth/access_token
    // axios.post(`https://github.com/login/oauth/access_token`,{Client_id , Client_secret , code}).then((res)=>{
    //     console.log(res.data);
    // }).catch((err)=>{

    // })
    try {

   const accessToken = await  fetch(`https://github.com/login/oauth/access_token`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: Client_id,
                client_secret: Client_secret,
                code
            })

        }).then((res)=>res.json())
        console.log(accessToken)
        res.send("Sign in with git hub")
        
    } catch (error) {
        res.send(error.message)
    }

})


userRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    try {
        // res.send("santi")
        const isUserPresent = await userModel.findOne({ email })
        if (isUserPresent) return res.send("User is already present please resister")

        const hash = await bcrypt.hash(password, 8)
        const data = new userModel({ name, email, password: hash })
        await data.save()
        res.send({ "message": "user SignUp Succesfull" })

    } catch (error) {
        res.send(error.message)
        console.log(error)
    }
})

userRouter.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        const isUserPresent = await userModel.findOne({ email })
        if (!isUserPresent) return res.send("User is not register plzz signup ")

        const isPasswordCorrect = await bcrypt.compare(password, isUserPresent.password)
        if (!isPasswordCorrect) return res.send("Invalid Credential")

        const token = await jwt.sign({ userId: isUserPresent._id }, process.env.JWT_SECRET)
        res.cookie("token", token)
        // console.log(cookieToken)
        res.send({ msg: "loggin Succeful", token })

        res.sendFile(__dirname + "/behanceclone/src/Pages/Login.jsx")

    } catch (error) {
        res.send(error.message)
        console.log(error)
    }
})

userRouter.get("/logout", async (req, res) => {

    try {
        const { token } = req.cookies
        if (!token) return res.status(401).send("Unauthorization")


        res.send("logout Succesful")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = {
    userRouter

}




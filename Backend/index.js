const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./routers/user.router');
var cookieParser = require('cookie-parser')
var cors = require('cors')
require("dotenv").config()
const app = express()
 
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("sgs")
})

app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server is connected")
})
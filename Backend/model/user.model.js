const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    accessToken:{type:String}
})

const userModel = mongoose.model("user",userSchema)

module.exports={
    userModel
}
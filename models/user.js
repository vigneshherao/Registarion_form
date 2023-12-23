const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        min:1,
        max:30,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        min:8,
        max:30,
        required:true,
    },
})

const User = mongoose.model("User",userSchema);


module.exports = User;
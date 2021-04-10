const mongoose = require("mongoose");
const validator = require("validator");


const registerschema = mongoose.Schema({
    username:{
        type:String,
        //required:true,
        minlength:3
    },
    password:{
        type:String,
        //required:true,
        minlength:8
    },
    phone:{
        type:Number,
        //required:true,
        min:10
    }
})

// we need to create a collection

const register = mongoose.model("Register",registerschema);
module.exports = register;
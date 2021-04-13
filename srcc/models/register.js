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
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        //This validation only works on create and save
        validate: {
          validator: function(el) {
            return el === this.password;
          },
          message: 'Your passwords are not the same'
        }
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
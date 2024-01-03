const mongoose = require('mongoose')
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    favourite:{
        type:Boolean,
        default:false
    }



})



const contactAdd = mongoose.model('contact',contactSchema)

module.exports = contactAdd
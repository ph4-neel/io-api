const mongoose = require('mongoose');


const softSchema = new mongoose.Schema({

    name : {

        type:String,
        required:true,

    },

    description : {

        type:String,
        required:true,

    },

    details :{
        type:String,
        required:true,

    },

    benefits:{
        type:String,
        required:true,

    },

    author:{
        type:String,
        required:true,

    },

    tags:{
        type:String,
        required:true,

    },
});

const Soft = new mongoose.model('Soft', softSchema);

module.exports =Soft;
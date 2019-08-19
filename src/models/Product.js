const mongoose = require('mongoose');

const mongoose_paginate = require('mongoose-paginate')

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },    
});

ProductSchema.plugin(mongoose_paginate);

mongoose.model('Product',ProductSchema)
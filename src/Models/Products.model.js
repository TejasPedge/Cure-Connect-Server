const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    "image": {type : [String], required : true},
    "title": {type : String, required : true},
    "description": {type : String, required : true},
    "price": {type : Number, required : true},
    "originalPrice": {type : Number, required : true},
    "sizes":{type : [String], required : true},
    "category": {type : String, required : true},
    "rating": Number,
    "review": Number,
    "flavour": {type : String, required : true},
    "brand": {type : String, required : true},
    "tags": {type : String, required : true},
    "stock": Number,
    "adminId": {type : String},
})

const PRODUCT_SCHEMA = mongoose.model('product', ProductSchema);

module.exports = {PRODUCT_SCHEMA};
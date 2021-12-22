const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    img:{
        data : Buffer,
        type : String,
        required : true
    }
},{timestamps : true});

const Product = mongoose.model('Customer',productSchema);
module.exports = Product;
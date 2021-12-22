const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    Product_name:{
        type : String,
        required : true
    },
    Product_desc :{
        type : String,
        required : true
    }
},{timestamps : true});


const Orders = mongoose.model('orders',orderSchema);
module.exports = Orders;
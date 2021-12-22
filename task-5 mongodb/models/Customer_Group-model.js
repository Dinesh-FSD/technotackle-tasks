const mongoose = require('mongoose');
const customerGroupSchema = new mongoose.Schema({
    customer_name:{
        type : String,
        required : true
    }
},{timestamps : true});

const CustomerGroup = mongoose.model('Customer',customerGroupSchema);
module.exports = CustomerGroup;
const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
    stock_name:{
        type : String,
        required : true
    }
},{timestamps : true});

const Inventory = mongoose.model('Inventory/Stock',inventorySchema);
module.exports = Inventory ;
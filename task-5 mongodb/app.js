const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const URI = "mongodb+srv://Dinesh:tSb2ySwnWq4lBJi9@cluster0.osbra.mongodb.net/techno-tackle_E-commerce?retryWrites=true&w=majority";
mongoose.connect(URI)
.then((res)=>{ app.listen(4000,()=>{
    console.log("the express is listening in the port 4000:");
    console.log("Database is  connected sucessfully");
    });
})
.catch((err)=>console.log("database is not connected to  the network"));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');


// routers 

// const Customers_route = require('./router/Customer-router');
// const CustomerGroup = require('./router/Customer_Group-router');
// const Product = require('./router/Product-router');
// const Inventory = require('./router/Inventory-router');
const Orders = require('./router/Orders-router');

// app.use('/customers',Customers_route);
// app.use('./CustomerGroup',CustomerGroup);
// app.use('/product',Product);
// app.use('./inventory',Inventory);
app.use('/order',Orders);

// if the url nothing finds 
app.use((req,res)=>{
    res.render('404');
});




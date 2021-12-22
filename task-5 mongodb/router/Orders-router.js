const express = require('express');
const router  = express.Router();
const Orders = require('../models/Orders-model');

// route for about page router
router.get('/about',(req,res)=>{
    res.render('about');
});

// creating order page router
router.get('/create-order',(req,res)=>{
    res.render('createOrders');
});

//  to display all the values ;
router.get('/',(req,res)=>{
    Orders.find()
    .sort({createdAt : -1})
    .then((data)=>{
        res.render('orderList',{Orders:data});
    })
    .catch((err)=>console.log(err))  
});

// create data of the orders
router.post('/create-order',(req,res)=>{
    console.log(req.body);
    const Order = new Orders(req.body)
    Order.save()
    .then((data)=>{
        res.redirect('/order');
    }).catch((err)=>console.log(err));
});

// get a details for single order 
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    Orders.findById(req.params.id).then((data)=>{
        res.render('details',{data});
      
    }).catch((err)=>console.log(err));
});

// delete an individual order 
router.delete('/del/:id',(req,res)=>{
    console.log(req.params.id);
    Orders.findByIdAndDelete(req.params.id).then((data)=>{
        res.json({ redirect : '/'});
      
    }).catch((err)=>console.log(err));
})



module.exports = router ;

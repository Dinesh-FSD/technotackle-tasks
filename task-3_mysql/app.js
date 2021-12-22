const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/',(req,res)=>{
    res.send("the server is responded sucessfully");
});

// establishing the cnnection to database
const db = mysql.createConnection({
    host : "localhost",
    user : "Any",
    password : "",
    database : "technotacklecommerce"
});

db.connect(err=>{
    if(err) throw err;
    console.log("connected to the database successfully");
})


app.listen(4000,()=>{
    console.log("server is running on port 4000 :");
});

// 1. Get Today Registered User Details


db.connect(()=>{
    let sql = "SELECT  name, mobile, email, 'All address' FROM `customers` WHERE 'Registered Date' = CURRENT_DATE";
    db.query(sql,(err,data)=>{
        if(err)throw err;
        console.log("data");
         res.send(data);
    });
});

// 2. Get Today Orders List

db.connect(()=>{
    let sql = "SELECT o.order_id as id,c.user_id,c.name,o.total_price,o.order_date,p.product_name FROM `customers` C, \
orders O, products P where c.user_id = o.order_id and o.product_id = p.product_id \
and o.order_date = CURRENT_DATE";
    db.query(sql,(err,data)=>{
        if(err)throw err;
        console.log("data");
         res.send(data);
    });
});

// 3. Get Order List based on User ID


db.connect(()=>{
    let sql = "SELECT o.order_id as id,c.user_id,c.name,o.total_price,o.order_date,p.product_name FROM `customers` C, \
orders O, products P where c.user_id = o.order_id \
and o.product_id = p.product_id";
    db.query(sql,(err,data)=>{
        if(err)throw err;
        console.log("data");
         res.send(data);
    });
});


// 4. Get Current Month Product wise sales details

db.connect(()=>{
   let sql = "SELECT  p.product_name,p.no_of_quantity,o.total_price FROM orders O, products P \
where o.product_id = p.product_id and  \
(month(o.order_date) = month(CURRENT_DATE)  and year(o.order_date) = month(CURRENT_DATE))";
    db.query(sql,(err,data)=>{
        if(err)throw err;
        console.log("data");
         res.send(data);
    });
});

// 5. Get Current Month User wise sales details

db.connect(()=>{
    let sql = "SELECT c.user_id,c.name as username,count(o.order_id) ,p.no_of_quantity,p.product_name \
FROM `customers` C,orders O, products P \
where c.user_id = o.order_id \
and o.product_id = p.product_id \
and  (month(o.order_date) = month(CURRENT_DATE)  and year(o.order_date) = month(CURRENT_DATE)) \
GROUP by c.user_id, username, p.no_of_quantity, p.product_name ";
    db.query(sql,(err,data)=>{
        if(err)throw err;
        console.log("data");
         res.send(data);
    });
});



// db.connect(()=>{
//     let sql = "CREATE DATABASE technotacklecommerce";
//     db.query(sql,(err,data)=>{
//         if(err) throw err;
//         console.log("database created");
//     });
// });

// db.connect(()=>{
//     let sql = "CREATE TABLE Customers (user_id int AUTO_INCREMENT PRIMARY KEY,name varchar(50),mobile int(10))";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log("customer table is creates")
//     })
// })

// db.connect(()=>{
//     let sql = "CREATE TABLE Orders(user_id int(3),product_id int(11),total_price	int(10),order_date	date)";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log("order table is created")
//     })
// })

// db.connect(()=>{
//     let sql = "CREATE TABLE Orders(user_id int(3),product_id int(11),total_price	int(10),order_date	date)";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log("order table is created")
//     })
// })

// db.connect(()=>{
//     let sql = "CREATE TABLE Inventory(product_id int(11),stock_count	int(10))";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log("Inventory table is created")
//     })
// })

// db.connect(()=>{
//     let sql = "CREATE TABLE CustomerGroups(customerGroup_Id int(3),high_spent varchar(20),moderate_spent varchar(20), \
// low_spent varchar(20))";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log("CustomerGroup table is created")
//     })
// });

// db.connect(()=>{
//     let sql = "CREATE TABLE Prodcuts(product_name varchar(50),product_id int(3) PRIMARY KEY)";
//     db.query(sql,(err,data)=>{
//         if(err)throw err;
//         console.log(" Prodcuts table is created")
//     });
// });



		





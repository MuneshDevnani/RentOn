require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const bodyParser = require('body-parser');

const app= express();
const port= process.env.PORT;
const userRoutes = require('./api/routes/users');
const accountRoutes = require('./api/routes/account_info');
const itemsRoutes = require('./api/routes/item');

mongoose.connect('mongodb://localhost:27017/fashionOnRent', {useNewUrlParser:true},(err)=>{
    if(err) throw new Error(err)

    console.log("Database connected");
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/uploads',express.static('uploads'))

app.use('/users', userRoutes);
app.use('/account', accountRoutes);
app.use('/item', itemsRoutes);

app.get('/', (req,res) => {
    res.send("It worked dear")
})

app.use((req,res,next)=>{
    const error =new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({  
        error:{
            message:error.message
        }
    })
})

app.listen(port,()=>{
    console.log("Server started at port:"+port);
})
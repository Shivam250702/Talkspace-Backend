require('dotenv').config();
const express = require('express');
const app=express();
const router=require('./routes');
const port=process.env.PORT ||5500;
const DbConnect=require(./database);
app.use(router);
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome to Express JS');
});
const authRoutes = require('./routes');
app.use('/api', authRoutes);
app.listen(port,()=>console.log(`Listening on ${port}`));
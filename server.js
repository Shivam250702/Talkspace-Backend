require('dotenv').config();
const express = require('express');
const app=express();
const router=require('./routes');
const port=process.env.PORT ||5500;
const DbConnect = require('./database');
const cors=require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const corsOption={
    credentials:true,
    origin:['http://localhost:3000'],
}
app.use(cors());
app.use(cors(corsOption));
app.use('/storage', express.static('storage'));
app.use(router);
const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json({ limit: '8mb' }));
app.get('/',(req,res)=>{
    res.send('Welcome to Express JS');
});
const authRoutes = require('./routes');
app.use('/api', authRoutes);
app.listen(port,()=>console.log(`Listening on ${port}`));
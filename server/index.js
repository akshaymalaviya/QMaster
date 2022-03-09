import express from 'express';
import mongoose from 'mongoose';
import router from './routes/auth.js';
import connectDB from './config/db.js';
import user from './models/User.js';
import cors from 'cors';
connectDB();
// const User=user;
const app=express();
app.use(express.json()); // to allow read the body part which will be in json format
app.use('/api/auth',router);
app.get('/',(req,res)=>{
    res.cookie("test","gkcodes");
    res.send("done deal")
})
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log("server is live "));
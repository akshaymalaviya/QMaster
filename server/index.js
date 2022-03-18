import express from 'express';
import router from './routes/auth.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
connectDB();
const app=express();
app.use(cookieParser());
app.use(express.json()); // to allow read the body part which will be in json format
app.use('/api/auth',router);
app.get('/',(req,res)=>{
    res.send("done deal")
})
app.listen(process.env.PORT,()=>console.log("server is live "));
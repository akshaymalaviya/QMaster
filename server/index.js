import express from 'express';
import router from './routes/auth.js';
import connectDB from './config/db.js';
connectDB()
const app=express();
app.use(express.json()); // to allow read the body part
app.use('/api/auth',router);
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log("server is live "));
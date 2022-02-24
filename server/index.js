import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
const app=express();
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNACTION_URL ='mongodb+srv://authantication:authantication@cluster0.tbawd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNACTION_URL)
.then(()=>app.listen(PORT,()=>console.log(PORT)))
.catch((error)=>console.error(error.message));

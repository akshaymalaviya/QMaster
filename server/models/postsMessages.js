import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    user:String,
    password:String,
});

const postMessage=mongoose.model('postMessage',postSchema);
export default postMessage;
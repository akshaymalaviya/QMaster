import postMessage from "../models/postsMessages.js";
export const getposts=async(req,res)=>{
    try {
        const postmessage=await postMessage.find();
        res.status(200).json(postmessage);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
export const createPost=async(req,res)=>{
    const post=req.body;
    const newpost=new postMessage(post);
    try {
        await newpost.save();
        res.status(201).json(newpost);
    } catch (error) {
        res.status(409).json(error.message);
    }
}
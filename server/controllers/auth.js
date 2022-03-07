import User from '../models/User.js';
export async function  register(req,res,next){
    const {username,password,email}=req.body();
    try {
        const user=await User.create({
            username,password,email
        })
        res.status(200).json({success:true,user})
    } catch (error) {
        res.status(500).json({success:false,error:error.message})
    }
}

export function login(req,res,next){
    res.send("log");
}
export function forgotpassword(req,res,next){
    res.send("fp");
}
export function resetpassword(req,res,next){
    res.send("Rp");
}
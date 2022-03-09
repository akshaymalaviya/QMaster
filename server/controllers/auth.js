import user from "../models/User.js";
import connectDB from "../config/db.js";
import bycrptjs from 'bcryptjs';
connectDB();
export async function register(req, res) {
  
  try {
    const { username, email, password, cpassword } = req.body;
    // res.json({message:req.body});
    if (!username || !password || !cpassword || !email) {
      return res.status(422).json({ error: "Enter valid data" });
    }
    const response = await user.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "Email already exists" });
    }else if(password!==cpassword){
      return res.json({ error: "passwords are not same" });
    }else{
    const User = new user({ username, email, password, cpassword });
    const userRegister = await User.save();
    if (userRegister) res.status(201).json({ message: "hurrayy!!" });
    else res.status(500).json({ error: "failed to register" });
    }

  } catch (error) {
    console.log(error);
  }

  // const {username,password,email}=req.body;
  // try {
  //     const user=await User.create({
  //         username,password,email
  //     })
  //     res.status(200).json({success:true,user})
  // } catch (error) {
  //     res.status(500).json({success:false,error:error.message})
  // }
  // return res.send("reg");
}

export async function login(req, res, next) {
   
  try {
    const{email,password}= req.body;
    if (!password  || !email) {
     return res.status(400).json({ error: "Enter all data please" });
   }
   const userLogin=await user.findOne({email:email});
   if(userLogin){
   const match =await bycrptjs.compare(password,userLogin.password);
   let token=await userLogin.generateAuthToken();
   res.cookie("jwtToken",token,{
     expires:new Date(Date.now()+25892000000),httpOnly:true
   });
   if (match){
        return res.status(200).json({ message: "login success" });
   }
   else{
    return res.status(400).json({ error: "Invalid credentials" });
   }}
   else{
    return res.status(400).json({ error: "Invalid credentials" });
   }
  } catch (error) {
    console.log(error);
  }
}
export function forgotpassword(req, res, next) {
  res.send("fp");
}
export function resetpassword(req, res, next) {
  res.send("Rp");
}

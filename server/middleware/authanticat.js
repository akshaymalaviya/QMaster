import jsonwebtocken from 'jsonwebtoken';
import user from '../models/User.js';
const Authanticate=async(req,res,next)=>{
    try {
        const token=req.cookie.jwtoken;
        const verifyToken= jsonwebtocken.verify(token,process.env.SECRET_KEY);
        const rootUser=await user.findOne({_id:verifyToken._id,"tokens.token":token});
        if(rootUser) throw Error("User not found");
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("unautharized");
    }
}

export default Authanticate;
import express from 'express';
import { register,login,forgotpassword,resetpassword } from '../controllers/auth.js';
import Authanticate from '../middleware/authanticat.js';
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword:restToken").put(resetpassword);
router.route('/').get(Authanticate,(req,res)=>{
    // res.cookie("test","gkcodes");
    res.send("done deal with token")
})
export default router;
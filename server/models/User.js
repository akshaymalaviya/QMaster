import mongoose from 'mongoose';
import bycrptjs from 'bcryptjs';
const userSchema=new mongoose.Schema({
    username:{type:String,required:[true,"please provide email"]},
    email:{type:String,required:[true,"please provide email"],match:["^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$","Enter valid email"],unique:true},
    password:{type:String,required:[true,"Enter password"],minlength:6,select:false},
    resetPasswordToken:String,
    resetPasswordExpire:Date
});
userSchema.pre('save',async(next)=>{
    if(!this.isModified("password")){
        next();
    }
    const salt=await bycrptjs.genSalt(10);
    this.password=await bycrptjs.hash(this.password,salt);
    next();
})
const model=mongoose.model('User',userSchema);
export default model;
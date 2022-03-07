import mongoose from "mongoose";
const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://authantication:authantication@cluster0.tbawd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    } catch (error) {
        console.log("failed to connect mongodb");
    }

}
export default connectDB;
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    quizID: {
      type: Object,
      required: true,
    },
    list:{
      type:Array
    }

  });

const quizCode= mongoose.model('attendquiz', userSchema);
  export default quizCode;
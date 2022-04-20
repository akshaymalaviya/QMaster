import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  tempList: {
    type: Object,
    required: true,
  },
});

const test = mongoose.model("Test", userSchema);
export default test;

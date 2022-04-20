import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  database: {
    type: Array,
    required: true,
  },
});

const database = mongoose.model("suggestionList", userSchema);
export default database;

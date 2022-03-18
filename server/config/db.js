import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const url = process.env.URL;

const connectDB = async () => {
  try {
    await mongoose
      .connect(url)
      .then((req, res) => {
        // console.log("db done");
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log("failed to connect mongodb");
  }
};
export default connectDB;

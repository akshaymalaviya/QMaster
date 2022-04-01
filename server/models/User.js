import mongoose from "mongoose";
import bycrptjs from "bcryptjs";
import jsonwebtocken from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bycrptjs.genSalt(10);
    this.password = await bycrptjs.hash(this.password, salt);
    next();
  } else {
    next();
  }
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token_new = jsonwebtocken.sign(
      { _id: this._id },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: token_new });
    await this.save();
    return token_new;
  } catch (error) {
    console.log(error);
  }
};
const user = mongoose.model("User", userSchema);
export default user;

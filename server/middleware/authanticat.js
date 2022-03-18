import jwt from "jsonwebtoken";
import user from "../models/User.js";
const Authanticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await user.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("unautharized");
  }
};

export default Authanticate;

import express from "express";
import {
  register,
  login,
  forgotpassword,
  resetpassword,
  createQuizCode,
} from "../controllers/auth.js";
import Authanticate from "../middleware/authanticat.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/createQuizCode").get(createQuizCode);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword:restToken").put(resetpassword);
router.route("/about").get(Authanticate, (req, res) => {
  res.send(req.rootUser);
});
router.route("/getdata").get(Authanticate, (req, res) => {
  res.send(req.rootUser);
});
router.route("/logout").get((req, res) => {
  res.clearCookie("jwtToken", { path: "/" }); //clear all cookies
  res.status(200).send("logout");
});
export default router;

import user from "../models/User.js";
import connectDB from "../config/db.js";
import bycrptjs from "bcryptjs";
import { v4 } from "uuid";
import test from "../models/Test.js";
import database from "../models/Dataset.js";
import quizCode from "../models/AttendList.js";
connectDB();
export async function register(req, res) {
  try {
    const { username, email, password, cpassword } = req.body;
    if (!username || !password || !cpassword || !email) {
      return res.status(422).json({ error: "Enter valid data" });
    }
    const response = await user.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.json({ error: "passwords are not same" });
    } else {
      const User = new user({ username, email, password });
      const userRegister = await User.save();
      if (userRegister) res.status(201).json({ message: "hurrayy!!" });
      else res.status(500).json({ error: "failed to register" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({ error: "Enter all data please" });
    }
    const userLogin = await user.findOne({ email: email });
    if (userLogin) {
      const match = await bycrptjs.compare(password, userLogin.password);
      let token = await userLogin.generateAuthToken();
      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (match) {
        return res.status(200).json({ message: "login success" });
      } else {
        return res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
}
export function forgotpassword(req, res, next) {
  res.send("fp");
}
export function resetpassword(req, res, next) {
  res.send("Rp");
}
export async function createQuizCode(req, res, next) {
  const code = v4().slice(0, 6);
  const quizTest = new quizCode({ quizID: code });
  const quizTestRegister = await quizTest.save();

  res.json(code);
}
export async function createQuiz(req, res) {
  try {
    const { tempList } = req.body;
    if (!tempList) {
      return res.status(422).json({ error: "Enter valid data" });
    }

    const Test = new test({ tempList });
    const TestRegister = await Test.save();
    if (TestRegister) res.status(201).json({ message: "hurrayy!!" });
    else res.status(500).json({ error: "failed to register" });
    // res.send("quiz creation");
  } catch (error) {
    console.log(error);
  }
}
export async function submitQuiz(req, res) {
  try {
    const { quizID, userID, userEmail, answer } = req.body.uploadAnswer;

    if (!quizID || !userID || !userEmail || !answer) {
      return res.status(422).json({ error: "Enter valid dataa" });
    }
    try {
      const list = await quizCode.findOne({ quizID: quizID });
      list.list.push({ userID, userEmail, answer });

      const Test = await quizCode.findOneAndUpdate({ quizID: quizID }, list);

      const TestRegister = await Test.save();
      if (TestRegister) res.status(201).json({ message: "hurrayy!!" });
      else res.status(500).json({ error: "failed to register" });
    } catch (e) {
      console.log(e);
    }

    // res.send("quiz creation");
  } catch (error) {
    console.log(error);
  }
}
export function getCreateQuiz(req, res, next) {
  database.find({}, (err, datas) => {
    if (err) console.log(err);
    res.json(datas);
  });
}
export function getQuiz(req, res, next) {
  test.find({}, (err, datas) => {
    if (err) console.log(err);
    res.json(datas);
  });
}
export function studentList(req, res, next) {
  quizCode.find({}, (err, datas) => {
    if (err) console.log(err);
    res.json(datas);
  });
}
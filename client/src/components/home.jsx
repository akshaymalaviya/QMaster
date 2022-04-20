import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  const [first, setfirst] = useState(false);
  let navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const response = await fetch("/api/auth/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await response.json();
      setfirst(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callAboutPage();
  });
  const attendQuiz=()=>{
    navigate("/attendQuiz");
  }
  const createQuiz=()=>{
    navigate("/createQuiz");
  }
  return (
    <>
      <div className="container bgOfHome">
        <div className="row">
          <div className="mx-auto ">
            <h2 className="heading">Welcome to Q-Master<br/>
            {first?<>
            <button type="button" className="btn btn-primary mx-3" onClick={attendQuiz}>Attend Quiz</button>
            <button type="button" className="btn btn-success mx-3" onClick={createQuiz}>Create Quiz</button></>:null}
            </h2>
            <p className="paragraph mt-5 ">
              Always wanted to make a quiz, but couldn't find an easy quiz
              creator to help you out? With our online quiz tool it’s easy to
              make a quiz in less than five minutes. Just follow these simple
              steps to create online quizzes with our online quiz software.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AttendQuiz() {
  let navigate = useNavigate();

  const [first, setfirst] = useState(null);
  const [quizData, setquizData] = useState([]);
  const joinQuiz = (e) => {
    e.preventDefault();
    const found = quizData.filter((e, i) => {
      return e.tempList.quizID === first;
    });
    if (found.length !== 0) {
      var d1 = new Date(found[0].tempList.timestamp),
        d2 = new Date(d1);
      d2.setMinutes(d1.getMinutes() + Number(found[0].tempList.duration));

      const temp = {
        found: found[0],
        endTime: d2,
      };
      const x=new Date();
      if ( x< d2 ) {
        if(x>=d1)
        navigate("/attandquizquestion", { state: temp });
        else
        alert("Quiz time is not started");
      } else {
        alert("Quiz time is over");
      }
    } else {
      alert("Invalid Code");
    }
  };
  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    try {
      const response = await fetch("/api/auth/userQuiz", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setquizData(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>AttendQuiz</div>
      <form onSubmit={joinQuiz}>
        <div className="mb-1">
          <label for="name" className="form-label">
            QUIZ CODE
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={first}
            onChange={(e) => setfirst(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Join the Quiz
        </button>
      </form>
    </>
  );
}

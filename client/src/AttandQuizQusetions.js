import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function AttandQuizQusetions() {
  const location = useLocation();
  // const [tripType, setTripType] = useState([]);
  var tempAnswer=[];
  // localStorage.clear()
  const [count, setcount] = useState(0);
  const [user, setuser] = useState()
  const [first, setfirst] = useState(location.state.found.tempList.quizData);
  const submitQuiz = async() => {
    first.map((e,i)=>{
      console.log(i+1)

      tempAnswer=[...tempAnswer,JSON.parse(localStorage.getItem(`mcqAns${i+1}`))];
    })
    
    var uploadAnswer={
      quizID:location.state.found.tempList.quizID,
      userID:user._id,
      userEmail:user.email,
      answer:tempAnswer
    }
    console.log(uploadAnswer)
    const response=await fetch('/api/auth/submitquiz',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({uploadAnswer})
    })
    const data=await response.json();
    if (!data || data.status === 422) {
      alert("invalid register");
    } else {
      alert(`Quiz submmited successfully `);
    }
    tempAnswer=[];
    // localStorage.clear()
  };
  function AnswerRadio(props) {
    console.log(props.id)
    var dataCheck = JSON.parse(localStorage.getItem(`mcqAns${props.id}`));
    var flag = dataCheck ? Object.keys(dataCheck).length : false;

    const [tripType, setTripType] = useState(flag ? dataCheck.toString() : "1");
    return (
      <>
        <div style={{ display: "flex", margin: "3px" }}>
          <div
            className="radio-btn"
            onClick={() => {
              localStorage.setItem(`mcqAns${props.id}`, JSON.stringify("1"));
              setTripType("1");
            }}
          >
            {props.e[0]}
            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "1"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("2");
              localStorage.setItem(`mcqAns${props.id}`, JSON.stringify("2"));
            }}
          >
            {props.e[1]}

            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "2"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("3");
              localStorage.setItem(`mcqAns${props.id}`, JSON.stringify("3"));
            }}
          >
            {props.e[2]}

            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "3"}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;
          <div
            className="radio-btn"
            onClick={() => {
              setTripType("4");
              localStorage.setItem(`mcqAns${props.id}`, JSON.stringify("4"));
            }}
          >
            {props.e[3]}

            <input
              type="radio"
              value={tripType}
              name="tripType"
              checked={tripType === "4"}
            />
          </div>
        </div>
      </>
    );
  }
  const callAboutPage = async () => {
    try {
      const response = await fetch("/api/auth/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await response.json();
      setuser(data);
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
  },[]);
  return (
    <>
      <div>AttandQuizQusetions</div>
      <h3>End time : {location.state.endTime.toString()}</h3>
      <div>
        <h2>
          <b>AttendQuiz</b>
        </h2>
        {first ? (
          <div>
            <h3>Question : {first[count].id}</h3>
            <input value={first[count].question} />
            <AnswerRadio e={first[count].option} id={first[count].id}/>
          </div>
        ) : null}
        {!(count === 0) ? (
          <button onClick={() => setcount(count > 0 ? count - 1 : count)}>
            previous
          </button>
        ) : null}
        {!(first.length === count + 1) ? (
          <button onClick={() => setcount(count + 1)}>Next</button>
        ) : null}

        {first.length === count + 1 ? (
          <button onClick={submitQuiz}>Submit</button>
        ) : null}
      </div>
    </>
  );
}

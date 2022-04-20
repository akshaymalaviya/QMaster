import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import CreateQuiz from '../CreateQuiz';
import { useNavigate } from 'react-router-dom';
export default function CreateQuizHome() {
  const [count, setcount] = useState(0);
  const [first, setfirst] = useState(false);
  const [value, onChange] = useState(new Date());
  // var time = 0,userID='';
  const [time, settime] = useState(0);
  let navigate = useNavigate();
  const dbCreateQuiz = async () => {
    try {
      const response = await fetch('/api/auth/createQuizCode', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      var userID = await response.json();
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      // navigate("/login");
    }
    var tempList = [];
    let row = [0],
      i = 0,
      len = count;
    while (++i <= len) row.push(i);
    row.map((e, i) => {
      tempList = [...tempList, JSON.parse(localStorage.getItem(`mcq${i + 1}`))];
      localStorage.removeItem(`mcq${i + 1}`);
    });
    var tempQuiz = {
      userID: first,
      quizID: userID,
      timestamp: value,
      duration: time,
      quizData: tempList,
    };
    const response = await fetch('/api/auth/createQuiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tempList: tempQuiz }),
    });
    const data = await response.json();
    if (!data || data.status === 422) {
      alert('invalid register');
    } else {
      alert(`Quiz created successfully QuizCode is : ${userID}`);
    }
    navigate('/');
  };
  var rows = [],
    i = 0,
    len = count;
  while (++i <= len) rows.push(i);
  const Add = () => {
    setcount(count + 1);
  };
  const remove = () => {
    if (count > 0) setcount(count - 1);
    console.log(count + 1);
    localStorage.removeItem(`mcq${count + 1}`);
  };
  const callAboutPage = async () => {
    try {
      const response = await fetch('/api/auth/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      setfirst(data._id);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  const requestUid = async () => {};
  return (
    <div className="container">
      <div className="createQuiz">
        <h2>
          <b>CreateQuiz</b>
        </h2>
        <h4>Question : 1</h4>
        <CreateQuiz index={1} />
        {rows.map(function (i) {
          return (
            <>
              <h4>Question : {i + 1}</h4>
              <CreateQuiz key={i} index={i + 1} />
            </>
          );
        })}
        <br />
        <button className="createQuiz_btn" onClick={Add}>
          Add question
        </button>
        <button className="createQuiz_btn" onClick={remove}>
          Remove question
        </button>
        <br />
        <div className="createQuiz-submit container">
          <input
            type="number"
            placeholder="Time in minutes"
            onChange={(e) => settime(e.target.value)}
          />
          <div>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
          <button
            className="btn btn-success "
            style={{ margin: '15px' }}
            onClick={dbCreateQuiz}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

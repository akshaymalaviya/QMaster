import React, { useEffect, useState } from 'react';
import ExistedQuizView from '../ExistedQuizView';
import { useNavigate } from 'react-router-dom';

export default function QuizLIst() {
  let navigate = useNavigate();

  const [first, setfirst] = useState(false);
  const [quizData, setquizData] = useState([]);
  useEffect(() => {
    callAboutPage();
  }, []);

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
    }
    try {
      const response = await fetch('/api/auth/userQuiz', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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
      <div className="QuizQueue ">
        <div className="container">
          {first
            ? quizData
                .filter((e, i) => e.tempList.userID === first)
                .map((e, i) => {
                  return (
                    <>
                      <div className="queue mx-auto">
                        <div
                          onClick={() =>
                            navigate('/existedquizview', { state: e.tempList })
                          }
                        >
                          <h3>
                            {e.tempList.timestamp.toString().slice(0, 10)}
                          </h3>
                          <h4>Exam Code: {e.tempList.quizID.toString()}</h4>
                        </div>
                      </div>
                    </>
                  );
                })
            : null}
        </div>
      </div>
    </>
  );
}

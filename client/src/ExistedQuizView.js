import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ExistedQuizView() {
  let navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const [first, setfirst] = useState(location.state.quizData);
  return (
    <>
      <div className="QuizQueue ">
        <div className="container">
          <button
            style={{
              background: '#5D6D7E',
              color: '#fff',
              borderRadius: '7px',
              border: 'none',
              margin: '5px',
              height: '30px',
              width: '120px',
            }}
            onClick={() =>
              navigate('reportlistdata', { state: location.state })
            }
          >
            View Report
          </button>
          {first
            ? first.map((e, i) => {
                return (
                  <>
                    <div className="queue mx-auto">
                      <h3>Question: {e.question}</h3>
                      <h5>
                        Options:
                        <br />
                        {e.option.map((e, i) => {
                          return (
                            <>
                              <h5 className="ms-5">
                                {i}:{' '}
                                <span style={{ fontWeight: 700 }}>{e}</span>
                              </h5>
                            </>
                          );
                        })}
                      </h5>
                      <h5>
                        Suggestion:
                        {e.suggestion.map((e, i) => {
                          return (
                            <>
                              <h5 className="ms-5">
                                <span style={{ fontWeight: 700 }}>{e}</span>
                              </h5>
                            </>
                          );
                        })}
                      </h5>
                      <h5>
                        Answer:{' '}
                        <span style={{ fontWeight: 700 }}>{e.answer}</span>
                      </h5>
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

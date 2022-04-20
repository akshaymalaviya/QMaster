import React, { useState } from 'react';
import CreateQuiz from '../CreateQuiz';
import { useNavigate } from 'react-router-dom';
export default function CreateQuizHome() {
  let navigate = useNavigate();
  const dbCreateQuiz = () => {
    alert('Quiz created successfully');
    navigate('/');
  };
  const [count, setcount] = useState(0);
  var rows = [],
    i = 0,
    len = count;
  while (++i <= len) rows.push(i);
  const Add = () => {
    setcount(count + 1);
  };
  const remove = () => {
    if (count > 0) setcount(count - 1);
  };
  return (
    <div className="container">
      <div className="createQuiz">
        <h2>
          <b>CreateQuiz</b>
        </h2>

        <h4>Question : 1</h4>
        <CreateQuiz />
        {rows.map(function (i) {
          return (
            <>
              <h3>Question : {i + 1}</h3>
              <CreateQuiz key={i} index={i} />
            </>
          );
        })}
        <button className="createQuiz_btn" onClick={Add}>
          Add question
        </button>
        <button className="createQuiz_btn" onClick={remove}>
          Remove question
        </button>
        <br />
        <button
          className="btn btn-success "
          style={{ margin: '15px' }}
          onClick={dbCreateQuiz}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

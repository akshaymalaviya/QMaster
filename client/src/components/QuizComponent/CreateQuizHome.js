import React, { useState } from "react";
import CreateQuiz from "../CreateQuiz";

export default function CreateQuizHome() {
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
    <div>
      <h2><b>CreateQuiz</b></h2>

      <h3>Question : 1</h3>
      <CreateQuiz />
      {rows.map(function (i) {
        return (
          <>
            <h3>Question : {i + 1}</h3>
            <CreateQuiz key={i} index={i} />
          </>
        );
      })}
      <button onClick={Add}>Add question</button>
      <button onClick={remove}>Remove question</button>
    </div>
  );
}

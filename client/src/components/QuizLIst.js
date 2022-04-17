import React, { useEffect, useState } from "react";

export default function QuizLIst() {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    // callAboutPage();
  }, []);
  const callAboutPage = async () => {
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
      setfirst(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <>{first?<><div>Quiz LIst</div>
  
  <ul>
  <li>{console.log(first)}</li>
  <li>{first.username}</li>
  </ul></>:null}
  </>
  );
}

import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
   const [first, setfirst] = useState(false);
  const callAboutPage = async () => {
    try {
      const response = await fetch("/api/auth/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
        // body: JSON.stringify({username:signupData.name,email:signupData.email,password:signupData.password,cpassword:signupData.confirmPassword})
      });

      const data = await response.json();
      setfirst(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log("hiiiiiiiiiii");
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  });

  return (
  <>{first?<><div>About</div>
  
  <ul>
  <li>{first.email}</li>
  <li>{first.username}</li>
  </ul></>:null}
  </>
  );
}

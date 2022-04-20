import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

export default function Logout() {
  let navigate = useNavigate();
  const { dispatch } = useContext(userContext);

  useEffect(() => {
    fetch('/api/auth/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      // body: JSON.stringify({username:signupData.name,email:signupData.email,password:signupData.password,cpassword:signupData.confirmPassword})
    })
      .then((response, req) => {
        dispatch({ type: 'USER', payload: false });

        navigate('/login', { replace: true });
        if (!response.status === 200) {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>Logout</div>;
}

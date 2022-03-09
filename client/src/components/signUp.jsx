import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Signup = () => {
  let navigate = useNavigate();
  const initialValues = { email: '', password: '', confirmPassword: '',name:'' };
  const [signupData, setSignupData] = useState({ initialValues });
  //to set errors of data
  const [signupErrors, setSignupErrors] = useState({});

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupForm = async(e) => {
    //it will not refresh the page;
    e.preventDefault();
    const response=await fetch('/api/auth/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({username:signupData.name,email:signupData.email,password:signupData.password,cpassword:signupData.confirmPassword})
    })
    const data=await response.json();
    if(!data || data.status===422){
      alert("invalid register")
    }
    else{
      alert("register done");
      navigate('/login');
    }
    //first validate the data and then set errors values
    setSignupErrors(validate(signupData));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'password is required!';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'password is required!';
    }
    if (values.password !== values.confirmPassword) {
      errors.comparePassword = 'password must be same!';
    }
    return errors;
  };

  return (
    <>
      <div className="backgroung">
        <div className="container1 ">
          <div className="card_signup">
            <div className="content">
              <h2>Q-Master</h2>
              <h3>Sign Up</h3>
              <form onSubmit={signupForm}>
              <div className="mb-1">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={signupData.name}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-1">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={signupData.email}
                    onChange={InputEvent}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* Show the errors */}
                <p className="formError">{signupErrors.email}</p>
                <div className="mb-1">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={signupData.password}
                    onChange={InputEvent}
                  />
                </div>
                <p className="formError">{signupErrors.password}</p>
                <div className="mb-1">
                  <label for="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={InputEvent}
                  />
                </div>
                <p className="formError">{signupErrors.comparePassword}</p>
                <p className="formError">{signupErrors.confirmPassword}</p>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {/* <a href="#">read more</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
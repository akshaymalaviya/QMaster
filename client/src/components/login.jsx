import React, { useState } from 'react';

const Login = () => {
  const initialValues = { email: '', password: '' };
  const [loginData, setLoginData] = useState(initialValues);
  //to set errors of data
  const [loginErrors, setloginErrors] = useState({});

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const loginForm = async(e) => {
    e.preventDefault();
    const response=await fetch('http://localhost:5000/api/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(loginData.email,loginData.password)
    })
    const data=await response.json();

    console.log(data)
    //it will not refresh the page;
    setloginErrors(validate(loginData));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'password is required!';
    }
    return errors;
  };

  return (
    <>
      <div className="backgroung">
        <div className="container1 ">
          <div className="card">
            <div className="content">
              <h2>Q-Master</h2>
              <h3>Sign In</h3>
              <form onSubmit={loginForm}>
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
                    value={loginData.email}
                    onChange={InputEvent}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* Show the errors */}
                <p className="formError">{loginErrors.email}</p>
                <div className="mb-1">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={loginData.password}
                    onChange={InputEvent}
                    id="exampleInputPassword1"
                  />
                </div>
                {/* Show the errors */}
                <p className="formError">{loginErrors.password}</p>
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
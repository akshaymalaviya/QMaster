import React from 'react';

const Signup = () => {
  return (
    <>
      <div className="backgroung">
        <div className="container1 ">
          <div class="card_signup">
            <div class="content">
              <h2>Q-Master</h2>
              <h3>Sign Un</h3>
              <form>
                <div class="mb-1">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
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

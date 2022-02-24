import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import Q from './img/Q.png';

const Navbar = () => {
  return (
    <>
      <div classNameName="container-fluid">
        <div classNameName="row">
          <div classNameName="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="container-fluid ms-lg-5 me-lg-5">
                <NavLink exact className="navbar-brand" to="/">
                  <img
                    src={Q}
                    alt=""
                    width="40"
                    height="40"
                    class="d-inline-block align-text-top"
                  />
                  -Master
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link active"
                        activeClassName="menu_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact className="nav-link" to={'/login'}>
                        Log In
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact className="nav-link" to={'/signup'}>
                        Sign Up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

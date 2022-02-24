import React from 'react'
// import Form from './forms/Form'
// import Posts from './posts/Posts'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signUp';
export default function App() {
  return (
    // <div>App
    // <Posts/>
    // <Form/>
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" component={<Home />} />
      </Routes>
    </>
  )
}

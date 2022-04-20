import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signUp';
import About from './components/About';
import Logout from './components/Logout';
import AttendQuiz from './components/AttendQuiz';
import CreateQuiz from './components/CreateQuiz';
import reducer, { initialState } from './components/reducer/Usereducer';
import QuizQueue from './components/QuizQueue';
import CreateQuizHome from './components/QuizComponent/CreateQuizHome';
export const userContext = createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/attendQuiz" element={<AttendQuiz />} />
          <Route exact path="/createQuiz" element={<CreateQuizHome />} />
          <Route exact path="/quizQueue" element={<QuizQueue />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route path="*" component={<Home />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

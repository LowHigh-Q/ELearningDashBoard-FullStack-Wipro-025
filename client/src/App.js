import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Courses from './Pages/CoursesX';
import CourseDetails from './Pages/CourseDetails';
import Quiz from './Pages/QuizX';
import Login from './components/Login';
import Register from './components/Register';
import CorrectAnswers from './Pages/CorrectAnswers';
function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/quiz/:courseId" element={<Quiz />} />

          <Route
            path="/correctanswers/:courseId"
            element={<CorrectAnswers />}

          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
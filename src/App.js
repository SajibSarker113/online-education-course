import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInformation from './components/CoourseInformation/CourseInformation';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;

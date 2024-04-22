import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExerciseDetail from './Components/ExerciseDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

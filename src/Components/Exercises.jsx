import React from 'react';
import './Exercises.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for dynamic routing

const Exercises = () => {
  // Define an array of exercises with body parts, exercise names, and difficulty
  const exercises = [
    { bodyPart: 'Bicep', exercise: 'Bicep Curls', difficulty: 'Moderate' },
    { bodyPart: 'Shoulder', exercise: 'Shoulder Press', difficulty: 'Hard' },
    { bodyPart: 'Legs', exercise: 'Squats', difficulty: 'Hard' },
    { bodyPart: 'Back', exercise: 'Deadlifts', difficulty: 'Hard' },
    { bodyPart: 'Chest', exercise: 'Bench Press', difficulty: 'Hard' },
    { bodyPart: 'Abs', exercise: 'Plank', difficulty: 'Easy' },
    { bodyPart: 'Triceps', exercise: 'Tricep Dips', difficulty: 'Moderate' },
    { bodyPart: 'Calves', exercise: 'Calf Raises', difficulty: 'Easy' },
  ];

  return (
    <div className="ag-format-container">
  <div className="ag-courses_box">
    {/* Map through the exercises array to render each exercise item */}
    {exercises.map((exercise, index) => (
      <div className="ag-courses_item" key={index}>
        {/* Use Link component from react-router-dom for navigation */}
        <Link to={`https://www.menshealth.com/uk/building-muscle/a758801/best-bicep-exercises-for-building-muscle/`} className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
          <div className="ag-courses-item_title">{exercise.exercise}</div>
          <div className="ag-courses-item_date-box">
            {exercise.bodyPart}:
            <span className="ag-courses-item_date">{exercise.difficulty}</span>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
  );
};

export default Exercises;

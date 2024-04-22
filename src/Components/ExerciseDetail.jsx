import React from 'react';
import { useParams } from 'react-router-dom';
import './ED.css'
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

const ExerciseDetail = ({ exercises }) => {
    const { id } = useParams();
    const exercise = exercises[Number(id)]; // Get exercise based on id (convert id to number)
  
    if (!exercise) {
      return <div>Exercise not found</div>;
    }
  
    return (
      <div>
        <h2>{exercise.exercise}</h2>
        <p>Body Part: {exercise.bodyPart}</p>
        <p>Difficulty: {exercise.difficulty}</p>
        {/* Add more exercise details as needed */}
      </div>
    );
  };
  
  export default ExerciseDetail;
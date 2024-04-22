import React, { useState } from 'react';
import './FitnessForm.css'; // Importing CSS file for styles

const FitnessForm = () => {
  // State variables to hold form data
  const [goals, setGoals] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [equipment, setEquipment] = useState('');
  const [preferences, setPreferences] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to backend)
    console.log({ goals, fitnessLevel, equipment, preferences });
    // Reset form fields after submission
    setGoals('');
    setFitnessLevel('');
    setEquipment('');
    setPreferences('');
  };

  return (
    <div className="fitness-form-container">
      <h2>Input Your Fitness Details</h2>
      <form onSubmit={handleSubmit} className="fitness-form">
        <label>
          Fitness Goals:
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="Enter your fitness goals"
            required
          />
        </label>

        <label>
          Current Fitness Level:
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label>
          Available Equipment:
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            placeholder="Enter available equipment"
            required
          />
        </label>

        <label>
          Workout Preferences:
          <textarea
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Enter your workout preferences"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FitnessForm;

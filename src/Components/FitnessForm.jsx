import React, { useState } from 'react';
import './FitnessForm.css'; // Importing CSS file for styles
import successImage from '../assets/images/push-pull-legs.jpg'; // Importing success image

const FitnessForm = () => {
  // State variables to hold form data and feedback
  const [goals, setGoals] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [equipment, setEquipment] = useState('');
  const [preferences, setPreferences] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission status

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs (example criteria for "good" input)
    if (goals && fitnessLevel && equipment && preferences) {
      setFormSubmitted(true); // Set form submission status to true (submitted successfully)
    } else {
      setFormSubmitted(false); // Set form submission status to false (submission failed)
    }

    // Reset form fields after submission
    setGoals('');
    setFitnessLevel('');
    setEquipment('');
    setPreferences('');
  };

  return (
    <div className='form-body'>
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

        {/* Display image alert based on form submission status */}
        {formSubmitted && (
          <div className="image-alert">
            {goals && fitnessLevel && equipment && preferences ? (
              <div className="success">
                <img src={successImage} className="banimageui" alt="Success" />
                <p>Your input is good! Proceed with your fitness plan.</p>
              </div>
            ) : (
              <div className="error">
                <p>Please fill out all fields to receive a good report.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessForm;

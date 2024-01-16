import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    // Validate the form fields
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Simulate saving user data to the mock API
      const response = await saveUserToMockAPI({ username, email, password });

      // Check if the API call was successful (simulated success)
      if (response.status === 'success') {
        // Call the onRegister function to update the user state in App.js
        onRegister({ username, email });

        // Redirect to the profile or home page after successful registration
        navigate('/');
      } else {
        setError('Error registering user. Please try again.');
      }
    } catch (error) {
      setError('Error registering user. Please try again.');
    }
  };

  const handleLoginInstead = () => {
    // Navigate back to the login page
    navigate('/login');
  };

  // Simulated API function to save user data
  const saveUserToMockAPI = async (userData) => {
    const apiUrl = 'https://6570367409586eff6640ea15.mockapi.io/api/products'; // Mock API endpoint

    try {
      // Simulate an asynchronous API call to save user data
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Parse the response
      const data = await response.json();

      if (response.ok) {
        // Simulate success or failure based on some conditions
        const success = data.status === 'success';

        if (success) {
          return { status: 'success' };
        } else {
          throw new Error('Failed to save user data to the mock API');
        }
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(
        `Error saving user data to the mock API: ${error.message}`
      );
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-form">
        <h2>Create New Account</h2>
        <form>
          {/* ... (existing form fields) */}
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <button type="button" onClick={handleRegister}>
              Register
            </button>
            <button type="button" onClick={handleLoginInstead}>
              Login Instead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

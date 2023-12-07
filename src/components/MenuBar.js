import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MenuBar.css';

const MenuBar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the onLogout function to update the user state in App.js
    onLogout();
    // Redirect to the home page after logout
    navigate('/');
  };

  return (
    <div className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Change the link to "/listings" when "Shop" is clicked */}
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user ? (
          <li>
            <span onClick={handleLogout}>Logout</span>
          </li>
        ) : (
          <li>
            <Link to="/login">Login | Sign Up</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;

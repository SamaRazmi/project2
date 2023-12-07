import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminProfile from './components/AdminProfile';
import Shop from './phone-marketplace/components/Shop';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <MenuBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<MainContainer />} />
          <Route path="/admin-profile" element={<AdminProfile user={user} />} />

          {/* Add the phone marketplace routes */}
          <Route path="/shop" element={<Shop />} />

          {/* Add more routes for other sections if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

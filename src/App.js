import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminProfile from './components/AdminProfile';
import Shop from './phone-marketplace/components/Shop';
import BidPage from './phone-marketplace/components/BidPage'; // Import BidPage
import './App.css';
import Contact from './components/Contact';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-profile" element={<AdminProfile user={user} />} />
          {/* Add the phone marketplace routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/bid/:productId" element={<BidPage />} />{' '}
          {/* Add route for BidPage */}
          {/* Add more routes for other sections*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

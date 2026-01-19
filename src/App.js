import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import Home from './components/Home';
import Vezbanje from './components/Vezbanje';
import Ciljevi from './components/Ciljevi';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <h1>💪 Fit Map</h1>
            </Link>
            <div className="nav-links">
              {isAuthenticated ? (
                <>
                  <Link to="/vezbanje">Vežbanje</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/ciljevi">Ciljevi</Link>
                  <span className="user-name">Dobrodošli, {user?.name}</span>
                  <button onClick={handleLogout} className="logout-btn">Odjavi se</button>
                </>
              ) : (
                <>
                  <Link to="/login">Prijavi se</Link>
                  <Link to="/register">Registracija</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/blog" /> : 
              <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/register" 
            element={
              isAuthenticated ? 
              <Navigate to="/blog" /> : 
              <Register onRegister={handleLogin} />
            } 
          />
          <Route 
            path="/blog" 
            element={
              isAuthenticated ? 
              <Blog /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/vezbanje" 
            element={
              isAuthenticated ? 
              <Vezbanje /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/ciljevi" 
            element={
              isAuthenticated ? 
              <Ciljevi /> : 
              <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ isAuthenticated }) {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Dobrodošli u Fit Map</h1>
          <p className="hero-subtitle">
            Vaša putanja ka zdravom životu počinje ovde
          </p>
          <div className="hero-buttons">
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="btn btn-primary">
                  Započni sada
                </Link>
                <Link to="/login" className="btn btn-secondary">
                  Prijavi se
                </Link>
              </>
            ) : (
              <Link to="/blog" className="btn btn-primary">
                Idi na Blog
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Zašto Fit Map?</h2>
          <div className="features-grid">
            <Link to={isAuthenticated ? "/vezbanje" : "/register"} className="feature-card">
              <div className="feature-icon">🏋️</div>
              <h3>Vežbanje</h3>
              <p>Pronađite najbolje vežbe za vaš tip tela i ciljeve</p>
              <span className="feature-link">Klikni da vidiš →</span>
            </Link>
            <Link to={isAuthenticated ? "/blog" : "/register"} className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Blog</h3>
              <p>Pročitajte korisne članke o fitnessu i zdravom načinu života</p>
              <span className="feature-link">Klikni da vidiš →</span>
            </Link>
            <Link to={isAuthenticated ? "/ciljevi" : "/register"} className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Ciljevi</h3>
              <p>Postavite i prattie svoje fitness ciljeve</p>
              <span className="feature-link">Klikni da vidiš →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


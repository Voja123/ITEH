import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validacija
    if (!formData.email || !formData.password) {
      setError('Molimo unesite sve podatke');
      return;
    }

    // Simulacija prijave (u pravoj aplikaciji bi bilo API poziv)
    // Za demo, prihvatamo bilo koje podatke
    const userData = {
      name: formData.email.split('@')[0],
      email: formData.email
    };

    onLogin(userData);
    navigate('/blog');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Prijavite se</h2>
        <p className="auth-subtitle">Dobrodošli nazad u Fit Map</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vas@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Prijavi se
          </button>
        </form>

        <p className="auth-footer">
          Nemate nalog? <Link to="/register">Registrujte se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


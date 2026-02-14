import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Impact from './Impact';
import './style.css'; // Ensure global styles are imported

// Navbar Component
const Navbar = () => {
  const location = useLocation();

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path) => ({
    color: isActive(path) ? 'var(--primary-color)' : 'inherit',
    fontWeight: '500',
    transition: 'var(--transition)',
    borderBottom: isActive(path) ? '2px solid var(--primary-color)' : '2px solid transparent'
  });

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">SyncBite</Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle('/')}>Home</Link>
          <Link to="/impact" style={navLinkStyle('/impact')}>Impact</Link>
          <a href="#" className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '0.9rem' }}>Login</a>
        </div>
      </div>
    </nav>
  );
};

// Home Component (reusing content from index.html)
const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <h1>Sync Surplus. Serve Hope.</h1>
          <p>Connecting restaurants with NGOs to turn surplus food into saved lives.</p>
          <div className="hero-buttons">
            <a href="/restaurant-profile.html" className="btn btn-primary">Login as Restaurant</a>
            <a href="/ngo-register.html" className="btn btn-accent">Login as NGO</a>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">🍲</div>
              <h3>Report Surplus Food</h3>
              <p>Restaurants can easily list excess food before it goes to waste.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Notify Nearby NGOs</h3>
              <p>Real-time alerts sent to impactful organizations in the vicinity.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Deliver & Make Impact</h3>
              <p>Coordinate pickups seamlessly and track the lives you've touched.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="links" style={{ justifyContent: 'center', display: 'flex', gap: '20px' }}>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p>“Innovating Food Sustainability Through Smart Coordination.”</p>
          <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: '0.6' }}>&copy; 2024 SyncBite</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;

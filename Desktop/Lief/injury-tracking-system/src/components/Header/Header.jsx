import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0
import React from 'react';
import './header.css';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); 

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            Injury Tracking System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-links ml-auto"> 
            <a href="/dashboard" className="nav-link">
              Dashboard
            </a>
            <a href="/create-injury-report" className="nav-link">
              Create Report
            </a>
            <a href="/injury-reports" className="nav-link">
              Injury Reports
            </a>
            <a href="/body-map" className="nav-link">
              Body Map
            </a>
            {isAuthenticated ? (
              <a href="/" className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </a>
            ) : (
              <a href="/" className="nav-link" onClick={() => loginWithRedirect()}>
                Log In
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

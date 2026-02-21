import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        CLIQ<span>D</span>
      </div>

      {/* Action icons */}
      <div className="navbar__actions">
        {/* Search */}
        <button className="navbar__icon-btn" aria-label="Search">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>

        {/* Notifications */}
        <button className="navbar__icon-btn" aria-label="Notifications">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="navbar__notif-dot" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

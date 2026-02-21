import React from "react";
import "./BottomNav.css";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#0a0a0a" : "none"} stroke={active ? "#0a0a0a" : "#888"} strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "explore",
    label: "Explore",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#0a0a0a" : "#888"} strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "post",
    label: "Post",
    icon: () => (
      <div className="bottom-nav__post-btn">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8FF5A" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    ),
  },
  {
    id: "shop",
    label: "Shop",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#0a0a0a" : "none"} stroke={active ? "#0a0a0a" : "#888"} strokeWidth="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#0a0a0a" : "none"} stroke={active ? "#0a0a0a" : "#888"} strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

/**
 * BottomNav
 * @param {string}   activeTab   - Currently active tab id
 * @param {function} onTabChange - Callback with the new tab id
 */
function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className="bottom-nav__btn"
          onClick={() => onTabChange(item.id)}
          aria-label={item.label}
        >
          {item.icon(activeTab === item.id)}
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;

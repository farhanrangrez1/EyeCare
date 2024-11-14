import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ProfileSidebar() {
  // State to manage the active icon
  const [activeIcon, setActiveIcon] = useState(null);

  const icons = [
    { id: "Profile", text: "Profile", iconClass: "fa-solid fa-house", to: "/profile" },
    { id: "Change Password", text: "Change Password", iconClass: "fa-solid fa-box", to: "/changepassword" },
    { id: "My Orders", text: "My Orders", iconClass: "fa-solid fa-heart", to: "/orders" },
    { id: "My Wishlists", text: "My Wishlists", iconClass: "fa-solid fa-bag-shopping", to: "/wishlists" },
    { id: "My Refunds", text: "My Refunds", iconClass: "fa-solid fa-user", to: "/refunds" },
    { id: "My Questions", text: "My Questions", iconClass: "fa-solid fa-user", to: "/questions" },
    { id: "My Reports", text: "My Reports", iconClass: "fa-solid fa-user", to: "/reports" },
    { id: "My Cards", text: "My Cards", iconClass: "fa-solid fa-credit-card", to: "/cards" },
    { id: "Need Help", text: "Need Help", iconClass: "fa-solid fa-headset", to: "/help" },
  ];

  // Handle click to toggle active icon
  const handleIconClick = (iconId) => {
    setActiveIcon((prevId) => (prevId === iconId ? null : iconId));
  };

  return (
    <div className="sidebar-profile">
      <div className="wallet-section">
        <h6 style={{ paddingRight: "90px", paddingBottom: "10px", borderBottom: "1px solid rgb(226, 225, 225)", width: "100%" }}>Wallet Points</h6>
        <div className="wallet-points">
          <div>
            <span>0</span>
            <p>Total</p>
          </div>
          <div>
            <span>0</span>
            <p>Used</p>
          </div>
          <div>
            <span>0</span>
            <p>Available</p>
          </div>
        </div>
      </div>

      <ul className="sidebar-links">
        <div className="sidebar-links">
          {icons.map((icon) => (
            <NavLink
              key={icon.id}
              to={icon.to}
              onClick={() => handleIconClick(icon.id)}
              className={`nav-link ${activeIcon === icon.id ? "active" : ""}`} // Active class toggle
              activeClassName="active" // Automatic active class on route match (optional)
            >
              <h6>
                <i className={icon.iconClass} />
                <span>{icon.text}</span>
              </h6>
            </NavLink>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ProfileSidebar;

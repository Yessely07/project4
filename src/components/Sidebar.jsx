// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>Customers</li>
        <li>Employees</li>
        <li>Products</li>
        <li>Catalogs</li>
        <li>Other</li>
      </ul>
      <div className="sidebar-user">
        <img src="/images/user-icon.png" alt="User Icon" />
        <p>User Current: first name</p>
      </div>
    </div>
  );
};

export default Sidebar;

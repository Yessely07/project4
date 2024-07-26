// src/components/EmployeeCard.jsx
import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="employee-card">
      <div className="employee-card-content">
        <h2>Employee Details</h2>
        <p><strong>Id:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Address:</strong> {employee.address}</p>
        <p><strong>City:</strong> {employee.city}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EmployeeCard;

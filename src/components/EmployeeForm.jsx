// src/components/EmployeeForm.jsx
import React, { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import './EmployeeForm.css';

const EmployeeForm = ({ selectedEmployee, setSelectedEmployee }) => {
  const { dispatch } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.id) {
      dispatch({ type: 'UPDATE_EMPLOYEE', payload: employee });
    } else {
      dispatch({ type: 'ADD_EMPLOYEE', payload: { ...employee, id: Date.now() } });
    }
    setEmployee({ id: '', name: '', address: '', city: '' });
    setSelectedEmployee(null);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={employee.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={employee.city}
        onChange={handleChange}
        required
      />
      <button type="submit">{employee.id ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;

// src/App.jsx
import React, { useState } from 'react';
import { EmployeeProvider } from './context/EmployeeContext';
import Sidebar from './components/Sidebar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <EmployeeProvider>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <h1>Sistema web con react</h1>
         
          <EmployeeForm selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} />
          <EmployeeList setSelectedEmployee={setSelectedEmployee} />
        </div>
      </div>
    </EmployeeProvider>
  );
};

export default App;


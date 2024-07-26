// src/components/EmployeeList.jsx
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = () => {
  const { employees, dispatch } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 8;

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  const handleSearch = () => {
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredEmployees = handleSearch();

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="employee-list">
      <button className="add-button" onClick={() => setSelectedEmployee(null)}>Add Employee</button>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Dato1</th>
            <th>Dato2</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td><button onClick={() => setSelectedEmployee(employee)}>👁️</button></td>
              <td><button onClick={() => setSelectedEmployee(employee)}>✏️</button></td>
              <td><button onClick={() => handleDelete(employee.id)}>🗑️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <EmployeeCard employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredEmployees.length / employeesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;




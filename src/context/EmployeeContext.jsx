// src/context/EmployeeContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';
import employeeReducer from '../reducers/employeeReducer';

// Crear un contexto para empleados
const EmployeeContext = createContext();

// Datos de ejemplo para inicializar el estado
const initialEmployees = [
  { id: 1, name: 'Juan Pérez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 2, name: 'María López', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 3, name: 'Carlos García', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 4, name: 'Laura Martínez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 5, name: 'José Rodríguez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 6, name: 'Ana González', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 7, name: 'Luis Hernández', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 8, name: 'Marta Fernández', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 9, name: 'Pablo Jiménez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 10, name: 'Sofía Sánchez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 11, name: 'Miguel Ramírez', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 12, name: 'Isabel Torres', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 13, name: 'Pedro Flores', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 14, name: 'Lucía Ruiz', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
  { id: 15, name: 'Roberto Morales', address: 'Jr. Benigno Dorregaray', city: 'Huancayo' },
];

// Componente proveedor del contexto
const EmployeeProvider = ({ children }) => {
  // initialState, init para inicializar el estado
  const [employees, dispatch] = useReducer(employeeReducer, initialEmployees, (initial) => {
    // Función de inicialización para obtener datos de localStorage
    const localData = localStorage.getItem('employees');
    return localData ? JSON.parse(localData) : initial;
  });

  // useEffect para guardar el estado de empleados en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Proveer el contexto con el estado de empleados y el dispatch
  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };

// src/reducers/employeeReducer.jsx
const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      // Agrega un nuevo empleado al estado actual
      return [...state, action.payload];

    case 'UPDATE_EMPLOYEE':
      // Actualiza un empleado existente en el estado
      return state.map(emp => emp.id === action.payload.id ? action.payload : emp);

    case 'DELETE_EMPLOYEE':
      // Elimina un empleado del estado
      return state.filter(emp => emp.id !== action.payload);

    case 'SET_EMPLOYEES':
      // Establece el estado completo de empleados con una nueva lista
      return action.payload;

    default:
      // Devuelve el estado actual si el tipo de acción no es reconocido
      return state;
  }
};

export default employeeReducer;

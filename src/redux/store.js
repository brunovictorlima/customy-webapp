import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice';
import noteReducer from './slices/noteSlice';

const store = configureStore({
  reducer: {
    customers: customerReducer, // Gerencia o estado de clientes
    notes: noteReducer, // Gerencia o estado de notas
  },
});

export default store;

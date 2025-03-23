import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Thunk para buscar todas as notas
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await api.get('/notes'); // Certifique-se que o endpoint está correto
  return response.data;
});

// Thunk para adicionar uma nova nota
export const addNote = createAsyncThunk('notes/addNote', async (newNote) => {
  const response = await api.post('/notes', newNote);
  return response.data;
});

// Thunk para atualizar uma nota existente
export const updateNote = createAsyncThunk('notes/updateNote', async (note) => {
  const response = await api.put(`/notes/${note.id}`, note);
  return response.data;
});

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Buscar notas
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchNotes.rejected, (state) => {
        state.loading = false;
      })
      // Adicionar nota
      .addCase(addNote.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // Atualizar nota
      .addCase(updateNote.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (note) => note.id === action.payload.id,
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default noteSlice.reducer;

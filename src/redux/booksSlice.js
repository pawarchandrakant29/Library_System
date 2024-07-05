import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get('http://localhost:5000/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post('http://localhost:5000/books', book);
  return response.data;
});

export const updateBook = createAsyncThunk('books/updateBook', async (book) => {
  const response = await axios.put(`http://localhost:5000/books/${book.id}`, book);
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`http://localhost:5000/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.books = payload;
        state.status = 'success';
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.books.push(payload);
      })
      .addCase(updateBook.fulfilled, (state, { payload }) => {
        const index = state.books.findIndex((book) => book.id === payload.id);
        state.books[index] = payload;
      })
      .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.books = state.books.filter((book) => book.id !== payload);
      });
  },
});

export default booksSlice.reducer;

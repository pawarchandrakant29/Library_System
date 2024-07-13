import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooksAsync = createAsyncThunk('books/getBooks', async () => {
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

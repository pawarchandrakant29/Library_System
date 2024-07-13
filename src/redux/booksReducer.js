import { createSlice } from '@reduxjs/toolkit';
import { getBooksAsync, addBook, updateBook, deleteBook } from './booksAction';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'success';
      })
      .addCase(getBooksAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;

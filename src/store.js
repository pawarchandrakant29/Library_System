// store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./redux/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;

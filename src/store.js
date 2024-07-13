import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./redux/booksReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;

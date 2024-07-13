import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksAction";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, year };
    dispatch(addBook(newBook));
    navigate("/");
  };

  return (
    <>
      <p className="c1">𝓐𝓓𝓓 𝓑𝓞𝓞𝓚</p>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Book to Library</button>
        <button className="btn2" type="button" onClick={() => navigate("/")}>
          Back to Library
        </button>
      </form>
    </>
  );
};

export default AddBook;

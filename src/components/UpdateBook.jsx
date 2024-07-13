import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/booksAction";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state;
  const dispatch = useDispatch();

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);

  useEffect(() => {
    if (!book) {
      navigate("/");
    }
  }, [book, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { ...book, title, author, genre, year };
    dispatch(updateBook(updatedBook));
    navigate("/");
  };

  return (
    <>
      <p className="cc1">𝓤𝓟𝓓𝓐𝓣𝓔 𝓑𝓞𝓞𝓚</p>
      <form onSubmit={handleSubmit} className="update-book-form">
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
        <button type="submit">Update Book</button>
        <button className="btn2" type="button" onClick={() => navigate("/")}>
          Back to Library
        </button>
      </form>
    </>
  );
};

export default UpdateBook;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksAsync, deleteBook } from "../redux/booksAction";
import { useNavigate } from "react-router-dom";
import "./BookList.css";

const BookList = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (id) => {
    const book = books.find((book) => book.id === id);
    navigate(`/update/${id}`, { state: book });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-list">
      <p className="c1">𝐿𝐼𝐵𝑅𝘼𝑅𝒴 𝓑𝓞𝓞𝓚𝓢</p>
      <table width={200} className="p2">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td className="sep">
                <button className="btn1" onClick={() => handleEdit(book.id)}>Edit</button>
                <button className="btn2" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn3" onClick={() => navigate("/add")}>Add Book to Library</button>
    </div>
  );
};

export default BookList;

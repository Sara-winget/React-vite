import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5555/books/fetch/${id}`);
      const book = res.data.data;
      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.publishYear);
    } catch (err) {
      setError("Error fetching book details");
      console.log(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5555/books/update/${id}`, {
        title,
        author,
        publishYear: year,
      });
      setMsg(res.data.msg);
      navigate("/");
    } catch (err) {
      setError("Error updating book");
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      {msg && <p>{msg}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Publish Year"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBook;

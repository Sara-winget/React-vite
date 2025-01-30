import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5555/books/delete/${id}`);
      setMsg(res.data.msg);
      navigate("/");
    } catch (err) {
      setError("Error deleting book");
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2>Delete Book</h2>
      {msg && <p>{msg}</p>}
      {error && <p>{error}</p>}
      <p>Are you sure you want to delete this book?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default DeleteBook;

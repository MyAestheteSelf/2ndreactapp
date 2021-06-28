import React from "react";
import "../css/each-task.css";

export const TodoItem = ({ tasks, onDelete }) => {
  return (
    <div className="container">
      <div className="card">
        <h4 className="title">{tasks.title}</h4>
        <p className="desc">{tasks.desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(tasks);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

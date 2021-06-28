import React, { useState } from "react";
import "../css/form.css";

export const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitted = (e) => {
      e.preventDefault();
      if(!title||!desc){
          alert("You can not keep empty title and description.");
      }
      else{
        props.addTask(title,desc);
      }
  };
  return (
    <form onSubmit={submitted} className="add-task">
      <label htmlFor="title">Title*</label>
      <input
        type="text"
        value={title}
        placeholder="Title"
        autoComplete="off"
        id="title"
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
      />

      <label htmlFor="desc">Description*</label>
      <input
        type="text"
        value={desc}
        placeholder="Description"
        autoComplete="off"
        id="desc"
        onChange={(e)=>{
            setDesc(e.target.value)
        }}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

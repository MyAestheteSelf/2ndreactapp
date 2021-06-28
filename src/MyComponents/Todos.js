import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div>
      <h2 className="text-center">Todo-List</h2>
      {todos.map((todo) => {
        return <TodoItem tasks={todo} onDelete={onDelete} key={todo.sno} />;
      })}
    </div>
  );
};

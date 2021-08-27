import "../App.css";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

export default function Todo({ todo, changeTodo, deleteTodo }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        onClick={() => changeTodo(todo)}
        className="completeInput"
        onChange={(e) => (e.target.value = todo.completed)}
        checked={todo.completed === true ? true : false}
        id={todo.id}
      />

      <label
        className={todo.completed === true ? "completed" : "notcompleted"}
        htmlFor={todo.id}
      >
        {todo.name}
      </label>

      <RiCloseFill onClick={() => deleteTodo(todo.id)} size="30" color="red" />
    </div>
  );
}

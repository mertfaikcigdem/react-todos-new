import "../App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function AddTodo({ setTodos, todos }) {
  const [todoText, setTodoText] = useState("");

  const addTodo = (e) => {
    setTodoText(e.target.value);
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        setTodos([
          ...todos,
          { id: uuidv4(), name: todoText, completed: false },
        ]);
        setTodoText("");
      }
    }
  };

  const chooseAllTodos = () => {
    setTodos(
      todos.map((t) => {
        return {
          ...t,
          completed: true,
        };
      })
    );
  };

  return (
    <div className="add-container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => addTodo(e)}
        onKeyDown={(e) => addTodo(e)}
        placeholder="Add Todo..."
        className="add-todo"
      />
      <AiOutlineArrowDown size="20" onClick={chooseAllTodos} color="#858585" />
    </div>
  );
}

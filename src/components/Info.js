import "../App.css";
import React, { useEffect } from "react";

export default function Info({ todos, setFilterTodos, setTodos }) {
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  useEffect(() => {
    if (todos.filter((todo) => todo.completed === true).length === 0) {
      setFilterTodos(0);
    }
  }, [todos]);

  return (
    <div className="info">
      <p>{todos.length} items left.</p>
      <div className="info-actions">
        <button onClick={() => setFilterTodos(0)}>All</button>
        <button onClick={() => setFilterTodos(1)}>Active</button>
        <button
          onClick={() => setFilterTodos(2)}
          disabled={
            todos.filter((todo) => todo.completed === true).length === 0
              ? true
              : false
          }
          className={
            todos.filter((todo) => todo.completed === true).length === 0
              ? "disable"
              : ""
          }
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        disabled={
          todos.filter((todo) => todo.completed === true).length === 0
            ? true
            : false
        }
        className={
          todos.filter((todo) => todo.completed === true).length === 0
            ? "disable"
            : ""
        }
      >
        Clear Completed
      </button>
    </div>
  );
}

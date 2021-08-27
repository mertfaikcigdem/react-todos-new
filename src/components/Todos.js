import "../App.css";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos({ todos, setTodos, filterTodos }) {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = (todo) => {
    setTodos(
      todos.map((t, index) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !todo.completed,
          };
        }

        return t;
      })
    );
  };

  return (
    <div className="todos">
      {todos && filterTodos === 0
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          ))
        : filterTodos === 1
        ? todos
            .filter((todo) => todo.completed === false)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                changeTodo={changeTodo}
                deleteTodo={deleteTodo}
              />
            ))
        : todos
            .filter((todo) => todo.completed === true)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                changeTodo={changeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
    </div>
  );
}

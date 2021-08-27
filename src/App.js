import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Info from "./components/Info";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState(1);

  return (
    <>
      <h2>todos</h2>
      <div className="App">
        <AddTodo setTodos={setTodos} todos={todos} />
        <Todos
          todos={todos}
          setTodos={setTodos}
          filterTodos={filterTodos}
          setFilterTodos={setFilterTodos}
        />
        <Info
          todos={todos}
          setTodos={setTodos}
          setFilterTodos={setFilterTodos}
        />
      </div>
    </>
  );
}

export default App;

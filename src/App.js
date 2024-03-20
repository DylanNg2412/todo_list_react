import { useState } from "react";

import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div className="container">
        <div className="card rounded shadow-sm" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <TodoList todos={todos} setTodos={setTodos} />
            <TodoForm todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <p>Manage your daily tasks easily</p>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button onClick={addTodo}>Add Task</button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks added yet.</p>
        ) : (
          todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
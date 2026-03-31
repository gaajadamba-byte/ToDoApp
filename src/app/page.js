"use client";

import { useState } from "react";
import Input from "../components/Input";
import Filters from "../components/Filters";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[420px] bg-white rounded-[8px] shadow-lg p-6 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-semibold">To-Do list</h1>

        <Input addTodo={addTodo} />

        <Filters filter={filter} setFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoFooter todos={todos} clearCompleted={clearCompleted} />

        <p className="text-center text-sm text-gray-400 ">
          Powered by <span className="text-blue-500"> Pinecone academy</span>
        </p>
      </div>
    </div>
  );
};

export default Page;

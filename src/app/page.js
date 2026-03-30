"use client";

import { useState } from "react";
import Input from "../components/Input";
import Filters from "../components/Filters";
import TodoList from "../components/TodoList";

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

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="flex items-center justify-center pt-[50px] bg-blue-400 min-h-screen">
      <div className="w-[477px] flex flex-col items-center bg-white p-6 gap-6 rounded-lg shadow-lg">
        <h1 className="text-black font-['Inter'] text-3xl font-semibold tracking-[-0.5px]">
          To Do List
        </h1>

        <Input addTodo={addTodo} />

        <Filters filter={filter} setFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <div className="flex gap-4">
          <p>Powered by</p>
          <p className="text-blue-600">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

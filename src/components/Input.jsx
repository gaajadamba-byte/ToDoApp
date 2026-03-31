"use client";

import { useState } from "react";

const Input = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 h-[44px] px-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAdd}
        className="px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;

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
    <div className="flex w-full gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a new task ..."
        className="flex-1 h-[40px] px-4 border rounded-[6px]"
      />
      <button
        onClick={handleAdd}
        className="h-[40px] px-4 rounded-[6px] bg-[#3C82F6] text-white hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;

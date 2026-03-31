"use client";

const TodoFooter = ({ todos, clearCompleted }) => {
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
      <span>
        {completed} of {todos.length} tasks completed
      </span>

      <button
        onClick={clearCompleted}
        className="text-red-500 hover:text-red-600"
      >
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;

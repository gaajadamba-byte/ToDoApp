"use client";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="w-full flex flex-col gap-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between border border-gray-200 rounded-2xl p-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 text-blue-600"
            />
            <span
              className={`${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-2 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

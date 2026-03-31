"use client";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No tasks yet. Add one above!
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5"
            />
            <span
              className={`${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
          </div>

          {todo.completed && (
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-500"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

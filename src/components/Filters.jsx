"use client";

const Filters = ({ filter, setFilter }) => {
  const options = ["all", "active", "completed"];

  return (
    <div className="flex gap-2">
      {options.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filters;

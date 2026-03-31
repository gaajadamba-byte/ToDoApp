"use client";

const Filters = ({ filter, setFilter }) => {
  const options = ["all", "active", "completed"];

  return (
    <div className="flex gap-2">
      {options.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg text-sm ${
            filter === f
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filters;

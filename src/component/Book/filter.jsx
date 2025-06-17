import React from "react";

const Filter = ({ currentFilter, setFilter }) => {
  const filterList = ["ALL", "READ", "UNREAD"];

  return (
    <div className="flex justify-center gap-4 my-4">
      {filterList.map((filter) => {
        const isActive = filter === currentFilter;

        return (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={`px-4 py-2 rounded-full  ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;

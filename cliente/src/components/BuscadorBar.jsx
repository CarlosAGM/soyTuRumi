import React, { useState } from "react";
function BuscadorBar({ buscar }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscar(query);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={query}
    //     onChange={handleChange}
    //     placeholder="Buscar..."
    //   />
    //   <button type="submit">Buscar</button>
    // </form>

    <form onSubmit={handleSubmit} class="max-w-md mx-auto">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-green-400 focus:border-green-400 "
          placeholder="Buscar por Región"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-verdeOriginal hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-full text-sm px-4 py-2"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default BuscadorBar;

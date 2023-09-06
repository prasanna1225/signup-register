import React from 'react';

const SearchBar = () => {
  return (
    <div className="container mx-auto my-8 max-w-7xl">
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border p-3 px-60  rounded-md focus:outline-none focus:ring-2 focus:slate-green mr-5"
      />
      <button
        className="bg-slate-green  text-white px-4 py-3 rounded-md hover:bg-slate-green focus:outline-none focus:ring-2 focus:bg-slate-green"
      >
        Search
      </button>
    </div></div>
  );
};

export default SearchBar;
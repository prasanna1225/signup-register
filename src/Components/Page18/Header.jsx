import React from "react";

function Header({ title, subtitle }) {
  return (
    <div className="flex flex-col max-w-5xl items-center space-y-3 sm:space-y-4">
      <h1 className=" text-5xl text-green-700">{title}</h1>
      <h3 className="text-lg text-gray-600/50">{subtitle}</h3>
    </div>
  );
}

export default Header;

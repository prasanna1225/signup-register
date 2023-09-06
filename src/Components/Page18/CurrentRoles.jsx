import React from "react";

function CurrentRoles({ title, position, button }) {
  if (position) {
    return (
      <div className="flex max-w-5xl items-center justify-center space-x-2 md:space-x-4 mt-2">
        <img src="" alt="left" />
        <div className="flex flex-col space-y-2 md:space-y-4">
          <h1 className="text-3xl text-green-700">{title}</h1>
          <p className="font-medium text-sm text-gray-500">
            Instructor from around the world teach millions of students on
            Edfling course.We provide the tools and skills to teach what you
            love.Instructor from around the world teach millions of students on
            Edfling course.We provide the tools and skills to teach what you
            love{" "}
          </p>
          <div className="flex">
            <button className="p-2 md:p-4 bg-green-700 text-white rounded-md hover:bg-green-900 transition duration-150 ease-in-out">
              {button.includes("Instructor")
                ? `Join as an ${button}`
                : `${button}`}
            </button>
            <a href="/Page18"></a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex max-w-5xl items-center justify-center space-x-2 md:space-x-4 mt-2">
        <div className="flex flex-col space-y-2 md:space-y-4">
          <h1 className="text-3xl text-green-700">{title}</h1>
          <p className="font-medium text-sm text-gray-500">
            Instructor from around the world teach millions of students on
            Edfling course.We provide the tools and skills to teach what you
            love.Instructor from around the world teach millions of students on
            Edfling course.We provide the tools and skills to teach what you
            love"
          </p>
          <div className="flex">
            <button className="p-2 md:p-4 bg-green-700 text-white rounded-md hover:bg-green-900 transition duration-150 ease-in-out">
              Join as a {button}
            </button>
            <a href="/Page18"></a>
          </div>
        </div>
        <img src="" alt="right" />
      </div>
    );
  }
}

export default CurrentRoles;

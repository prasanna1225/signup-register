import React from "react";

function CourseCategoryCard({ text , pic}) {
  return (
    <div className='cursor-pointer hover:scale-110 transition duration-200 ease-in'>
      <img className="" src={pic} />
      <p className="text-center text-green-700 font-bold">{text}</p>
    </div>
  );
}

export default CourseCategoryCard;

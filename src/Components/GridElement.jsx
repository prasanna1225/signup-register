
import React from "react";
import karans from "../images/page4/karan.png";

const GridElement = ({image}) => {
  return (
    <div className="flex flex-col md:flex-row xs:text-center  md:text-left items-center space-x-5 p-6">
      <div className="flex-shrink-0">
        <img src={image} alt="Karan's" className="h-52 md:h-auto" />
      </div>

      <div className="flex-grow ">
        <p className="text-xl font-bold text-slate-green">
          Karan Jariwala{" "}
          <span className="text-sm text-slate-green opacity-50">
            (Graphic Designer at Apple)
          </span>
        </p>
        <p className="text-gray-600 py-1 ">
          6+ years of experience in Motion Design Ex-Google, Ex-Flipkart
        </p>
        <div className="py-1">
          <span className="text-xs font-bold">13+</span>{" "}
          <span className="text-xs">Course Published</span>
          <span className="text-xs font-bold ml-3">•</span>
          <span className="text-xs font-bold ml-3">4.6+</span>
          <span className="ml-1 text-yellow-500">&#9733;</span>
          <span className="ml-1 text-xs">Rating(10K + reviews)</span>
        </div>
        <button className="px-8 py-2 my-4 bg-edfling-green text-white rounded-lg">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default GridElement;

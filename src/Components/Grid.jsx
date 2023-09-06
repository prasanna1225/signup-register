import React from "react";
import GridElement from "./GridElement";
import karan from "../images/page4/karan.png";
import krishna from "../images/page4/krishna.png";

const Grid = ({title}) => {
  return (
    <div>
      <div className="container mx-auto my-8 max-w-7xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-slate-green">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <GridElement image={karan}/>
          <GridElement image={krishna}/>
          <GridElement image={karan}/>
          <GridElement image={krishna}/>
        </div>
        <div className="flex justify-center items-center">
          <button className="py-4 px-20 text-xl text-center bg-edfling-green text-white rounded-lg">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
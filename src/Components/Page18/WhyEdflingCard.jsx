import React from "react";

function WhyEdflingCard({ title, position, pic }) {
  if (position) {
    return (
      <div className="flex max-w-5xl items-center  space-y-2 sm:space-y-0 sm:space-x-5">
        {/* Image */}
        <div className="w-full sm:max-w-md hidden sm:inline-flex">
          <img className="w-full h-auto" src={pic} alt="" />
        </div>
        {/* Description */}
        <div className="flex flex-col">
          <h2 className="sm:text-2xl text-green-700 text-4xl">{title}</h2>
          <p className="sm:text-sm text-md text-gray-500">
            Edflings is a Global training provider based across the world that
            specializes in different courses related to different domains. We
            provide you the best mentor with the best courses. Edflings is a
            Global training provider based across the world that specializes in
            different courses related to different domains. We provide you the
            best mentor with the best courses.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex max-w-5xl items-center space-y-2 sm:space-y-0 sm:space-x-5">
        {/* Description */}
        <div className="flex flex-col">
          <h2 className="sm:text-2xl text-green-700 text-4xl">{title}</h2>
          <p className="sm:text-sm text-md text-gray-500">
            Edflings is a Global training provider based across the world that
            specializes in different courses related to different domains. We
            provide you the best mentor with the best courses. Edflings is a
            Global training provider based across the world that specializes in
            different courses related to different domains. We provide you the
            best mentor with the best courses.
          </p>
        </div>
        {/* Image */}
        <div className="w-full sm:max-w-md hidden sm:inline-flex">
          <img className="w-full h-auto" src={pic} alt="" />
        </div>
      </div>
    );
  }
}

export default WhyEdflingCard;

import React from "react";

const Mentors = (props) => {
  const { componentData } = props;
  return (
    <div className="container p-3 font-poppins">
      <h1 className="text-2xl md:text-3xl text-center text-teal-800 opacity-90 font-bold mb-2">
        Our Mentors
      </h1>
      <h3 className="text-lg md:text-2xl text-center text-teal-800 text-opacity-70 mb-4">
        Our mentor comes from IIT & NIT and India’s Best Collegees
      </h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-2">
        {componentData.map((component) => (
          <div
            className="max-w-sm w-full lg:max-w-full lg:flex mb-4 md:mb-3"
            key={component.id}
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l  overflow-hidden mb-2">
              <img
                className="h-full w-full object-cover rounded-md "
                src={component.image}
                alt={component.name}
              />
            </div>
            <div className="bg-white ml-4 rounded-b lg:rounded-b-none lg:rounded-r  lg:p-3 flex flex-col justify-between leading-normal text-teal-800 opacity-90 ">
              <div className="mb-2 lg:mb-6">
                <div className=" font-semibold text-xl lg:text-2xl  mb-2 ">
                  {component.name}
                  <span className="mentor-profile text-xs">
                    ({component.profile})
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-lg text-teal-800 text-opacity-70">
                    {component.experience}
                  </p>
                </div>
                <div className="text-start text-sm flex flex-col lg:flex-row sm:justify-start lg:justify-between mb-1 lg:mb-3 lg:space-x-2 ">
                  <div className="flex items-center lg:items-start space-x-1 justify-start sm:justify-start lg:justify-between">
                    <div className="font-bold">
                      {component.publishedCourses}+
                    </div>
                    <div>Courses Published</div>
                  </div>
                  <div className="my-2 lg:my-0">
                    <img src="./mentors/Ellipse.png" alt="" />
                  </div>
                  <div className="flex items-center lg:items-start space-x-1 ">
                    <div className="font-bold">4.5</div>
                    <img src="/mentors/Star.png" alt="" />
                    <div>Rating</div>
                    <div>({component.reviews}+ Reviews)</div>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn-lg bg-teal-800 button text-white border-0 w-1/3  p-2 text-xs">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;

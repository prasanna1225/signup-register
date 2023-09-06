import React from 'react';

const CourseComponent = ({ section, courses }) => {
  return (
    <div className='my-[70px] mx-auto'>
      <h1 className="text-center text-3xl text-[#215D4F] mb-8">{section} Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="flex overflow-hidden bg-[#EDEDED] rounded-3xl p-4 max-[450px]:flex-col">
            <div className="w-2/3 border max-[450px]:h-[300px] max-[450px]:w-full max-[450px]:mb-3">
              <img className="h-full w-full rounded-3xl object-cover" src={course.image} alt={`Image ${course.id}`} />
            </div>
            <div className="w-full text-gray-800 flex flex-col gap-1 px-3 justify-between">
              <h3 className="font-semibold text-2xl text-[#215D4F] max-[645px]:text-xl max-[645px]:line-clamp-1 max-[450px]:line-clamp-none line-clamp-2">{course.heading}</h3>
              <p className="mt-1 text-sm text-[#215D4F] max-[645px]:line-clamp-2 max-[450px]:line-clamp-none line-clamp-4">
                {course.description}
              </p>
              <p className="text-sm max-[645px]:line-clamp-1 max-[450px]:line-clamp-none">
                <span className="font-bold">Skills you learn:</span> {course.skills.join(", ")}
              </p>
              <div className='flex flex-row flex-wrap gap-1'>
                {course.areas.map((area, index) => (
                  <p key={index} className="mr-1 px-2 py-1 bg-[#2C9D82] text-white rounded text-xs">{area}</p>
                ))}
              </div>
              <div className="flex justify-start items-center gap-2">
                <button type="submit" className="inline-flex items-center py-2.5 px-5 text-sm font-medium text-white bg-[#215D4F] rounded-md hover:bg-[#45776B] focus:outline-none max-[450px]:text-xs">
                  Enroll now
                </button>
                <div className='max-[450px]:text-xs'>
                  Learn more
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
    <button type="submit" className="inline-flex items-center py-2.5 px-8 my-8 text-xl text-white bg-[#215D4F] rounded-md hover:bg-[#45776B] focus:outline-none">
      View all courses
    </button>
  </div>
    </div>
  );
};

export default CourseComponent;

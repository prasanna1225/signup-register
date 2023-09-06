import React from "react";
//Components
import Header from "../Components/Page18/Header";
import CurrentRoles from "../Components/Page18/CurrentRoles";
import TrendingCoursesCarousel from "../Components/Page18/TrendingCoursesCarusel";
import TestimonialsCarousel from "../Components/Page18/TestimonialsCarousel";
import WhyEdflingCard from "../Components/Page18/WhyEdflingCard";
import CourseCategoryCard from "../Components/Page18/CourseCategoryCard";
//Assests
import Pic1 from "../images/page18/Pic1.png";
import Pic2 from "../images/page18/Pic2.png";
import Pic3 from "../images/page18/Pic3.png";
import Pic4 from "../images/page18/Pic4.png";
import Pic5 from "../images/page18/Rectangle 209.png";
import Pic6 from "../images/page18/Rectangle 209-1.png";
import Pic7 from "../images/page18/Rectangle 209-2.png";
import Pic8 from "../images/page18/Rectangle 209-3.png";
import Pic9 from "../images/page18/Pic9.png";
import Pic10 from "../images/page18/Pic10.png";
import Pic11 from "../images/page18/Pic11.png";
import Pic12 from "../images/page18/Pic12.png";


function Page18() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-5 mt-8 sm:mt-10 mx-3 sm:mx-4">
      <Header
        title="Why Edfling Courses"
        subtitle="Edfling is your success Partner"
      />
      <WhyEdflingCard
        title="Live/Scheduled Classes"
        position={true}
        pic={Pic1}
      />
      <WhyEdflingCard
        title="Live Doubt Session or Quick Doubt Solve"
        position={false}
        pic={Pic2}
      />
      <WhyEdflingCard
        title="Structured and Targeted Study Material"
        position={true}
        pic={Pic3}
      />
      <WhyEdflingCard
        title="Test on Regular Basis for Progress Tracking"
        position={false}
        pic={Pic4}
      />
      <Header
        title="Course Categories"
        subtitle="More Popular Course Categories available for you"
      />
      <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl">
        <CourseCategoryCard text="Design" pic={Pic5} />
        <CourseCategoryCard text="Development" pic={Pic6} />
        <CourseCategoryCard text="Marketing" pic={Pic7} />
        <CourseCategoryCard text="IT/Software" pic={Pic8} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl">
        <CourseCategoryCard text="Personal Development" pic={Pic9} />
        <CourseCategoryCard text="Business" pic={Pic10} />
        <CourseCategoryCard text="Academics" pic={Pic11} />
        <CourseCategoryCard text="Music" pic={Pic12} />
      </div>
      <button className="p-2 sm:p-3 w-36 sm:w-52  bg-green-800 rounded-md text-white font-bold hover:bg-green-950 transition duration-150 ease-in-out">
        Explore more
      </button>
      <CurrentRoles
        title="Become an Instructor"
        button="Instructor"
        position={true} //pic={}
      />
      <CurrentRoles
        title="Become an Teaching Assistant(TA)"
        button="TA"
        position={false}
        // pic={}
      />
      {/* About us component mixed with Become Instructor and TA */}
      <CurrentRoles
        title="About US"
        button="Learn More"
        position={true} //pic={}
      />
      <Header
        title="Trending Courses"
        subtitle="Best and Popular Courses of 2023 is here for you"
      />
      <TrendingCoursesCarousel />
      <Header
        title="Testimonials"
        subtitle="Listen from our Bright customers"
      />
      <TestimonialsCarousel />
    </div>
  );
}

export default Page18;

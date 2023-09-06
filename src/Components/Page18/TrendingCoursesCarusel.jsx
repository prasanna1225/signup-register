import React, { useState, useRef } from "react";
import py from "../../images/page18/python.jpg";
import cpp from "../../images/page18/CPP.png";
import uiux from "../../images/page18/UIUX.png";
import desgin from "../../images/page18/Desgin.png";
import TrendingCoursesCard from "./TrendingCoursesCard";

const TrendingCoursesCarousel = () => {
  const items = [
    {
      title: "Learn Python",
      description: "The complete Journey Beginner to Pro 2022",
      img: py,
    },
    {
      title: "Learn Deisgn",
      description: "The complete Journey Beginner to Pro 2022",
      img: desgin,
    },
    {
      title: "Learn UI/UX",
      description: "The complete Journey Beginner to Pro 2022",
      img: uiux,
    },
    {
      title: "Learn CPP",
      description: "The complete Journey Beginner to Pro 2022",
      img: cpp,
    },
    {
      title: "Learn CPP",
      description: "The complete Journey Beginner to Pro 2022",
      img: cpp,
    },
    // Add more cards if needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - cardsToShow ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative max-w-5xl p-5 sm:p-6 overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
        }}
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <TrendingCoursesCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute w-10 h-10 bg-green-700 text-white font-bold left-0 top-1/2 transform -translate-y-1/2  hover:bg-gray-300 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute w-10 h-10 text-white font-bold right-0 top-1/2 transform -translate-y-1/2 bg-green-700  hover:bg-gray-300 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default TrendingCoursesCarousel;

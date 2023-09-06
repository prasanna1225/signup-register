import React from "react";
import person from "../../images/page18/person profile.png";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";
import { useRef } from "react";

function TestimonialsCarousel() {
  const items = [
    {
      title: "Sandeep Sing",
      subtitle: "IIT Guhwati",
      description:
        "Edfling course is a good and advanced platform and it provide best mentor and best material and the best feature of this platform it provide the quick doubt support and weekly doubt sessions to solve your query and you will get good and practical knowledge in easy way.Edfling course is a good and advanced platform and it provide best mentor and best material.",
      img: person,
    },
    {
      title: "Sandeep Sing",
      subtitle: "IIT Guhwati",
      description:
        "Edfling course is a good and advanced platform and it provide best mentor and best material and the best feature of this platform it provide the quick doubt support and weekly doubt sessions to solve your query and you will get good and practical knowledge in easy way.Edfling course is a good and advanced platform and it provide best mentor and best material.",
      img: person,
    },
    {
      title: "Sandeep Sing",
      subtitle: "IIT Guhwati",
      description:
        "Edfling course is a good and advanced platform and it provide best mentor and best material and the best feature of this platform it provide the quick doubt support and weekly doubt sessions to solve your query and you will get good and practical knowledge in easy way.Edfling course is a good and advanced platform and it provide best mentor and best material.",
      img: person,
    },
    {
      title: "Sandeep Sing",
      subtitle: "IIT Guhwati",
      description:
        "Edfling course is a good and advanced platform and it provide best mentor and best material and the best feature of this platform it provide the quick doubt support and weekly doubt sessions to solve your query and you will get good and practical knowledge in easy way.Edfling course is a good and advanced platform and it provide best mentor and best material.",
      img: person,
    },
    {
      title: "Sandeep Sing",
      subtitle: "IIT Guhwati",
      description:
        "Edfling course is a good and advanced platform and it provide best mentor and best material and the best feature of this platform it provide the quick doubt support and weekly doubt sessions to solve your query and you will get good and practical knowledge in easy way.Edfling course is a good and advanced platform and it provide best mentor and best material.",
      img: person,
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
          <TestimonialCard
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            description={item.description}
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
        className="absolute w-10 h-10 text-white font-bold right-0 top-1/2 transform -translate-y-1/2 bg-green-700  hover:bg-gray-300  p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default TestimonialsCarousel;

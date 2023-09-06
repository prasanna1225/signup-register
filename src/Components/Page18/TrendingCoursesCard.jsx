import React from "react";
import star from "../../images/page18/Star 4.svg";
import rs from "../../images/page18/rupeeLogo.png";

function TrendingCoursesCard(props) {
  return (
    <div class="mx-2 min-w-[280px] bg-white rounded-lg flex flex-col justify-center items-center my-4">
      <a href="#">
        <img class="rounded-lg h-56 w-[310px]" src={props.img} alt="python" />
      </a>
      <div class="mx-1">
        <a href="#">
          <p className="text-left text-green-700 my-2 text-xl">{props.title}</p>
        </a>
        <p className="my-1 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="text-sm font-normal text-green-700 flex mb-2">
          <span className="font-bold mx-1">4.6</span>{" "}
          <img src={star} alt="rating" /> Rating (10K+ Reviews)
        </p>
        <p className="text-lg flex text-green-700">
          <span className="flex items-center">
            <img src={rs} alt="price" />
            699
          </span>
          <span className="relative px-2 text-xs flex items-center text-normal">
            <img className="w-2 h-2" src={rs} alt="price" />
            1999
            <div className="border-b-2 border-gray-700 w-9 absolute transform skew-y-12"></div>
          </span>
        </p>

        <div className="flex justify-between items-center">
          <a
            href="#"
            class="inline-flex items-center my-3 px-4 py-2 text-sm font-light text-center text-white bg-green-800 rounded-md hover:bg-green-900 "
          >
            Enroll now
          </a>
          <a href="#" className="my-1  font-light text-gray-700">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingCoursesCard;

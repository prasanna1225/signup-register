import React from "react";
import courseAction from "../images/page68/courseAction.svg";
import trophy from "../images/page68/trophy.png";

function courseCollection() {
  return (
    <div className="md:inline-flex flex-col items-center gap-[30px]">
      <div className="flex flex-col items-start gap-[12px] md:ml-[35px]">
        {/* Image with headline */}
        <div className="flex mt-[10px]">
          <img src={trophy} width={35} height={35}></img>
          <span className="Coursefont ml-[13px]">Course name</span>
        </div>

        <div className=" courseContainer flex w-full md:w-[1178px]  items-start py-[23px] px-[26px]  ">
          <div className="flex items-center gap-[630px]">
            <div className="flex flex-col items-start gap-[2px]">
              <span className="courseSubFont">
                Full Stack Designer From Scratch to Advanced
              </span>
              <span className="courseDate">Completed on 21 may 2022</span>
            </div>
            <img className="hidden md:block" src={courseAction}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default courseCollection;

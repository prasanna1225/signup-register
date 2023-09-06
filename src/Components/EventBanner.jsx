import React from "react";
import undrawSchedule from "../images/page69/undraw-schedule.png";
import "../CSS/EventBanner.css";
import lineleft from "../images/page69/lineleft.svg";
import lineright from "../images/page69/lineright.svg";
import event1 from "../images/page69/event1.png";
import event2 from "../images/page69/event2.png";
import event3 from "../images/page69/event3.png";
import event4 from "../images/page69/event4.png";

function EventBanner() {
  return (
    <>
      {/* Event Banner */}
      <div className="w-[438px]  md:w-[1042px] h-[202px] box-border ml-0 md:ml-[35px] gradient relative ">
        <span className="eventFont mt-[48px] ml-[44px] absolute">Events</span>
        <span className=" EventSubtitle mt-[115px] ml-[44px] absolute">
          Attend latest events to know about trends and technology
        </span>
        <img
          src={undrawSchedule}
          width={156}
          height={188}
          className="hidden md:block absolute mt-[50px] ml-[867px] mr-[87px]"
        ></img>
      </div>

      {/* Event Headline */}
      <div className="inline-flex flex-col items-center gap-[29px] ">
        <div className="flex items-center justify-center gap-[19px] md:ml-[370px] mt-[26px]">
          <img
            src={lineleft}
            width={116.039}
            height={0}
            className="stroke-[2px] stroke-[#000] opacity-[0.4000000059604645]"
          ></img>
          <span className="upcomingFont ">Upcoming Events</span>
          <img
            src={lineright}
            width={116.039}
            height={0}
            className="stroke-[2px] stroke-[#000] opacity-[0.4000000059604645]"
          ></img>
        </div>
      </div>

      {/*  Event Content*/}
      <div className="md:inline-flex flex-col items-center md:gap-[29px] md:ml-[35px] mt-[29px]">
        {/* EVENT- 1 & 2 */}
        <div className="flex flex-col md:flex md:flex-row items-start gap-[20px] md:gap-[160px]">
          <div className="w-[440px] h-[523px] rounded-[15px] border-[4px] border-solid border-[#EEE] bg-[#FFF]">
            <div className="inline-flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-[16px]">
                <img src={event1}></img>
                <div className="w-[396px] flex flex-col items-start gap-[20px]">
                  {/* event line */}
                  <p className="w-[413px] eventline">
                    Are you ready to blast off into the stratosphere of sucess
                    in Graphic design industry?
                  </p>
                  {/* events DATA */}
                  <div className="flex items-start gap-[62.245px]">
                    {/* start date  */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Date </span>
                      <span className="end">23rd May 2023 </span>
                    </div>
                    {/* start time */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Time </span>
                      <span className="end">6:00 PM </span>
                    </div>

                    {/* Venue Online */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Venue </span>
                      <span className="end">Online </span>
                    </div>
                  </div>
                  {/* event desc */}
                  <p className="w-[355px] endFont">
                    We're excited to announce the launch of our new course,
                    [Course Name]! This course is designed to help you [briefly
                    describe the course objective or outcome].
                    <span className="endFontView">View details</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[5.4px] py-[8.099px] px-[70.735px] rounded-[9.63px] bg-[#215D4F]">
                <button className="registerNowFont">Register Now</button>
              </div>
            </div>
          </div>
          <div className="w-[440px] h-[523px] rounded-[15px] border-[4px] border-solid border-[#EEE] bg-[#FFF]">
            <div className="inline-flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-[16px]">
                <img src={event2}></img>
                <div className="w-[396px] flex flex-col items-start gap-[20px]">
                  {/* event line */}
                  <p className="w-[413px] eventline">
                    Are you ready to blast off into the stratosphere of sucess
                    in Graphic design industry?
                  </p>
                  {/* events DATA */}
                  <div className="flex items-start gap-[62.245px]">
                    {/* start date  */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Date </span>
                      <span className="end">23rd May 2023 </span>
                    </div>
                    {/* start time */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Time </span>
                      <span className="end">6:00 PM </span>
                    </div>

                    {/* Venue Online */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Venue </span>
                      <span className="end">Online </span>
                    </div>
                  </div>
                  {/* event desc */}
                  <p className="w-[355px] endFont">
                    We're excited to announce the launch of our new course,
                    [Course Name]! This course is designed to help you [briefly
                    describe the course objective or outcome].
                    <span className="endFontView">View details</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[5.4px] py-[8.099px] px-[70.735px] rounded-[9.63px] bg-[#215D4F]">
                <button className="registerNowFont">Register Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* EVENT- 3 & 4 */}
        <div className="flex flex-col md:flex mt-[20px] md:mt-0 md:flex-row items-start gap-[20px] md:gap-[160px]">
          <div className="w-[440px] h-[523px] rounded-[15px] border-[4px] border-solid border-[#EEE] bg-[#FFF]">
            <div className="inline-flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-[16px]">
                <img src={event3}></img>
                <div className="w-[396px] flex flex-col items-start gap-[20px]">
                  {/* event line */}
                  <p className="w-[413px] eventline">
                    Are you ready to blast off into the stratosphere of sucess
                    in Graphic design industry?
                  </p>
                  {/* events DATA */}
                  <div className="flex items-start gap-[62.245px]">
                    {/* start date  */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Date </span>
                      <span className="end">23rd May 2023 </span>
                    </div>
                    {/* start time */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Time </span>
                      <span className="end">6:00 PM </span>
                    </div>

                    {/* Venue Online */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Venue </span>
                      <span className="end">Online </span>
                    </div>
                  </div>
                  {/* event desc */}
                  <p className="w-[355px] endFont">
                    We're excited to announce the launch of our new course,
                    [Course Name]! This course is designed to help you [briefly
                    describe the course objective or outcome].
                    <span className="endFontView">View details</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[5.4px] py-[8.099px] px-[70.735px] rounded-[9.63px] bg-[#215D4F]">
                <button className="registerNowFont">Register Now</button>
              </div>
            </div>
          </div>
          <div className="w-[440px] h-[523px] rounded-[15px] border-[4px] border-solid border-[#EEE] bg-[#FFF]">
            <div className="inline-flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-[16px]">
                <img src={event4}></img>
                <div className="w-[396px] flex flex-col items-start gap-[20px]">
                  {/* event line */}
                  <p className="w-[413px] eventline">
                    Are you ready to blast off into the stratosphere of sucess
                    in Graphic design industry?
                  </p>
                  {/* events DATA */}
                  <div className="flex items-start gap-[62.245px]">
                    {/* start date  */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Date </span>
                      <span className="end">23rd May 2023 </span>
                    </div>
                    {/* start time */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Start Time </span>
                      <span className="end">6:00 PM </span>
                    </div>

                    {/* Venue Online */}
                    <div className="flex flex-col items-center gap-[11.204px]">
                      <span className="start">Venue </span>
                      <span className="end">Online </span>
                    </div>
                  </div>
                  {/* event desc */}
                  <p className="w-[355px] endFont">
                    We're excited to announce the launch of our new course,
                    [Course Name]! This course is designed to help you [briefly
                    describe the course objective or outcome].
                    <span className="endFontView">View details</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[5.4px] py-[8.099px] px-[70.735px] rounded-[9.63px] bg-[#215D4F]">
                <button className="registerNowFont">Register Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Events */}
        <div className=" flex mt-[20px] md:mt-0 items-center justify-center  md:items-start gap-[5.735px] py-[8.603px] px-[75.131px] rounded-[8.603px] bg-[#215D4F]">
          <button className="viewAllEvents">View all Events</button>
        </div>
      </div>
    </>
  );
}

export default EventBanner;

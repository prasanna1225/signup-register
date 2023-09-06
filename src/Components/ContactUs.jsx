import React from "react";
import "../CSS/ContactUs.css";
import phone from "../images/page1/phone.svg";
import message from "../images/page1/message.svg";
import location from "../images/page1/location.svg";
import arrow from "../images/page1/arrow.svg";
import undrawPersonal from "../images/page1/undraw-personal.png";

function ContactUs() {
  return (
    <>
      <div className=" w-[1300px] h-[800px] rounded-[20px] bg-[#45776B] relative">
        {/* contact us info */}
        <div className="inline-flex flex-col w-[343px] h-[480px] items-start gap-[45px] mt-[116px] ml-[86px] mr-[871px] mb-[204px] absolute">
          {/* 1 */}
          <div className="flex h-[114px] flex-col items-start gap-[15px]">
            <span className="contactUsSpan">Contact us</span>
            <span className="contactUsSubSpan">
              Fill up the form and our Team will get back to you within 24 hours
            </span>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-start gap-[30px]">
            {/* phone */}
            <div className="flex items-center gap-[10px]">
              <div className="circle relative">
                <img src={phone} className="mx-[8px] mt-[7px] mb-[8px]"></img>
              </div>

              <span className="phone">+91 8989890298</span>
            </div>

            {/* message */}
            <div className="flex items-center gap-[10px]">
              <div className="circle relative">
                <img
                  src={message}
                  className="ml-[6px] mr-[9px] mt-[5px] mb-[10px]"
                ></img>
              </div>

              <span className="phone">edflinghelp@gmail.com</span>
            </div>

            {/* location */}
            <div className="flex items-start w-[317px] h-[90px] gap-[10px]">
              <div className="circle relative">
                <img
                  src={location}
                  className="mx-[9px] mt-[8px] mb-[10px]"
                ></img>
              </div>

              <span className="phone w-[272px] h-[90px]">
                Cecilia Chapman711-2880 Nulla St.Mankato Mississippi 96522(257)
                563-7401
              </span>
            </div>
          </div>

          {/* 3 */}
          <div
            className="flex w-[331px] px-[19px] py-[13px] flex-col items-start gap-[10px] rounded-[10px] border-[1px] border-solid
          border-[#FFF]"
          >
            <div className="flex items-center gap-[78px]">
              <span className="findUsFont">Find us google map</span>
              <img src={arrow}></img>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="absolute">
          <img
            src={undrawPersonal}
            width={380}
            height={312}
            className="ml-[372px] mt-[487px]"
          ></img>
        </div>

        {/* contactUs Form */}
        <div className="ml-[787px] mt-[93px] mr-[94px] mb-[173px] w-[419px] h-[534px] rounded-[13px] bg-[#F9F9FB]">
          <div className="inline-flex flex-col items-start gap-[21px] ml-[35px] mt-[23px] mr-[34px] mb-[37px]">
            {/* Your name */}
            <div className="w-[350px] h-[76px] relative">
              <span className="formName absolute">Your Name</span>
              <span className="w-[350px] h-[47px] mt-[29px] rounded-[10px] border-[1px] border-solid border-[#45776b80] absolute">
                <span className="messagePlaceholder mt-[13px] ml-[32px] mr-[144px] absolute">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="bg-[#F9F9FB]"
                  ></input>
                </span>
              </span>
            </div>

            {/* Your Email Address */}
            <div className="w-[350px] h-[76px] relative">
              <span className="formName absolute">Your Email Address</span>
              <span className="w-[350px] h-[47px] mt-[29px] rounded-[10px] border-[1px] border-solid border-[#45776b80] absolute">
                <span className="messagePlaceholder mt-[13px] ml-[32px] mr-[144px] absolute">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="bg-[#F9F9FB]"
                  ></input>
                </span>
              </span>
            </div>

            {/* Message */}
            <div className="w-[350px] h-[76px] relative">
              <span className="formName absolute">Message</span>
              <span className="w-[350px] h-[181px] mt-[25px] flex items-start gap-[10px] rounded-[10px] border-[1px] border-solid border-[#45776b80] opacity-[0.5] absolute py-[13px] px-[32px]">
                <span className="messagePlaceholder  absolute">
                  <input
                    type="text"
                    placeholder="write your message"
                    className="bg-[#F9F9FB]"
                  ></input>
                </span>
              </span>
            </div>

            {/* send message button */}
            <div className="w-[350px] h-[49px] mt-[130px] flex py-[6px] px-[126px] items-start gap-[10px] rounded-[10px] bg-[#45776B] relative ">
              <button className="viewMoreFont">View more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

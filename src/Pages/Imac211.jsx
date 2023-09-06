import React from "react";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { MdLocationCity } from "react-icons/md";
import { MdOutlineEditLocation } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";

const Imac211 = () => {
  const [bimg, setBimg] = useState();
  const [pimg, setPimg] = useState();
  const [details, setDetails] = useState({
    name: "",
    mob: "",
    gender: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    language: "",
  });

  const handlebackground = (e) => {
    setBimg(URL.createObjectURL(e.target.files[0]));
    console.log("B");
  };
  const handleprofile = (e) => {
    setPimg(URL.createObjectURL(e.target.files[0]));
    console.log("P");
  };

  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details.name);
  };

  return (
    <>
      <div className=" shadow-lg rounded-lg md:m-20 pb-10">
        <div className=" w-full h-40 relative flex justify-center rounded-lg">
          <div className="flex bg-gray-300 justify-end w-full  h-32 rounded-lg">
            <div className="w-full  relative">
              {bimg ? (
                <img className="h-32 w-full" src={bimg} alt=""></img>
              ) : (
                <img src="" alt=""></img>
              )}
              <div className=" w-[30px] h-[30px] bg-[#E3E9EE] z-10 rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept=".jpg,.jpeg,.png"
                  onChange={handlebackground}
                />
                <label className="cursor-pointer" htmlFor="image">
                  <AiOutlineCamera className="cursor-pointer" />
                </label>
              </div>
            </div>
          </div>
          <div className=" absolute inset-0 flex justify-center items-center  mt-14">
            <div className=" flex justify-center h-32 w-32 bg-white shadow-lg rounded-full">
              <div className="  relative">
                {pimg ? (
                  <img
                    src={pimg}
                    className="h-32 w-32 rounded-full"
                    alt=""
                  ></img>
                ) : (
                  <CgProfile size={130} color="grey" />
                )}
                <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                  <input
                    type="file"
                    id="image1"
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleprofile}
                  />
                  <label className="cursor-pointer" htmlFor="image1">
                    <AiOutlineCamera className="cursor-pointer" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4">
          <center>
            <h2 className="text-3xl font-medium">Prince Yadav</h2>
            <h3 className="text-slate-600 font-medium">
              princekumaryadav09@gmail.com
            </h3>
          </center>
        </div>

        <form action="">
          <div className=" mx-20 mt-5 md:flex justify-between">
            <div className=" w-full md:me-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <GoPerson size={20} className="me-1" />
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <div className=" w-full md:ms-3 mt-5 md:mt-0">
              <label className="block">
                <span className=" text-sm font-medium text-cyan-700 flex ">
                  <GoPerson size={20} className="me-1" />
                  Mobile No.
                </span>
                <input
                  type="text"
                  name="mob"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className=" mx-20 mt-5 md:flex justify-between">
            <div className=" w-full md:me-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <GoPerson size={20} className="me-1" />
                  Gender
                </span>
                <input
                  type="text"
                  name="gender"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <div className=" w-full md:ms-3 mt-5 md:mt-0">
              <label className="block">
                <span className=" text-sm font-medium text-cyan-700 flex ">
                  <AiOutlineMail size={20} className="me-1" />
                  Email ID
                </span>
                <input
                  type="email"
                  name="email"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className=" mx-20 mt-5 md:flex justify-between">
            <div className=" w-full md:me-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <SlLocationPin size={20} className="me-1" />
                  State
                </span>
                <input
                  type="text"
                  name="state"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <div className=" w-full md:ms-3 mt-5 md:mt-0">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <MdLocationCity size={20} className="me-1" />
                  City
                </span>
                <input
                  type="text"
                  name="city"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className=" mx-20 mt-5 md:flex justify-between">
            <div className=" w-full md:me-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <MdOutlineEditLocation size={20} className="me-1" />
                  Pincode
                </span>
                <input
                  type="text"
                  name="pincode"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <div className=" w-full md:ms-3 mt-5 md:mt-0">
              <label className="block">
                <span className="text-sm font-medium text-cyan-700 flex ">
                  <TbLanguageHiragana size={20} className="me-1" />
                  Language
                </span>
                <input
                  type="text"
                  name="language"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className=" mx-20 mt-5 md:flex justify-between">
            <div className=" w-full md:me-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-cyan-700 flex ">
                  <MdOutlineEditLocation size={20} className="me-1" />
                  Pincode
                </span>
                <input
                  type="text"
                  name="pincode"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <div className=" w-full md:ms-3 mt-5 md:mt-0">
              <label className="block">
                <span className="text-sm font-medium text-cyan-700 flex ">
                  <TbLanguageHiragana size={20} className="me-1" />
                  Language
                </span>
                <input
                  type="text"
                  name="language"
                  onChange={handlechange}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <center>
            <button
              disabled={
                details.name.length < 3 ||
                details.gender.length < 3 ||
                details.state.length < 3 ||
                details.city.length < 3 ||
                details.pincode.length < 3
              }
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded mt-5 w-40"
            >
              Save
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Imac211;

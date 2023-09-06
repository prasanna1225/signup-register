import React from "react";
import tick from "../images/page26_27/tick.svg"
import hdfc from "../images/page26_27/hdfc.png"
import copy_icon from "../images/page26_27/copy_icon.svg";

const BreakDown1=()=>{
    return (
        <>
            <h1 className="text-[#8B8B8B] text-center text-xs my-6">View Coupons</h1>
            <div className='border border-gray-950 rounded-md my-4 py-2'>
            
            <div className="my-4">
              <p className='font-poppins font-bold text-sm mx-3 uppercase flex text-black my-1'>FIRST100 <a href="#"><img className="px-1" src={copy_icon} alt="copy" /></a> </p>
              <p className='font-poppins text-gray-600 text-[10px] mx-3'>Volutpat, nunc, odio id purus dictum diam neque, aenean et</p>
            </div>

            <div className="my-4">
              <p className='font-poppins font-bold text-sm mx-3 uppercase flex text-black my-1'>FAST50 <a href="#"><img className="px-1" src={copy_icon} alt="copy" /></a> </p>
              <p className='font-poppins text-gray-600 text-[10px] mx-3'>Volutpat, nunc, odio id purus dictum diam neque, aenean et</p>
            </div>
              
            </div>
        </>
    )
}

export default BreakDown1;
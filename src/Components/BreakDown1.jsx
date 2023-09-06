import React from "react";
import tick from "../images/page26_27/tick.svg"
import hdfc from "../images/page26_27/hdfc.png"

const BreakDown1=()=>{
    return (
        <>
            <div className='border border-gray-950 rounded-md my-4 py-2'>
              <p className='font-poppins font-bold text-xs mx-3'>15% OFF on First Order </p>
              <p className='font-poppins text-gray-600 text-[9.541px] mx-3'>valid on orders items worth Rs 999</p>
              <hr className='mx-2 my-1 mb-2'/>
              
              <div className='flex justify-between items-center mx-3 my-2'>
                <div className='text-xs border bg-gray-300 p-1 rounded-lg border-green-800 border-1 tracking-[5.168px]'>
                PSAZADI15
                </div>
                <a href="#" className='font-poppins text-xs text-cyan-500 uppercase'>
                  Apply
                </a>
              </div>
            </div>

            <div className='border border-gray-950 rounded-md my-4 py-2 bg-[#E8F7FF]'>
              <img className='mx-3' src={hdfc} alt="bank coupons" />
              <p className='font-poppins font-bold text-xs mx-3'>10% OFF using HDFC Bank Credit /Debit Card </p>
              <p className='font-poppins text-gray-600 text-[9.541px] mx-3'>valid on orders items worth Rs 999</p>
              <hr className='mx-2 my-1 mb-2'/>
              
              <div className='flex justify-between items-center mx-3 my-2'>
                <div className='text-xs border bg-gray-300 p-1 rounded-lg border-green-800 border-1 tracking-[5.168px]'>
                HDFC10
                </div>
                <a href="#" className='font-poppins text-xs text-[#CB8461] flex'>
                  Applied
                  <img className='mx-2' src={tick} alt="applied" />
                </a>
              </div>
            </div>
        </>
    )
}

export default BreakDown1;
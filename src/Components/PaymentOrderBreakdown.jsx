import React from "react";
import coupon from "../images/page26_27/coupons.svg"
import BreakDown1 from "./BreakDown1";
import BreakDown2 from "./BreakDown2";

const PaymentOrderBreakdown=(props)=>{
    return (
          <div className='right order-Breakdown mx-10 my-auto w-80'>
            <h1 className='text-center font-medium text-2xl my-4 font-poppins'>Order Breakdown</h1>
            <div className='flex my-3'>
              <img src={coupon} className='mx-2' alt="coupons" />
              <span className='font-poppins text-base text-blue-950'>Apply Coupon</span>
              <a className='font-poppins text-xs text-blue-950 self-center ml-20 font-medium' href="#">View Coupons</a>
            </div>
            <div className='flex border border-gray-950 rounded-md my-2 py-2'>
              <input type="text" className='font-poppins text-center text-sm outline-none pr-14' placeholder='Enter 6 digit code'/>
              <button className='font-poppins bg-[#215D4F] text-white px-3 py-1 rounded-md'>Verify</button>
            </div>
            {(props.type==1)?<BreakDown1/>:<BreakDown2/>}

            <div className='mx-3'>
              <div className='total flex justify-between'>
                <p className='uppercase font-poppins text-[#054871] text-base'>Total</p>
                <p className='font-poppins text-[#054871] text-base'><span>₹</span>613.2</p>
              </div>
              <p className='font-poppins text-xs text-[#CB8461]'>Your Savings: Rs. 250 (-20%)</p>
            </div>
            <hr className='mx-4 my-3 mb-2'/>
            <div className='flex justify-center items-center my-3'>
              <button className='font-poppins bg-[#215D4F] text-white mx-3 py-2 rounded-md w-full'>Make Payment</button>
            </div>

            <div className='text-center mt-40 flex flex-col'>
              <a href='#' className='font-poppins text-xs text-[#CB8461]'>Facing Problems?</a>
              <a href='#' className='font-poppins text-base text-blue-950'>Contact Us</a>
            </div>
          </div>
    )
}

export default PaymentOrderBreakdown;
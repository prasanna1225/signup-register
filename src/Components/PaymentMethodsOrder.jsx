import React from "react";
import upi from "../images/page26_27/UPI.svg";
import creditCard from "../images/page26_27/credit-card.svg";
import wallet from "../images/page26_27/wallet.svg";
import netBanking from "../images/page26_27/net-banking.svg";

const PaymentMethodsOrder=()=>{
    return (
        <div className='left Pay-Meth mx-10 w-[540px] mr-32'>
          <h1 className='text-start font-semibold text-2xl -my-1 font-poppins'>Payment Methods</h1>
          <p className='font-poppins mt-10 text-gray-600 text-xs'>Ut non tempor sit facilisi pretium enim eu pharetra, netus elementum massa malesuada cursus sit in urna blandit viverra at vel, massa dignissim nam et</p>
          <div className='radio-btns'>
            <div className="radio flex items-center">
              <input id='upi' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={upi} alt="upi" />
              <label className='text-xl text-blue-950'>UPI Payment</label>
            </div>        
            <div className="radio flex items-center">
              <input id='credit-debit' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={creditCard} alt="Credit / Debit Card" />
              <label className='text-xl text-blue-950'>Credit / Debit Card</label>
            </div>        
            <div className="radio flex items-center">
              <input id='net-banking' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={netBanking} alt="net-banking" />
              <label className='text-xl text-blue-950'>Net Banking</label>
            </div>        
            <div className="radio flex items-center">
              <input id='wallet' type="radio" className='w-4 h-4 border accent-green-900 my-10 mr-3'/>
              <img src={wallet} alt="wallet" />
              <label className='text-xl text-blue-950'>Wallet</label>
            </div>        
          </div>
        </div>
    )
}

export default PaymentMethodsOrder;
import React from 'react';
import arrow from "../images/page26_27/arrow.svg"
import person from "../images/page26_27/person.svg"
import PaymentOrderBreakdown from '../Components/PaymentOrderBreakdown';
import PaymentMethodsOrder from '../Components/PaymentMethodsOrder';



const Page26 = (props) => {
  return (
    <div className='flex h-[920px] justify-center items-center flex-wrap'>
        <div className='flex'>
          <div className='image'>
            <img src={arrow}/>
          </div>
          <PaymentMethodsOrder/>
          <div className='mt-10 v-line w-[3px] h-[484.037px] bg-light-grey'></div>
          <PaymentOrderBreakdown type={props.type}/>
        </div>
        <div className='absolute bottom-0 left-0'>
          <img className='w-[1100px]' src={person} alt="person" />
        </div>
    </div>
  );
};

export default Page26;
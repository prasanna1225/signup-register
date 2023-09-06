import React from 'react'
import Phone from '../images/page20/still-unsure-phone.png'
import FormModal from './FormModal'

const inputStyle = "border-2 border-light-grey py-3 pl-5 rounded-lg w-1/2 max-sm:w-full"

const StillUnsureForm = () => {
  return (
    <div className='bg-slate-green rounded-3xl w-10/12 max-sm:w-11/12 mx-auto'>
      <div className='flex max-lg:flex-col justify-center align-middle mx-auto w-full  px-9 max-sm:px-3 py-16 mt-5  gap-6 max-w-7xl'>
        <div className='h-full px-9 my-auto flex justify-end align-middle w-1/2 max-lg:w-full'>
          <div className='flex flex-col  gap-7'>
            <div className='text-5xl text-white font-semibold max-sm:text-3xl'>Still unsure about the course ?</div>
            <div className='text-2xl text-white max-sm:text-xl'>Get a free counselling session from our Experts</div>
            <div className='flex gap-4 text-center'>
              <img src={Phone} alt="phone_icon" />
              <div className='text-white text-4xl max-sm:text-xl max-sm:font-bold'>+91 8989899899</div>
            </div>
          </div>
        </div>
        <div className='h-full flex max-lg:w-full w-1/2 max-lg:content center'>
          <div className='flex flex-col gap-5 w-11/12 max-sm:w-full max-sm:mx-0 max-sm:px-2 mx-auto bg-white rounded-3xl max-lg:px-6 lg:px-12 pt-12'>
            <div className='flex max-sm:flex-col gap-9 w-full max-w-lg max-lg:mx-auto'>
              <input placeholder='Full name' className={`${inputStyle}`} />
              <input placeholder='Email address ' className={`${inputStyle}`} />
            </div>
            <div className='flex max-sm:flex-col gap-9 w-full max-w-lg max-lg:mx-auto'>
              <input placeholder='Contact Number' className={`${inputStyle}`} />
              <input placeholder='Graduation Year' className={`${inputStyle}`} />
            </div>
            <div className='flex w-full max-w-lg max-lg:mx-auto'>
              <input placeholder='Describe your problem' type='text' className={`${inputStyle} w-full max-w-lg min-h-[100px]`} />
            </div>
            <div className='flex justify-center w-full py-5'>
              <button className='w-9/12 max-sm:w-full p-1 h-8 rounded-md bg-slate-green font-medium text-white'>Request for counselling</button>
            </div>
            {/* <FormModal /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StillUnsureForm

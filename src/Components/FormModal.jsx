import React from 'react'
import submitted from '../images/page20/form-submitted.svg'

// Frame 1000001271
const FormModal = () => {
  let modalStyle = 'fixed w-screen h-screen top-0 left-0 flex justify-center items-center';
  
  return (
    <div className={modalStyle} id='modal-screen'>
      <div className='flex flex-col bg-[#EFF7FF] px-8 rounded-xl max-w-md max-h-[280px]'>
        <div className='flex justify-center'>
          <img src={submitted} alt="form-submitted-tick" />
        </div>
        <div className='text-center text-[#054871] font-semibold'>
          Form submitted Successfully
        </div>
        <div className='text-center text-[#054871] py-6'>
          Our Team support will get back to you
        </div>

        <div className='flex justify-center mb-6'>
          <button className='text-slate-green border-2 border-slate-green rounded-md px-4 py-2'>Go back to home</button>
        </div>
      </div>
    </div>
  )
}

export default FormModal

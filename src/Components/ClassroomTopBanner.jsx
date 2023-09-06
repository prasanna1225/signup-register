import React from 'react'
import '../CSS/ClassroomTopBanner.css'

const ClassroomTopBanner = ({ heading, description, image }) => {
  return (
    <div className='banner flex  py-7 px-5 justify-between mt-5 w-full'>
      <div className='flex flex-col justify-center py-10'>
        <div className='text-white text-3xl font-semibold'>{heading}</div>
        <div className='text-white text-lg'>{description}</div>
      </div>
      <div className='max-sm:w-0'>
        <img src={image} alt="banner_image" className='sm:min-w-[150px] max-sm:w-0' />
      </div>
    </div>
  )
}

export default ClassroomTopBanner

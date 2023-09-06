import React from 'react'
import placement from '../images/page65/placement.svg'

const SubmitPlacement = () => {
  return (
    <div className='flex max-sm:flex-col w-full justify-between bg-slate-green rounded-2xl mt-5 py-3 px-4'>
      <div className='flex w-4/6 max-sm:w-full items-center gap-3 max-sm:justify-center max-sm:mb-4'>
        <img src={placement} alt="placement" />
        <div className='text-white '>Share your placement with us</div>
      </div>
      <div className='flex w-2/6 max-sm:w-full max-sm:justify-center justify-end'>
        <button className='bg-white text-slate-green font-semibold py-3 px-5 rounded-xl'>Submit Placement Details</button>
      </div>
    </div>
  )
}

const PlacementStats = () => {
  return (
    <div className='w-full'>
      <SubmitPlacement/>
    </div>
  )
}

export default PlacementStats

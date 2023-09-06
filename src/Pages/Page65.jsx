import React from 'react'
import ClassroomTopBanner from '../Components/ClassroomTopBanner'
import companies from '../images/page65/companies.svg'
import PlacementStats from '../Components/PlacementStats'


const Page65 = () => {
  let heading = "Placed Edflinger";
  let description = "Students who have pursued this course have managed to bag a job at reputed tech companies and emerging startups";
  return (
    <div className='w-11/12 mx-auto'>
      <ClassroomTopBanner heading={heading} description={description} image={companies}/>
      <PlacementStats/>
    </div>
  )
}

export default Page65

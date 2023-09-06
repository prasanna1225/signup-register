import React from 'react'
import '../CSS/courseguides.css'
import ProfileImage from '../images/page20/course-guide-avatar.png'

const details = {
  name: "Smit Thakkar",
  experience: "10+ yr in python & ML",
  workedAt: "Ex-Google, Ex-Amazon",
  courses: 23
}

const CourseGuides = () => {
  return (
    <div className='mt-5 w-10/12 max-sm:w-screen mx-auto'>
      <div className="hexagon-background max-sm:w-screen mx-auto bg-cover bg-no-repeat bg-top py-16 px-16 max-sm:px-7">
        <div className='flex flex-col max-w-screen-xl mx-auto'>
          <h3 className='text-4xl font-semibold text-center text-raw-sienna '>Course Guides</h3>
          <div className='text-2xl text-center text-white'>Meet the team that is invested in your success throughout your journey with us</div>
          <div className='flex flex-col'>
            <div className='flex flex-row max-lg:flex-col flex-warp align-middle mt-10'>
              <div className='text-2xl font-medium text-white sm:mx-4 max-lg:py-3 lg:mt-[75px] text-center lg:max-w-[150px]'>Faculties</div>
              <div className='flex flex-row max-md:flex-col max-lg:justify-center max-md:align-middle flex-wrap gap-2'>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px] '>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px] '>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px]'>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row max-lg:flex-col flex-warp align-middle mt-10'>
              <div className='text-2xl font-medium text-white sm:mx-4 max-lg:py-3 lg:mt-[75px]  text-center lg:max-w-[150px]'>Teaching
                Assistant</div>
              <div className='flex flex-row max-md:flex-col max-lg:justify-center max-md:align-middle flex-wrap gap-2'>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px] '>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px] '>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row max-lg:flex-col flex-warp align-middle mt-10'>
              <div className='text-2xl font-medium text-white sm:mx-4 max-lg:py-3 lg:mt-[75px]  text-center lg:max-w-[150px]'>Placement
                Coach</div>
              <div className='flex flex-row max-md:flex-col max-lg:justify-center max-md:align-middle flex-wrap gap-2'>
                <div className='flex flex-col bg-white rounded-2xl py-6 px-16 min-w-[300px] '>
                  <div className='flex justify-center w-full'>
                    <img className='w-[80px] h-[80px]' src={ProfileImage} alt="profile_image" />
                  </div>
                  <div className='text-slate-green text-2xl text-center font-medium'>
                    {details.name}
                  </div>
                  <div className='text-lg text-center'>
                    {details.experience}
                  </div>
                  <div className='text-sm text-center'>
                    {details.workedAt}
                  </div>
                  <div className='text-slate-green text-center text-lg font-medium'>
                    {details.courses}+ Course Enrolled
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseGuides

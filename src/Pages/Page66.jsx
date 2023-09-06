import React from 'react'
import ClassroomTopBanner from '../Components/ClassroomTopBanner'
import bookmark from '../images/page66/bookmark.svg'


const Page66 = () => {
  let heading = "Bookmarks"
  let description = "Keep Revising important concepts anytime by revisiting your bookmarks"
  return (
    <div className='w-11/12 mx-auto'>
      <ClassroomTopBanner heading={heading} description={description} image={bookmark}/>
    </div>
  )
}

export default Page66

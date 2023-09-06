import React, { useState } from 'react'
// import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import NavSub from '../Components/NavSub'
import CourseMain from '../Components/CourseMain'
import menuicon from '../images/page57-61/menuicon.svg'


const Page57 = () => {
  const [viewbar,setViewbar] = useState("hidden")
  const [viewcontent,setViewcontent] = useState("")
  const slide = () =>{
    if(viewbar === ""){
      setViewbar("hidden")
      setViewcontent("")
    }else{
      setViewbar("")
      setViewcontent("hidden")
    }
  }

  return (
    <>
        <div className='h-8 w-full md:hidden'><button onClick={(e)=>slide()}><img src={menuicon} className='h-6 w-6 pl-1 pt-1'/></button></div>
    <main className={` md:my-4 flex h-auto justify-center `}>
        <div className={`w-auto h-auto ${viewbar} md:block`}>  
        <SideBar/>
        </div>
        <div className={`md:w-9/12 mx-2 h-auto box-border ${viewcontent} md:block`}>
          <NavSub/>
          <CourseMain/>
        </div>
    </main>
    </>
  )
}

export default Page57

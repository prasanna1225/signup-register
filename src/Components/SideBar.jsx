import React from "react";
import Ellipse from "../images/page57-61/Ellipse217.svg";
import ContactCard from "../images/page57-61/ContactCard.svg";
import Arrow from "../images/page57-61/Arrow.svg";
import LeaderBoard from "../images/page57-61/LeaderBoard.svg";
import Pause from "../images/page57-61/Pause.svg";
import Placed from "../images/page57-61/Placed.svg";
import Doubts from "../images/page57-61/Doubts.svg";
import Events from "../images/page57-61/Events.svg";
import Notes from "../images/page57-61/Notes.svg";
import Certificate from "../images/page57-61/Certificate.svg";
import SideBarBottom1 from "../images/page57-61/SideBarBottom1.png";
import SideBarBottom2 from "../images/page57-61/SideBarBottom2.png";
import "../CSS/SideBar.css";

const SideBar = () => {
  return (
    <>
      <aside className='w-full h-full relative' style={{background:'#215D4F'}}>
        <div className='flex pt-4'>
        <img src={Ellipse} className='relative left-4 h-14 w-14 opacity-60' alt='ellipse'/>
        <img src={Ellipse} className=' relative -left-2 w-14 h-14 opacity-60' alt='ellipse'/>
        <h1 className='relative -left-20 top-3 font-medium text-2xl decoration-white' >My Classroom</h1>
        </div>
        <div className='flex'>
            <img src={ContactCard} className='relative left-4 pt-4' alt='contactcard'/>
            <h2 className='font-sans font-normal text-lg decoration-white relative left-6 pt-4'>Courses</h2>
        </div>
        <div className='flex'>
        <img src={Arrow} className='relative left-6 -top-1' alt='arrow'/>
        <h2 className='font-sans font-normal text-lg decoration-yellow relative left-8 pt-2'>Graphic Design Course</h2>
        </div>
        <ul className="pl-10 pt-2">
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4">
            Lesson - 1
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 2
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 3
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 4
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 5
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 6
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 7
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 8
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 9
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 10
          </li>
          <li className="w-2/3 bg-white h-22 rounded text-center decoration-green font-sans font-normal mx-2 my-4 opacity-40">
            Lesson - 11
          </li>
        </ul>
        <ul className="pl-10 py-4">
          <li className="flex mx-2 my-4">
            <img src={LeaderBoard} alt="LeaderBoard" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Leaderboard
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Pause} alt="pause" />
            <img src={Pause} alt="pause" className="m-1" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Course Pause
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Doubts} alt="Doubts" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Ask Doubts
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Events} alt="Events" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Events
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Notes} alt="Notes" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Notes
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Certificate} alt="Certificate" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Certificate
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Placed} alt="Placed" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Placed Edflinger
            </h3>
          </li>
        </ul>
        <div className='bottom-0 absolute'>
        <img src={SideBarBottom1} className='relative -bottom-48' alt='design'/>
        <img src={SideBarBottom2} className='relative bottom-0' alt='design2'/>
        </div>
      </aside>
    </>
  )
}

export default SideBar

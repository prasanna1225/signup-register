import React, { useState } from 'react'
import '../CSS/SideBar.css'
import Download from '../images/page57-61/Download.svg'
import Dropdown from '../images/page57-61/Dropdown.svg'
const NavSub = () => {
  
  const [viewlist,setViewlist] = useState("block");

  const viewNav=()=>{
    if(viewlist === "block"){
      setViewlist("hidden")
    }else{
      setViewlist("block")
    }  
  }
  
  return (
    <nav className='w-full grid rounded' style={{background:'#215D4F'}}>
      <ul className='inline-block'>
        <ul className='float-left hidden md:flex'>
        <li className='md:mx-4 md:my-5 font-sans font-normal md:text-lg decoration-white'>Ask your Doubt</li>
        <li className='md:mx-4 md:my-5 font-sans font-normal md:text-lg decoration-white'>Watch Hint Video</li>
        <li className='md:mx-4 md:my-5 font-sans font-normal md:text-lg decoration-white'>Watch Later</li>
        </ul>
        <ul className='flex float-right'>
        <li className='mx-2 my-4 font-sans font-normal text-lg decoration-white hidden xl:flex'>Download Notes</li>
        <li><img src={Download} alt='Download' className='mx-4 my-6 right-0'/></li>
        <li><button onClick={(e)=>viewNav()}><img src={Dropdown} alt='dropdown' className='mr-4 my-6 right-0 h-4 w-6 xl:hidden'/></button></li>
        </ul>
      </ul>
      <ul className={`grid justify-items-center ${viewlist} xl:hidden`}>
        <li className='my-2 hover:opacity-60 font-sans font-normal md:text-lg decoration-white'>Ask your Doubt</li>
        <li className='my-2 hover:opacity-60 font-sans font-normal md:text-lg decoration-white'>Watch Hint Video</li>
        <li className='my-2 hover:opacity-60 font-sans font-normal md:text-lg decoration-white'>Watch Later</li>
        <li className='my-2 hover:opacity-60 font-sans font-normal md:text-lg decoration-white'>Download Notes</li>
        </ul>
    </nav>
  )
}

export default NavSub

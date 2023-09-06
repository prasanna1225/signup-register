import React from 'react'
import Group18 from '../images/page57-61/Group 18.svg'
import Twitter from '../images/page57-61/Twitter.svg'
import Telegram from '../images/page57-61/Telegram.svg'
import Meta from '../images/page57-61/Meta.svg'
import Facebook from '../images/page57-61/Facebook.svg'
import Linkedin from '../images/page57-61/Linkedin.svg'

const PageEnd = () => {
  return (
    <footer>
    <div className='decoration-grey pb-4'>
    <section className='flex justify-center'>
        <img src={Group18} className='logo' alt='logo'/>
        <p>
            <h1 className='name font-sans font-medium text-lg'>Edfling Courses</h1>
            <p className='opacity-60 text-xs ml-10'>Success is here!!!</p>
        </p>
    </section>
    <div className='mx-20 flex text-center'>
        <ul className='w-1/5' >
            <li className='name font-sans font-bold text-xl my-2'>About</li>
            <li className='font-medium font-sans opacity-50 my-2'>Overview</li>
            <li className='font-medium font-sans opacity-50 my-2'>Courses</li>
            <li className='font-medium font-sans opacity-50 my-2'>Tutorials</li>
            <li className='font-medium font-sans opacity-50 my-2'>Pricing Plan</li>
            <li className='font-medium font-sans opacity-50 my-2'>Releases</li>
        </ul>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.20)', width:'1.5px', height:'150px', marginTop:'60px'}}></div>
        <ul className=' w-1/5' >
            <li className='name font-sans font-bold text-xl my-2'>Company</li>
            <li className='font-medium font-sans opacity-50 my-2'>About us </li>
            <li className='font-medium font-sans opacity-50 my-2'>Careers</li>
            <li className='font-medium font-sans opacity-50 my-2'>Press</li>
            <li className='font-medium font-sans opacity-50 my-2'>Media Kits</li>
            <li className='font-medium font-sans opacity-50 my-2'>Contact us</li>
        </ul>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.20)', width:'1.5px', height:'150px', marginTop:'60px'}}></div>
        <ul className=' w-1/5' >
            <li className='name font-sans font-bold text-xl my-2'>Resources</li>
            <li className='font-medium font-sans opacity-50 my-2'>Blog</li>
            <li className='font-medium font-sans opacity-50 my-2'>Newsletter</li>
            <li className='font-medium font-sans opacity-50 my-2'>Events</li>
            <li className='font-medium font-sans opacity-50 my-2'>Help-Center</li>
            <li className='font-medium font-sans opacity-50 my-2'>Tutorials</li>
        </ul>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.20)', width:'1.5px', height:'150px', marginTop:'60px'}}></div>
        <ul className=' w-1/5' >
            <li className='name font-sans font-bold text-xl my-2'>Social</li>
            <li className='font-medium font-sans opacity-50 my-2'>Twitter</li>
            <li className='font-medium font-sans opacity-50 my-2'>LinkedIn</li>
            <li className='font-medium font-sans opacity-50 my-2'>Facebook</li>
            <li className='font-medium font-sans opacity-50 my-2'>Discord</li>
            <li className='font-medium font-sans opacity-50 my-2'>Instagram</li>
        </ul>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.20)', width:'1.5px', height:'150px', marginTop:'60px'}}></div>
        <ul className='w-1/5'>
            <li className='name font-sans font-bold text-xl my-2'>Legal</li>
            <li className='font-medium font-sans opacity-50 my-2'>Terms</li>
            <li className='font-medium font-sans opacity-50 my-2'>Privacy</li>
            <li className='font-medium font-sans opacity-50 my-2'>Cookies</li>
            <li className='font-medium font-sans opacity-50 my-2'>Licenses</li>
            <li className='font-medium font-sans opacity-50 my-2'>Contact</li>
        </ul>
    </div>
    </div>
    <div>
    <div className='w-full grid' style={{background:'#215D4F'}}>
      <ul className='inline-block'>
        <ul className='flex float-left'>
        <li className='mx-8 my-4 font-sans font-normal text-sm decoration-white'>@2022-2023 Copyright Edfling.com All Rights Reserved</li>
        </ul>
        <ul className='flex float-right mr-4'>
            <li><img src={Twitter} className='my-4 mx-2 h-6 w-6'  alt='Twitter'/></li>
            <li><img src={Meta} className='my-4 mx-2 h-6 w-6' alt='Meta'/></li>
            <li><img src={Facebook} className='my-4 mx-2 h-6 w-6' alt='Facebook'/></li>
            <li><img src={Linkedin} className='my-4 mx-2 h-6 w-6' alt='Linkedin'/></li>
            <li><img src={Telegram} className='my-4 mx-2 h-6 w-6' alt='Telegram'/></li>
        </ul>
      </ul>
    </div>
    </div>
    </footer>
  )
}

export default PageEnd

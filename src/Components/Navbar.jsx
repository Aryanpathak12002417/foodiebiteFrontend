import React from 'react'
import logo from '../Images/logo2.png'
import profile from '../Images/profile.jpg'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 shadow-md border-b-[1.5px]'>
        <div className='flex justify-center items-center'>
          <img className='h-14 w-14' src={logo}/>
          <span className='font-jernin text-xl font-medium pl-2'>Foodie Byte</span>
        </div>
        <div className=' hidden md:block'>
          <ul className='flex'>
            <li className='mx-4 lg:mx-6 font-jernin md:text-md lg:text-lg font-medium cursor-pointer'>Home</li>
            <li className='mx-4 lg:mx-6 font-jernin md:text-md lg:text-lg font-medium cursor-pointer'>Dashboard</li>
            <li className='mx-4 lg:mx-6 font-jernin md:text-md lg:text-lg font-medium cursor-pointer'>Pricing</li>
            <li className='mx-4 lg:mx-6 font-jernin md:text-md lg:text-lg font-medium cursor-pointer'>About us</li>
          </ul>
        </div>
        <div className='flex'>
          <span className='p-2 lg:p-2 font-jernin font-medium cursor-pointer text-md mx-2 rounded-md'>Sign in</span>
          <span className='p-2 lg:p-2 font-jernin font-medium cursor-pointer text-white text-md bg-[#FF3131] mx-2 rounded-md'>Sign up</span>
        </div>
        <div className='hidden'>
          <span className=' mr-5'>
            <img className='h-12 w-12 rounded-full' src={profile} alt="" />
          </span>
        </div>
    </div>
  )
}

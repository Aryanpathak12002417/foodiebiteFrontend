import React from 'react'
import Navbar from './Navbar.jsx'
import deliveryBoy from '../Images/Deliveryboy.webp'
import profile from '../Images/profile.webp'
import profile1 from '../Images/reviewImg1.jpg'
import profile2 from '../Images/reviewImg2.webp'
import profile3 from '../Images/reviewImg3.webp'
import star from '../Images/star.png'


export default function Hero() {
  return (
    <div className='md:h-screen flex flex-col'>
        <Navbar/>
        <div className='grid md:grid-cols-2 md:relative md:grow overflow-x-hidden'>
                <div className='mt-8 md:mt-0 flex justify-center items-center px-3'>
                    <div className='flex flex-col px-5 md:px-0 md:max-w-[70%] text-gray-900'>
                        <div className='text-4xl md:text-6xl font-jernin font-bold'>Get Your <span className='text-[#FF3131]'>Daily</span> Meals Delivered On Time</div>
                        <div className='text-gray-600 mt-6 font-jernin font-medium'>
                        Delight in daily doorstep meals. Fresh, varied, and hassle-free. Enjoy delicious, healthy options tailored to your taste. Order now for a stress-free dining experience.
                        </div>
                        <div className='mt-20'>
                            <span className='py-2 px-8 mr-2 md:py-3 md:px-12 md:mr-5 bg-[#FF3131] text-white rounded-2xl cursor-pointer'>Order Now</span>
                            <span className='hidden md:blockpy-2 px-8 md:py-3 md:px-12 md:mr-5 border hover:bg-slate-900 hover:text-white transition-colors cursor-pointer border-slate-900 text-black rounded-2xl'>Know Us</span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex relative justify-center items-center mt-8 md:mt-0'>

                    <div className='bg-[#ffffffd8] border-2 border-b-[#f4f4f4] shadow-lg font-jernin rounded-xl cursor-pointer py-3 px-4 absolute top-[85px] right-[90px] flex justify-center items-center hover:scale-125'>
                        <div>
                            <div className='text-md font-bold mr-2'>John Smith</div>
                            <div className='text-xs font-medium'>Delivery boy</div>
                        </div>
                        <div>
                            <img className='h-12 w-12 object-cover rounded-full border-[3px] border-[#FF3131]' src={profile}/>
                        </div>
                    </div>

                    {/* Blur effect ki koshish*/}
                    {/* <div className='h-10 bg-[#fffbfb] bac blur-sm w-full absolute bottom-0 z-30 opacity-35 drop-shadow-2xl'></div> */}


                    <div className='bg-[#fff] border-2 border-[#e5e3e36a] shadow-xl font-jernin rounded-xl py-3 px-4 absolute bottom-[75px] z-20 left-[-27px] hidden md:flex flex-col justify-center items-center'>
                        <div className='flex h-30 '>
                            <img className='h-12 w-12 object-cover rounded-full border-[3px] border-[#FF3131]' src={profile}/>
                            <img className='h-12 w-12 object-cover rounded-full border-[3px] border-[#31a6ff]' src={profile2}/>
                            <img className='h-12 w-12 object-cover rounded-full border-[3px] border-[#31ff42]' src={profile3}/>
                            <img className='h-12 w-12 object-cover rounded-full border-[3px] border-[#fff531]' src={profile1}/>
                        </div>
                        <h3 className='font-semibold text-md mt-2'>Our Happy Customer</h3>
                        <div className='flex justify-center items-center mt-2'>
                            <img className='h-4 w-4 mr-1' src={star}/>
                            <img className='h-4 w-4 mr-1' src={star}/>
                            <img className='h-4 w-4 mr-1' src={star}/>
                            <span className='font-bold'>4.5 <span className='text-sm font-medium'>(12.k reviews)</span></span>
                        </div>
                    </div>

                    {/* <div className='absolute bottom-1'>
                        <img src={deliveryBoy} className='object-scale-down'/>
                    </div> */}
                    <img src={deliveryBoy} className='h-[70vh] absolute object-contain scale-125 z-10'/>
                    
                </div>
        </div>
    </div>
  )
}

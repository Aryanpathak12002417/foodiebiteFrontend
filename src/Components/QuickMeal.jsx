import React, { useEffect, useState } from 'react'
import veg1 from '../Images/veg1.jpg'
import veg2 from '../Images/veg2.jpg'
import veg3 from '../Images/veg3.jpg'
import veg4 from '../Images/veg4.jpg'
import veg5 from '../Images/veg5.jpg'
import bgImage1 from '../Images/bgFood1.png'
import Slider from './slider/Slider'

export default function QuickMeal() {

    const images=[
        {imageUrl:veg1},
        {imageUrl:veg2},
        {imageUrl:veg3},
        {imageUrl:veg4},
        {imageUrl:veg5},
    ]

    useEffect(()=>{
        const timer=setInterval(() => {
            setCurrentIndex((prev)=>{
                return (prev+1)%images.length
            })
        }, 3000);

        return ()=>{
            clearInterval(timer)
        }
    })

    const [currentIndex,setCurrentIndex]=useState(0);
    const renderImages = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const nextIndex = (currentIndex + 1) % images.length;
    
        return (
          <>
            <img src={images[prevIndex].imageUrl} className=' shadow-2xl transition ease-in-out md:h-64 w-48 m-2 object-cover rounded-2xl bg-red-600'/>
            <img src={images[currentIndex].imageUrl} className=' shadow-2xl transform  md:h-96 w-72 m-2 object-cover rounded-2xl bg-green-600'/>
            <img src= {images[nextIndex].imageUrl} className=' shadow-2xl transform md:h-64 w-48 m-2 object-cover rounded-2xl bg-blue-600'/>
          </>
        );
      };

  return (
    <section className='h-screen flex flex-col items-center bg-[#f5f8fbbd] relative'>
        <div className='absolute top-14 right-10 opacity-70'>
            <img src={bgImage1} className='object-contain h-32 w-32 transparent-bg rotate-[20deg]'/>
        </div>  
        <div className='absolute bottom-10 left-10 opacity-50'>
            <img src={bgImage1} className='object-contain h-32 w-32 transparent-bg -rotate-[20deg]'/>
        </div>
            <div className='grid md:grid-cols-2 grow overflow-x-hidden mt-10'>
                <div className='flex justify-center items-center overflow-hidden'>
                    {/* {renderImages()} */}
                    {<Slider/>}
                </div>
                <div className='flex justify-center flex-col pl-8 '>
                    <h3 className='text-6xl font-jernin text-gray-900 font-bold'>Today's <span className='text-[#FF3131]'>Dilicous</span> Meals for your plate</h3>
                    <div className='md:max-w-md mt-10 font-jernin text-gray-600'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, facilis fugiat maxime repellendus neque veritatis tempora excepturi! Sunt necessitatibus iure sed officiis facere, atque nobis natus.</p>
                    </div>
                    <span className='mt-6 py-2 px-4 md:max-w-[120px] bg-[#FF3131] text-white rounded-2xl cursor-pointer'>Order Now</span>
                </div>
        </div>
    </section>  
  )
}

import React,{useEffect, useState} from 'react'
import bgImage from '../Images/Deliveryboy.webp'

export default function Tutorial() {

  const [index,setIndex]=useState(0)

  useEffect(()=>{

    const timer=setInterval(()=>{
        setIndex((prevState)=>(prevState+1)%4)
    },3000)

    return ()=>{
      clearInterval(timer)
    }

  })

  
  return (
    <div className='p-10'>
      <div className='flex flex-col items-center font-jernin'>
        <h6 className='text-slate-900 font-medium'        >How to order</h6>
        <h2 className='text-5xl font-bold'>It's really <span className='text-[#FF3131]'>Simple </span> with Foodie Bite</h2>
      </div>
      <div className='grid grid-cols-2 mt-20'>
        <div className='flex justify-center'>
          <div className='h-[65vh] w-[340px] border-[10px] border-b-0 rounded-md border-[#FF3131]'>
            
          </div>
        </div>
        <div className='p-10'>
            
            <div className='flex w-96'>
              <span className='p-3 text-xl'>1.</span>
              <div className={`p-3 pr-6 transition-all ${index==0? 'border-r-[10px] border-r-[#FF3131]':'border-9'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Create Your Account</h4>
                <span classname='hidden'>Create your account and login to foodie bite website.</span>
              </div>
            </div>

            <div className='flex w-96'>
              <span className='p-3 text-xl'>2.</span>
              <div className={`p-3 pr-6 transition-all ${index==1? 'border-r-[10px] border-r-[#FF3131]':'border-9'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Choose Your Meal Pain</h4>
                <span classname='hidden'>We offer range of different plains.Choose any one of them.</span>
              </div>
            </div>

            <div className='flex w-96'>
              <span className='p-3 text-xl'>3.</span>
              <div className={`p-3 pr-6 transition-all ${index==2? 'border-r-[10px] border-r-[#FF3131]':'border-9'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Explore Dashboard</h4>
                <span classname='hidden'>Select dish that you want to eat from Dashboard</span>
              </div>
            </div>

            <div className='flex w-96'>
              <span className='p-3 text-xl'>4.</span>
              <div className={`p-3 pr-6 transition-all ${index==3? 'border-r-[10px] border-r-[#FF3131]':'border-9'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Get Refund</h4>
                <span classname='hidden'>The cancel meal amount will be credited to your account at the end of the month.</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

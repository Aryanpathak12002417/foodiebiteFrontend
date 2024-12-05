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
    <div className='p-10 bg-[#FFFFF0]'>
      <div className='flex flex-col items-center font-jernin relative'>
      <div className='absolute hidden md:block left-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" fill="#FF3131">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"/>
              </g>
          </svg>
         </div> 
        <h6 className='text-slate-900 font-medium'>How to order</h6>
        <h2 className='text-5xl font-bold'>It's really <span className='text-[#FF3131]'>Simple </span> with Foodie Bite</h2>
      </div>
      <div className='grid md:grid-cols-2 mt-20'>
        <div className='flex justify-center border-b-2 border-[#FF3131]'>
          <div className='hidden md:block h-[420px] w-[340px] border-[10px] border-b-0 rounded-md border-[#FF3131]'>
            
          </div>
        </div>
        <div className='p-1'>
            
            <div className='flex md:w-96'>
              <span className='p-3 text-xl'>1.</span>
              <div className={`p-3 pr-6 transition-all ${index==0? 'border-r-[10px] border-r-[#FF3131]':'border-r-[1px]'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Create Your Account</h4>
                <span>Create your account and login to foodie bite website.</span>
              </div>
            </div>

            <div className='flex md:w-96'>
              <span className='p-3 text-xl'>2.</span>
              <div className={`p-3 pr-6 transition-all ${index==1? 'border-r-[10px] border-r-[#FF3131]':'border-r-[1px]'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Choose Your Meal Pain</h4>
                <span>We offer range of different plains.Choose any one of them.</span>
              </div>
            </div>

            <div className='flex md:w-96'>
              <span className='p-3 text-xl'>3.</span>
              <div className={`p-3 pr-6 transition-all ${index==2? 'border-r-[10px] border-r-[#FF3131]':'border-r-[1px]'}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Explore Dashboard</h4>
                <span>Select dish that you want to eat from Dashboard</span>
              </div>
            </div>

            <div className='flex md:w-96'>
              <span className='p-3 text-xl'>4.</span>
              <div className={`p-3 pr-6 transition-all ${index==3? 'border-r-[10px] border-r-[#FF3131]':'border-r-[1px] '}`}>
                <h4 className='text-xl text-semiboldfont-jernin'>Get Refund</h4>
                <span>The cancel meal amount will be credited to your account at the end of the month.</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

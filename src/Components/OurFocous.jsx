import React from 'react'

export default function OurFocous() {
  return (
    <div className='py-10 mt-10'>
        <div className='px-2 md:px-0'>
            <h6 className='text-slate-900 font-medium font-jernin text-center'>What we offer</h6>
            <h3 className='text-5xl font-bold text-center font-jernin'>Is <span className='text-[#FF3131]'>committment</span> to deliver healthy food to you</h3>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-center mt-20'>

            <div className='rounded-2xl relative bg-white mx-4 mt-6 shadow-md border border-1 p-2 max-w-xs flex justify-center'>
                <div className='p-3 bg-[#FFF5E1] rounded-lg absolute top-[-20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="#FF3131">
                        <path d="M8 3h8v2H8zM4 6h16v2H4zM4 10h16v2H4zM8 13h8v2H8zM4 16h16v2H4zM8 20h8v2H8z"/>
                    </svg>
                </div>
                
                <div className='flex flex-col item-center mt-16 font-jernin'>
                    <h4 className='text-center text-2xl font-bold'>Healthy food</h4>
                    <h6 className='text-center mt-4'>Prepare food for you with making sure everything is good foryou</h6>
                </div>
                   
            </div>

            <div className='rounded-2xl relative bg-white mx-4 mt-6 shadow-md border border-1 p-2 max-w-xs flex justify-center'>
                        <div className='p-3 bg-[#FFF5E1] rounded-lg absolute top-[-20px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="#FF3131">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </div>

                
                <div className='flex flex-col item-center mt-16 font-jernin'>
                    <h4 className='text-center text-2xl font-bold'>Wishlist meal</h4>
                    <h6 className='text-center mt-4'>Choose your meal of the day from the menu and enjoy eating</h6>
                </div>
                   
            </div>
            <div className='rounded-2xl relative bg-white mx-4 mt-6 shadow-md border border-1 p-2  max-w-xs flex justify-center'>
                <div className='p-3 bg-[#FFF5E1] rounded-lg absolute top-[-20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38">
                        <circle cx="12" cy="12" r="10" stroke="#FF3131" stroke-width="2" fill="#FF3131"/>
                        <line x1="12" y1="12" x2="12" y2="6" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>
                        <line x1="12" y1="12" x2="16" y2="12" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                
                <div className='flex flex-col item-center mt-16 font-jernin'>
                    <h4 className='text-center text-2xl font-bold'>Timely delivery</h4>
                    <h6 className='text-center mt-4'>Get your meal delivered on your selected time </h6>
                </div>
                   
            </div>
        </div>
        <div className='mt-16 flex flex-col font-jernin  items-center'>
                <span>Explore our platform and price plan</span>
                <span className='p-2 lg:p-2font-medium cursor-pointer text-white text-md bg-[#FF3131] my-6 rounded-md'>Buy Meal Plain</span>
        </div>

    </div>
  )
}

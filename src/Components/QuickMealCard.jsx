import React from 'react'
import star from '../Images/star.png'

export default function QuickMealCard({imageUrl,borderColor,tags}) {
  return (
    <div className='rounded-2xl bg-white mx-4 mt-6 shadow-md border border-1 p-2 cursor-pointer'>
        <div className='flex justify-center py-2 px-5'>
            <img className={`w-14 h-14 rounded-full object-cover ${borderColor}`} src={imageUrl} alt="food image" />
        </div>
        <div className='flex justify-center my-3'>
            <img src={star} className='w-4 h-4 mx-1 object-contain'/>
            <img src={star} className='w-4 h-4 mx-1 object-contain'/>
            <img src={star} className='w-4 h-4 mx-1 object-contain'/>
        </div>
        <div className='px-5 my-3 flex items-center flex-col'>
            <h3 className='font-jernin'>Sahi Paneer</h3>
            <h6 className='font-jernin text-gray-600'>North Indian Dish</h6>
            <div className='my-2 overflow-x-hidden overflow-y-hidden'>
                {/* {
                    tags.map((item)=>{
                        return <>
                            
                        </>
                    })
                } */}
                <span className='p-1 bg-slate-100 font-jernin rounded-sm text-xs'>
                                item
                </span>

            </div>
            <div className='mt-6'>
                <span className='py-2 rounded-lg px-3 text-sm border hover:bg-slate-900 hover:text-white transition-colors border-slate-900'>Order Now</span>
            </div>
        </div>
    </div>
  )
}

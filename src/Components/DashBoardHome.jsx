import React, { useState } from 'react';

const DashBoardHome = () => {

    const [totalOrder,setTotalOrder]=useState(0)
    const [monthOrder,setMonthOrder]=useState(1)
    const [yourProfile,setYourProfile]=useState(20)


    return (
        <section>
            <div className='mt-4'>
                <div className='grid grid-cols-6'>
                    <div className='col-span-4 flex justify-between p-2'>
                        <div className='p-2 bg-white shadow-lg rounded-xl text-sm font-medium cursor-pointer flex justify-center'>
                            <span className='w-[67px] h-[67px] bg-[#E4FBE7] rounded-xl'>img</span>
                            <span className='flex flex-col justify-center ml-3'>
                                <p className='text-[#303030] text-[24px]'>{totalOrder}</p>
                                <p className='text-[#8A97A4] text-[17px] mt-2'>Total order</p>
                            </span>
                        </div>
                        <div className='p-2 bg-white shadow-lg rounded-xl text-sm font-medium cursor-pointer flex justify-center'>
                            <span className='w-[67px] h-[67px] bg-[#E4FBE7] rounded-xl'>img</span>
                            <span className='flex flex-col justify-center ml-3'>
                                <p className='text-[#303030] text-[24px]'>{totalOrder}</p>
                                <p className='text-[#8A97A4] text-[17px] mt-2'>Total order</p>
                            </span>
                        </div>
                        <div className='p-2 bg-white shadow-lg rounded-xl text-sm font-medium cursor-pointer flex justify-center'>
                            <span className='w-[67px] h-[67px] bg-[#E4FBE7] rounded-xl'>img</span>
                            <span className='flex flex-col justify-center ml-3'>
                                <p className='text-[#303030] text-[24px]'>{totalOrder}</p>
                                <p className='text-[#8A97A4] text-[17px] mt-2'>Total order</p>
                            </span>
                        </div>
                    </div>
                    <div className='col-span-2 row-span-2'></div>
                    <div className='col-span-4'></div>

                </div>
            </div>
        </section>
    );
}

export default DashBoardHome;

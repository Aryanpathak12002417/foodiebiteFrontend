import React, { useEffect, useState } from 'react';
import {Routes,Route, Link, Outlet} from 'react-router-dom'
import profile from '../Images/reviewImg1.jpg'
import OrdersBoard from './OrdersBoard';
import HistoryBoard from './HistoryBoard';
import DashBoardHome from './DashBoardHome'
import EditInformationBoard from './EditInformationBoard';
import logo from '../Images/logo.png'
import ScheduleCall from './ScheduleCall';

const DashBoard = () => {

    const [isActive,setIsActive]=useState(0)
    const [pageName,setpageName]=useState("Dashboard")

    const changeIsActive = (tab)=>{
        setIsActive(tab)
        switch(tab){
            case 1:
                setpageName("Order")
                break;
            case 2:
                setpageName("Billing")  
                break;  
            case 3:
                setpageName("Profile")
                break;
            default:
                setpageName("Dashboard")        

        }
    }

    return (
        <div className='h-screen flex flex-col'>
            <section className='grow'>
                <div className='h-full'>
                    <div className='grid grid-cols-6 h-full'>
                        <div className='col-span-1 p-2 flex flex-col overflow-hidden'>
                            <span className='flex items-center p-4'>
                                <img src={logo} className='w-8 h-8 mr-2 my-8'/>
                                <h3 className='font-jernin font-thin'>Foodie Bite</h3>
                            </span>
                            <div className='flex flex-col items-center p-2 mt-3'>
                                <ul className='w-full'>
                                    <li className={`font-jernin py-1 text-sm rounded-md my-2 transition ${isActive === 0 ? 'scale-105 bg-[#EB763C] font-semibold  text-white':'scale-100 bg-white text-[#919090]'}`} onClick={()=>{changeIsActive(0)}}><Link to='/dashboard/'>
                                        <div className='flex items-center'>
                                            <div className='text-white mr-2 bg-[#EB763C] flex justify-center rounded-md transition-colors p-2 max-w-[35px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                                            </svg>

                                        </div>
                                        Home
                                        </div>
                                    </Link></li>
                                    <li className={`font-jernin py-1 text-sm  rounded-md my-2 transition ${isActive === 1 ? 'scale-105 bg-[#EB763C] font-semibold text-white':'scale-100 bg-white text-[#919090]'}`} onClick={()=>{changeIsActive(1)}}><Link to='/dashboard/orders'>
                                    <div className='flex items-center'>
                                            <div className='text-white mr-2 bg-[#EB763C] flex justify-center rounded-md transition-colors p-2 max-w-[35px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" clip-rule="evenodd"/>
                                            </svg>

                                    </div>
                                    Order
                                    </div>
                                    </Link></li>
                                    <li className={`font-jernin py-1 text-sm  rounded-md my-2 flex transition  ${isActive === 2 ? 'scale-105 bg-[#EB763C] font-semibold text-white':'scale-100 bg-white text-[#919090]'}`} onClick={()=>{changeIsActive(2)}}><Link to='/dashboard/billing'>
                                    <div className='flex items-center'>
                                            <div className='text-white mr-2 bg-[#EB763C] flex justify-center rounded-md transition-colors p-2 max-w-[35px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
                                            </svg>


                                        </div>
                                    Billing
                                    </div>
                                    </Link></li>
                                </ul>
                                <div className='w-full'>
                                    <h3 className='mt-8 text-lg font-bold font-jernin'> Account Page</h3>
                                    <ul className='w-full mt-6'>
                                    <li className={`font-jernin py-1 text-sm rounded-md my-2 transition ${isActive === 3 ? 'scale-105 bg-[#EB763C] font-semibold text-white':'scale-100 bg-white text-[#919090]'}`} onClick={()=>{changeIsActive(3)}}><Link to='/dashboard/profile'>
                                    <div className='flex items-center'>
                                            <div className='text-white mr-2 flex justify-center bg-[#EB763C] rounded-md transition-colors p-2 max-w-[35px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
                                            </svg>

                                    </div>
                                    Profile
                                    </div>
                                    </Link></li>
                                </ul>
                                </div>

                                <div className='w-full mt-12'>
                                    {/* <ScheduleCall/> */}
                                </div>
                            </div>
                        </div>


                        <div className='col-span-5 p-4 md:p-6 bg-[#F9F9F9]'>
                            <span className='text-[#919090]'>Page / </span><span>{pageName}</span>
                            <div>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default DashBoard;
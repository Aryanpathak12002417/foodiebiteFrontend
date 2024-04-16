import React from 'react';
import logo from '../Images/logo2.png'
import LoginInfo from './LoginInfo';

const Login = () => {
    return (
        <div className='h-screen grid grid-cols-5'>


            <div className="hidden col-span-2 bg-[#FF3131] py-4 md:py-10 px-10 text-white md:flex flex-col justify-between font-jernin">
                <div className='flex items-center'>
                    <span className='p-3 rounded-full bg-[#FFF5E1] '>
                        <img src={logo} className='h-8 w-8'/>
                    </span>
                    <span className='pl-2 text-xl font-medium'>
                        Foodie Bite
                    </span>
                </div>
                <div className='max-w-md'>
                    <h3 className='text-5xl mb-2 leading-snug font-bold'>Welome Back</h3>
                    <span className=' font-light '>
                        It's time to get you back at your foodie journey.
                    </span>
                    <div className='mt-2'>
                    {/* <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    /> */}
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <ul className='flex'>
                            <li><a href='#' className='text-xs'>About us</a></li>
                            <li><a href='#' className='ml-5 text-xs'>Terms and conditions</a></li>
                            <li><a href='#' className='ml-5 text-xs'>@Copyright 2024-2025</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="col-span-3 p-10">
                <div className='mt-10 p-10'>
                    <LoginInfo/>
                </div>


            </div>
        </div>
    )
}

export default Login;

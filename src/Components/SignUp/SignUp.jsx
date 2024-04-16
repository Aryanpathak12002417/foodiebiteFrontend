import React,{useState} from 'react'
import logo from '../../Images/logo2.png'
import MoreInfo from '../MoreInfo';

function SignUp() {

    const [pageCounter,setPageCounter]=useState(0);

    const clickBasic = ()=>{
        setPageCounter(0)
    }
    
    const clickInfo = ()=>{
        setPageCounter(1)
    }

    const clickPreff = ()=>{
        console.log(2)
        setPageCounter(2)
    }

    const handleLogin=()=>{
        console.log('User successfully login')
    }



    return (
        <div className='h-screen grid grid-cols-5'>


            <div className="col-span-2 bg-[#FF3131] py-4 md:py-10 px-10 text-white flex flex-col justify-between font-jernin">
                <div className='flex items-center'>
                    <span className='p-3 rounded-full bg-[#FFF5E1] '>
                        <img src={logo} className='h-8 w-8'/>
                    </span>
                    <span className='pl-2 text-xl font-medium'>
                        Foodie Bite
                    </span>
                </div>
                <div className='max-w-md'>
                    <h3 className='text-5xl mb-10 leading-snug font-bold'>Let's set up your Foodie account</h3>
                    <span className=' font-light '>
                        Get rid of what you thinking about your stupid meal services. Use our services to eat food of your choice and get it delivered according to your selected time
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
                {/* Slider div */}
                <div className="flex items-center justify-between">
                    <span className={`h-4 w-4 border-2 border-[#FF3131] rounded-full bg-[#FF3131] mr-2 cursor-pointer transition-colors delay-[100ms]`} onClick={clickBasic}>
                    </span>
                    <span className={`grow h-1 transition-colors ${pageCounter>=1?'bg-[#FF3131]':'bg-slate-100'}`}></span>
                    <span className={`h-4 w-4 border-2 border-[#FF3131] rounded-full mx-2 cursor-pointer transition-colors delay-[100ms] ${pageCounter>=1?'bg-[#FF3131]':''}`} onClick={clickInfo}></span>
                    <span className={`grow h-1 transition-colors ${pageCounter>=2?'bg-[#FF3131]':'bg-slate-100'}`}></span>
                    <span className={`h-4 w-4 border-2 border-[#FF3131] rounded-full mx-2 cursor-pointer transition-colors delay-[100ms] ${pageCounter>=2?'bg-[#FF3131]':''}`} onClick={clickPreff}></span>
                </div>

                {/* Content-div */}

                <div className='mt-10 p-10'>
                    {/* <BasicInfo/> */}
                    <MoreInfo index={pageCounter} setIndex={setPageCounter}/>
                </div>


            </div>
        </div>
    )
}

export default SignUp

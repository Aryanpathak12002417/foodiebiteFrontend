import React, { useState } from 'react';
import rightImage from '../Images/rightArrow.svg'

const LoginInfo = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const [isEmail,setIsEmail]=useState(true)
  const [isPassword,setIsPassword]=useState(true)

  const onChangeEmail=(e)=>{
    setIsEmail(true)
    setEmail(e.target.value)
  }
  const onChangePassword=(e)=>{
    setIsPassword(true)
    setPassword(e.target.value)
  }

  const handlLogin =()=>{
    if(email==""){
      setIsEmail(false)
      return
    }
    else if(password==""){
      setIsPassword(false)
      return
    }
  }

    return (
<section className='flex justify-center items-center font-jernin'>
      <div className='md:w-[50vw] md:p-7 text-blackrounded-lg relative rounded-xl'>
        <div>
          <h1 className='text-3xl font-jernin font-semibold'>Let's Login</h1>
          <h3 className='text-gray-700 text-sm font-jernin pt-1'>Please enter your details</h3>
        </div>
        <div></div>
      <div className='pt-4'>

    <div>
      <form class="grid pt-2 transition-all" method='POST'>

        <div class="mb-5 max-w-md">
          <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" value={email} onChange={onChangeEmail} className={`shadow-sm ${isEmail?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} placeholder="Rahul" required/>
          {isEmail?"": <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>enter your Email </p>}
        </div>

        <div class="mb-5 max-w-md">
          <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" value={password} onChange={onChangePassword} className={`shadow-sm ${isPassword?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} placeholder="Password" required/>
          {isPassword?"": <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>enter your passwrd</p>}
        </div>

        <button type="submit" class="flex items-center justify-center max-w-md text-white bg-[#FF3131] mt-5 hover:bg-[#FF3139] focus:ring-4 focus:outline-none focus:ring-[#ee565b] font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login<img className='ml-2' src={rightImage} alt="" /></button>
      </form>
    </div>
      </div>
      </div>
      </section>
)};

export default LoginInfo;

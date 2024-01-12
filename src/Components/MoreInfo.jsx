import React,{useState}from 'react'
import { animated, useSpring } from '@react-spring/web'
import rightImage from '../Images/rightArrow.svg'
import backButton from '../Images/backButton.png'

export default function MoreInfo() {

  const [index,setIndex]=useState(0);
  const [address,setAddress]=useState("")
  const [state,setState]=useState("")
  const [city,setCity]=useState("")
  const [pincode,setPincode]=useState("")
  const [gender,setGender]=useState("male")
  const [dob,setDOB]=useState("")
  const [preffBrkfast,setpreffBrkfast]=useState("7:00 AM")
  const [preffLuch,setPreffLuch]=useState("")
  const [preffDinner,setPreffDinner]=useState("")

  const [isAdderess,setIsAddress]=useState(true)
  const [isState,setIsState]=useState(true)
  const [isCity,setIsCity]=useState(true)
  const [isPincode,setIsPincode]=useState(true)
  const [isGender,setIsGender]=useState(true)
  const [isdob,setIsDOB]=useState(true)


  const onChangeAddress=(e)=>{
    setIsAddress(true)
    setAddress(e.target.value);
  }

  const onChangeState=(e)=>{
    setIsState(true)
    setState(e.target.value);
  }

  const onChangeCity=(e)=>{
    setIsCity(true)
    setCity(e.target.value);
  }

  const onChangePincode=(e)=>{
    setIsPincode(true)
    setPincode(e.target.value);
  }

  const onChangeDOB=(e)=>{
    setIsDOB(true)
    setDOB(e.target.value);
  }
  
  const onChangeGender=(e)=>{
    setIsGender(true)
    setGender(e.target.value);
  }

  const onChangePreffBrkFast=(e)=>{
    setpreffBrkfast(e.target.value)
  }

  const onChangePreffLunch=(e)=>{
    setPreffLuch(e.target.value)
  }
  const onChangePreffDinner=(e)=>{
    setPreffDinner(e.target.value)
  }


  const scrollin = useSpring({
    opacity: index==1? 1 : 0,
    x: index==1 ? 0 : 24,
  })

  const scrollout = useSpring({
    opacity: index==0 ? 1 : 0,
    x: index==0 ? 0 : 24,
  })

  const nextPage=()=>{
    if(index==1){
      console.log("Submit")
      return;
    }
    else{
      if(address==""){
        setIsAddress(false)
        return
      }
      if(state==""){
        setIsState(false)
        return
      }
      if(city==""){
        setIsCity(false)
        return
      }
      if(pincode=="" || pincode.length!=6){
        setIsPincode(false)
        return
      }
      if(dob==""){
        setIsDOB(false)
        return
      }
    }
    setIndex((prevIndex)=>prevIndex+1)
  }

  const prevPage=()=>{
    if(index==0){
      console.log("First Page")
      return;
    }
    setIndex((prevIndex)=>prevIndex-1)
  }
  
  return (
    <section className='h-screen flex justify-center items-center font-jernin'>
      <div className='md:w-[50vw] p-7 text-blackrounded-lg relative rounded-xl'>
        <div className='mb-5 top-[-30px]'>
          <img className='hover:scale-105 hover:rounded-md hover:cursor-pointer' onClick={prevPage} src={backButton}/>
        </div>
        <div>
          <h1 className='text-3xl font-jernin font-semibold'>More Information</h1>
          <h3 className='text-gray-700 text-sm font-jernin pt-1'>We want to know more about you. Please fill the details below</h3>
        </div>
        <div></div>
        <div className='pt-4'>

  {
    index==0?<animated.div style={scrollout}>
      <form class="mx-auto grid md:grid-cols-2 gap-x-8 pt-2 transition-all">
    <div class="mb-5">
      <label htmlFor="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
      <input type="text" id="address" value={address} onChange={onChangeAddress} className={`shadow-sm ${isAdderess?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} placeholder="Flat no 123..." required/>
      {isAdderess?"": <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>enter your address</p>}
    </div>
    <div class="mb-5">
      <label htmlFor="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
      <input type="text" id="state" value={state} onChange={onChangeState} className={`shadow-sm ${isState?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} required/>
    {isState?"":<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>enter your state</p>}
    </div>
    <div class="mb-5">
      <label htmlFor="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
      <input type="text" id="city" value={city} onChange={onChangeCity} className={`shadow-sm ${isCity?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} required/>
    {isCity?"":<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>enter your city</p>}
    </div>
    <div class="mb-5">
      <label htmlFor="pincode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
      <input type="number" id="pincode" value={pincode} onChange={onChangePincode} className={`shadow-sm ${isPincode?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} required/>
      {isPincode?"":<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please</span> check your pincode</p>}
    </div>
    <div class="mb-5">
      <label htmlFor="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
      <input type="date" id="city" value={dob} onChange={onChangeDOB} className={`shadow-sm ${isdob?'bg-gray-50 border border-gray-300 text-gray-900':'bg-red-50 border border-red-500 text-red-900'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} required/>
      {isdob?"":<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span> choose you DOB</p>}
    </div>
  
  
    <div>
  
      
  
  <fieldset className='flex pt-10'>
    <div class="flex items-center mb-4">
      <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
      <label htmlFor="country-option-1" value={gender} onChange={onChangeGender} class="ml-[3px] mr-[8px] text-sm font-medium text-gray-900 dark:text-gray-300">
        Male
      </label>
    </div>
  
    <div class="flex items-center mb-4">
      <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
      <label htmlFor="country-option-2" class="ml-[3px] mr-[8px] text-sm font-medium text-gray-900 dark:text-gray-300">
        Female
      </label>
    </div>
  
    <div class="flex items-center mb-4">
      <input id="country-option-3" type="radio" name="countries" value="Spain" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
      <label htmlFor="country-option-3" class="ml-[3px] text-sm font-medium text-gray-900 dark:text-gray-300">
        Others
      </label>
    </div>
    {isGender?"":<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Please </span>Choose your gender</p>}
  
  </fieldset>
  
  
    </div>
  
  
  </form>
    </animated.div>:""
  }  


  {
    index==1?
    <animated.div style={scrollin}>
      <form class="mx-auto grid gap-x-8 pt-2 transition-all">
      <div className='mb-4 max-w-md'>
        <label htmlFor="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your breakfast time</label>
        <select id="countries" value={preffBrkfast} onChange={onChangePreffBrkFast} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>7:00 AM</option>
          <option>8:00 AM</option>
          <option>9:00 AM</option>
        </select>
      </div>
      <div className='mb-4 max-w-md'>
        <label htmlFor="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Luch time</label>
        <select id="countries" value={preffLuch} onChange={onChangePreffLunch} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>1:00 PM</option>
          <option>2:00 PM</option>
          <option>3:00 PM</option>
        </select>
      </div>

      <div className='mb-4 max-w-md'>
        <label htmlFor="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Dinner Time</label>
        <select id="countries" value={preffDinner} onChange={onChangePreffDinner} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>8:00 PM</option>
          <option>9:00 PM</option>
          <option>10:00 PM</option>
        </select>
      </div>
      </form>
    </animated.div>:""
  }      


<button type="submit" onClick={nextPage} class="flex items-center justify-center text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  {index==1?"Save Detail":"Next Page"} <img className='ml-2' src={rightImage} alt="" /></button>
        </div>
      </div>
    </section>
  )
}

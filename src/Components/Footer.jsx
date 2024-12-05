import React from 'react'
import logo from '../Images/logo2.png'

export default function () {
  return (
    <footer className='bg-slate-900 md:p-10 text-white'>
        <div className='flex flex-col md:flex-row md:justify-center mt-12'>
            <div className='p-6 max-w-md'>
                <div className='flex items-center'>
                    <img className='h-12 w-12' src={logo} alt='Foodie bite logo'/>
                    <h6 className='font-jernin font-medium text-xl tracking-wider ml-3'>Foodie Bite</h6>
                </div>
                <div className='mt-6 font-jernin text-sm tracking-wider'>
                    <p className='text-slate-300'>
                    Foodie Bite is an innovative online food delivery company that seamlessly brings a culinary experience to your doorstep every day, offering a diverse menu tailored to your taste preferences and ensuring a delightful dining experience.
                    </p>
                </div>
            </div>
            <div className='p-6'>
                <span className='font-jernin text-slate-300 font-medium'>Our Services</span>
                <ul className='mt-10 font-jernin font-medium'>
                    <li className='my-2'>About Us</li>
                    <li className='my-2'>Pricing</li>
                    <li className='my-2'>How it work</li>
                    <li className='my-2'>Today's Meal</li>
                </ul>
            </div>
            <div className='p-6'>
                <span className='font-jernin text-slate-300 font-medium'>Our Company</span>
                <ul className='mt-10 font-jernin font-medium'>
                    <li className='my-2'>Terms and Condition</li>
                    <li className='my-2'>Contact us</li>
                </ul>
            </div>
            <div className='p-6'>
                <span className='font-jernin text-slate-300 font-medium'>Follow us</span>
                <ul className='mt-10 font-jernin font-medium'>
                    <li className='my-2'>
                        <a href='#'>Facebook</a>
                    </li>
                    <li className='my-2'>
                        <a href='#'>Twitter</a>
                    </li>
                    <li className='my-2'>
                        <a href='#'>Instagram</a>
                    </li>
                    <li className='my-2'>
                        <a href='#'>Linkdin</a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}

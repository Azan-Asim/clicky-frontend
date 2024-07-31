import React from 'react'
import {Facebook} from 'lucide-react';
import {X} from 'lucide-react';

function Loginorsignup(data) {
    
  return (
    <div className='fixed bg-white w-full md:w-[35%] rounded-lg h-[90%]  md:h-[100%] bottom-0 left-0 md:left-[65%] right-0  pl-7 pr-7 pt-5 pb-2'>
    <div className='flex justify-between'><h1 className=' font-bold text-sm'>Login or Signup</h1>
   <X color="#000000" onClick={data.logInToggle} /></div>
    <div className='w-full flex  gap-3 pt-7'>
      <button className=' border-2 border-solid rounded-lg border-2px h-10 w-[50%] items-center flex justify-center bg-[#eeee]'><Facebook color="#2e42a8" /></button>
      <button className='font-extrabold text-2xl border-2 border-solid rounded-lg border-2px h-10 w-[50%] items-center flex justify-center bg-[#eeee] text-red-300'>G</button>
    </div>
    <h1 className='flex justify-center pt-3 text-xs'>OR</h1>
    <input type="Email" placeholder='Email' className='flex justify-center  h-12 w-full border-2 border-solid rounded-lg pl-4 mt-3' />
    <input type="Password" placeholder='Password' className='flex justify-center  h-12 w-full border-2 border-solid rounded-lg pl-4 mt-3' />
    <h1 className='flex justify-center pt-5 text-xs'>Forgot Password?</h1>
    <button className='w-full h-10 font-bold text-xs mt-2 mb-1 text-white bg-[#E02959]'>LOGIN WITH EMAIL</button>
    <h1 className='flex justify-center text-xs'>OR</h1>
    <button className='w-full h-10 font-bold text-xs mt-1 text-white bg-[#E02959]'>GUEST CHECKOUT</button>
    <h1 className='flex justify-left text-xs pt-1'>New to Clicky?Create an Account!</h1>
    
              </div>
  )
}

export default Loginorsignup
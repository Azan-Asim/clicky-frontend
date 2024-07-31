import React from 'react'
import { Facebook } from 'lucide-react';
import {Instagram} from 'lucide-react';
import {Twitter} from 'lucide-react';

function Footer() {
    return (
      
            <div className=' bg-slate-100 grid lg:grid-cols-5 lg:gap-1  p-10 gap-x-2 gap-y-3 sm:grid-cols-3 grid-cols-1 w-full md:h-64  text-xs'>
                <div className='w-full'>
                    <h1 className='mb-4 font-bold '>Helps and Information</h1>
                    <ul>
                        <li>Request a call back!</li>
                        <li>Contact us</li>
                        <li>FAQ & Help Center</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='mb-4 font-bold'>About Clicky</h1>
                    <ul>
                        <li>About us</li>
                        <li>Privacy Statement</li>
                        <li>Terms & Condition</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='mb-4 font-bold'>Download our App</h1>
                    <ul className=''>
                    <li className='flex'><img className='h-10 w-20' src="./Googleplay.png" alt="" /><img className='h-9 w-24' src="./Appstore.png" alt="" /></li>
                        <li>Keep in touch</li>     
                        <div className='flex gap-4 pt-2'>                 
                        <li className='size-2'><Instagram /></li>
                     <li className='size-2'><Facebook /></li> 
                     <li className='size-2'><Twitter/></li></div>
                    </ul>
                </div>
                <div className='w-full mt-4'>
                    <h1 className='mb-4 font-bold'>More For Clicky</h1>
                    <ul>
                        <li>Sell on Clicky</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='mb-4 font-bold'>Shopping From</h1>
                    <ul>
                        <li>Your are from Pakistan</li>
                    </ul>
                </div>

            </div> 
           
      
    )
}

export default Footer
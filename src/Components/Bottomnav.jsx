
import React, { useState } from 'react'
import {User} from 'lucide-react';
import {Flame} from 'lucide-react';
import {LayoutDashboard} from 'lucide-react';
import {Link} from "react-router-dom";
import Loginorsignup from './Loginorsignup';



function Bottomnav() {
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  console.log("condition : " + isCategoryVisible)
  const togglebox = () => {
    setIsCategoryVisible(!isCategoryVisible)
  }
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  console.log("condition : " + isSignInVisible)
  const logInToggle = () => {
    setIsSignInVisible(!isSignInVisible)
  }
  return (
    
    <div className='h-16 flex md:hidden  justify-around w-full fixed bg-white bottom-0 pt-3 '> 
    <Link to='/'><button className=' flex flex-col items-center justify-center text-sm' ><img src="./homeicon.png" className='size-7 ' alt="" /><h1>Home</h1></button></Link>
    <button className=' flex flex-col items-center justify-center text-sm'><LayoutDashboard onClick={togglebox}/>
  
          {isCategoryVisible &&
            <div className='fixed bg-white w-full h-auto bottom-16 left-0 top-14 right-0 pt-1'>
              <div className='bg-[#C9E1F8] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Men</div>
              <div className='bg-[#EDD7CF] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Women</div>
              <div className='bg-[#F8E7C9] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Kids</div>
              <div className='bg-[#FEB2BC] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Beauty</div>
              <div className='bg-[#FEB2BC] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Others</div>
              <Link to='/Newarrival'><div className='bg-[#D6BBB4] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>New Arrivals</div></Link>

            </div>
          }
    <h1>Category</h1></button>
   <Link to='/Newarrival'> <button className=' flex flex-col items-center justify-center text-sm'><Flame /><h1>New Arrivals</h1></button></Link>
<button className=' flex flex-col items-center justify-center text-sm'><User onClick={logInToggle}  /><h1>Account</h1></button>
{isSignInVisible &&
          <Loginorsignup logInToggle={logInToggle}/>
        }

    </div>
  )
}

export default Bottomnav
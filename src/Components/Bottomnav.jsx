
import React, { useState } from 'react'
import {User} from 'lucide-react';
import {Flame} from 'lucide-react';
import {LayoutDashboard} from 'lucide-react';
import {Link} from "react-router-dom";
import Loginorsignup from './Loginorsignup';
import { Home } from 'lucide-react';


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
    
    <div className='h-16 flex justify-around md:hidden items-center w-full fixed bg-white bottom-0  '> 
    <Link to='/'><button className=' flex flex-col items-center justify-center text-sm' ><Home/><h1>Home</h1></button></Link>
    <button className=' flex flex-col items-center justify-center text-sm'><LayoutDashboard onClick={togglebox}/>
  
          {isCategoryVisible &&
            <div className='fixed bg-white w-full h-auto bottom-16 left-0 top-14 right-0 pt-1'>
              <div className='bg-[#C9E1F8] w-full h-20 px-6 text-xl text-left flex items-center font-semibold justify-between '>Men  <img src="./azan.png" alt="" className='size-20'/></div>
              <div className='bg-[#EDD7CF] w-full h-20 px-6 text-xl text-left flex items-center font-semibold justify-between '>Women <img src="./azan.png" alt="" className='size-20' /></div>
              <div className='bg-[#F8E7C9] w-full h-20 px-6 text-xl text-left flex items-center font-semibold justify-between '>Kids <img src="./azan.png" alt="" className='size-20' /></div>
              <div className='bg-[#FEB2BC] w-full h-20 px-6 text-xl text-left flex items-center font-semibold justify-between '>Beauty <img src="./azan.png" alt="" className='size-20' /></div>
              <div className='bg-[#FEB2BC] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>Others</div>
              <Link to='/Newarrival'><div className='bg-[#D6BBB4] w-full h-20 pl-6 text-xl text-left flex items-center font-semibold'>New Arrivals</div></Link>

            </div>
          }
    <h1 className='text-sm'>Category</h1></button>
   <Link to='/Newarrival'> <button className=' flex flex-col items-center justify-center text-sm'><Flame /><h1>New Arrivals</h1></button></Link>
<button className=' flex flex-col items-center justify-center text-sm'><User onClick={logInToggle}  /><h1>Account</h1></button>
{isSignInVisible &&
          <Loginorsignup logInToggle={logInToggle}/>
        }

    </div>
  )
}

export default Bottomnav
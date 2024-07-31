import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import { User } from 'lucide-react';
import { ListOrdered } from 'lucide-react';
import Loginorsignup from './Loginorsignup';
import { Link } from "react-router-dom";
function Header() {

  const [isProfileVisible, setIsProfileVisible] = useState(false);
  console.log("condition : " + isProfileVisible)
  const togglebox = () => {
    setIsProfileVisible(!isProfileVisible)
  }
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  console.log("condition : " + isSignInVisible)
  const logInToggle = () => {
    setIsSignInVisible(!isSignInVisible)
  }
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  console.log("condition : " + isNotificationVisible)
  const notificationToggle = () => {
    setIsNotificationVisible(!isNotificationVisible)
  }

  return (
    <nav className='bg-slate-50 flex justify-between sticky top-0 left-0 right-0 items-center w-full p-4'>
      <div className='w-24 '>
        <img className='w-full ' src="./clickylogo.png" alt="" />
      </div>

      <ul className='md:flex text-sm  hidden  gap-4 cursor-pointer '>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>BEAUTY</li>
        <li>OTHERS</li>
        <Link to='/Newarrival'><li>NEW ARRIVALS</li></Link>
        <Link to='/Sale'>   <li className='text-red-600'>SALE</li></Link>
      </ul>

      <div className='w-80 h-[38px] relative lg:flex hidden items-center justify-center'>
        <input type="search" placeholder='Search for items, brands and inspiration' className=' h-full text-sm w-full  bg-gray-100 pl-3 py-2 rounded placeholder:text-xs' />
        <button className='h-full absolute right-0 w-[45px] bg-amber-300 rounded flex justify-center items-center'>
          <img className='h-6 w-6' src="./search.png" alt="" />
        </button>
      </div>
      <div className='flex lg:gap-3 md:gap-2 gap-1 cursor-pointer items-center'>
      <Link to='/Searchpage'><div className='p-1 size-7 sm:size-9 lg:hidden flex '> <Search /> </div></Link>
        <Link to='/Customercare'> <div className='p-1 size-7 sm:size-8'> <img src="./customercare.png" alt="" /> </div></Link>
        <Link to='/Notification'><div className='p-1 size-7 sm:size-8'> <Bell onClick={notificationToggle}/> </div></Link> 
        {isNotificationVisible &&
          <div className='fixed bg-white w-56 rounded-lg h-32 bottom-64 left-[78%] top-[65px] right-[10px] hidden md:flex '>
            <div className='w-full h-10 bg-[#eeee] flex justify-center items-center'>Notifications</div>
         </div>
}
        <div className='p-1 size-7 md:size-9 md:flex  hidden'> <img onClick={togglebox} src="./profile.png" alt="" /> </div>


        {isProfileVisible &&
          <div className='fixed bg-[#eeee] w-48 rounded-lg h-40 bottom-64 left-[82%] top-[70px] right-[50px] pt-1'>
            <div className='flex justify-around items-center w-full h-10 text-sm'>
              <button onClick={logInToggle}>Sign In</button>
              {isSignInVisible &&
                <Loginorsignup logInToggle={logInToggle} />
              }
              <button onClick={logInToggle}>Join</button>
              {isSignInVisible &&
                <Loginorsignup logInToggle={logInToggle} />
              }
            </div>
            <div className=' w-full bg-white grid-cols-1 text-sm'>
              <button className='h-10 flex pl-3 gap-5 items-center' onClick={logInToggle} ><User /><h1>My Account </h1></button>
              {isSignInVisible &&
                <Loginorsignup logInToggle={logInToggle} />
              }
              <hr />
              <button className='h-10 flex pl-3 gap-5 items-center'><ListOrdered /><h1>My Orders </h1></button><hr />
              <button className='h-10 flex pl-3 gap-5 items-center'><Heart /><h1>My Wishlist </h1></button>
            </div>
          </div>
        }
        <Link to='/Shoppingbag'> <div className='p-1 size-7 sm:size-8'> <img src="./countactive.png" alt="" /> </div></Link>
        <div className='p-1 size-7 sm:size-8'> <Heart /> </div>


      </div>
    </nav>
  )
}

export default Header
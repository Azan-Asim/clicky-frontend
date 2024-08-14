import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import { User } from 'lucide-react';
import { ListOrdered } from 'lucide-react';
import Loginorsignup from './Loginorsignup';
import { Link } from "react-router-dom";
import DropDown from './DropDown'

function Header() {

  const men = {
      trigger:"MEN",
    
    dropDownData:[
      {
        heading:"Top Wear222",
        btns:[
          "Vest",
          "Shirts",
          "T-shirts",
          "Hoodies",
          "SweatShirts",
          "Traditional",
          "Sleep & Lounge"
        ]
      },
      {
        heading:"Top Wear222",
        btns:[
          "Vest",
          "Shirts",
          "T-shirts",
          "Hoodies",
          "SweatShirts",
          "Traditional",
          "Sleep & Lounge"
        ]
      },
      {
        heading:"Top Wear222",
        btns:[
          "Vest",
          "Shirts",
          "T-shirts",
          "Hoodies",
          "SweatShirts",
          "Traditional",
          "Sleep & Lounge"
        ]
      },
      {
        heading:"Top Wear222",
        btns:[
          "Vest",
          "Shirts",
          "T-shirts",
          "Hoodies",
          "SweatShirts",
          "Traditional",
          "Sleep & Lounge"
        ]
      },
   
    ]
  }
  const women = {
    trigger:"WOMEN",
  
  dropDownData:[
    {
      heading:"Bottom Wear",
      btns:[
        "Shirts",
        "T-shirts",
        "Hoodies",
        "SweatShirts",
        "Traditional",
        "Sleep & Lounge"
      ]
    },
    {
      heading:"Bottom Wear",
      btns:[
        "Shirts",
        "T-shirts",
        "Hoodies",
        "SweatShirts",
        "Traditional",
        "Sleep & Lounge"
      ]
    },
     {
      heading:"Bottom Wear",
      btns:[
        "Shirts",
        "T-shirts",
        "Hoodies",
        "SweatShirts",
        "Traditional",
        "Sleep & Lounge"
      ]
    },
     {
      heading:"Bottom Wear",
      btns:[
        "Shirts",
        "T-shirts",
        "Hoodies",
        "SweatShirts",
        "Traditional",
        "Sleep & Lounge"
      ]
    },
     {
      heading:"Bottom Wear",
      btns:[
        "Shirts",
        "T-shirts",
        "Hoodies",
        "SweatShirts",
        "Traditional",
        "Sleep & Lounge"
      ]
    },
  ]
}
const kids = {
  trigger:"KIDS",

dropDownData:[
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
]
}
const beauty = {
  trigger:"BEAUTY",

dropDownData:[
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
]
}
const others = {
  trigger:"OTHERS",

dropDownData:[
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
  {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
   {
    heading:"Bottom Wear",
    btns:[
      "Shirts",
      "T-shirts",
      "Hoodies",
      "SweatShirts",
      "Traditional",
      "Sleep & Lounge"
    ]
  },
]
}

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
  // const [ismenVisible, setIsmenVisible] = useState(false);
  // console.log("condition : " + ismenVisible)
  // const menToggle = () => {
  //   setIsmenVisible(!ismenVisible)
  // }
  // const [iswomenVisible, setIswomenVisible] = useState(false);
  // console.log("condition : " + iswomenVisible)
  // const womenToggle = () => {
  //   setIswomenVisible(!iswomenVisible)
  // }
  // const [iskidsVisible, setIskidsVisible] = useState(false);
  // console.log("condition : " + iskidsVisible)
  // const kidsToggle = () => {
  //   setIskidsVisible(!iskidsVisible)
  // }
  // const [isbeautyVisible, setIsbeautyVisible] = useState(false);
  // console.log("condition : " + isbeautyVisible)
  // const beautyToggle = () => {
  //   setIsbeautyVisible(!isbeautyVisible)
  // }
  // const [isothersVisible, setIsothersVisible] = useState(false);
  // console.log("condition : " + isothersVisible)
  // const othersToggle = () => {
  //   setIsothersVisible(!isothersVisible)
  // }

  return (
    <nav className='bg-slate-50 flex justify-between sticky top-0 left-0 right-0 items-center w-full p-4'>
      <div className='w-24 '>
      <Link to='/'>  <img className='w-full ' src="./clickylogo.png" alt="" /></Link>
      </div>
  <DropDown data={men}/>
<DropDown data={women}/>
<DropDown data={kids}/>
<DropDown data={beauty}/>
<DropDown data={others}/>
<Link to='/Newarrival'><ul className='text-sm px-2 py-2 md:flex hidden'>NEW ARRIVALS</ul></Link>
        <Link to='/Sale'>   <ul className='text-red-600 text-sm px-2 py-2 md:flex hidden'>SALE</ul></Link>
      {/* <ul className='md:flex text-sm  hidden  gap-4 cursor-pointer '>
        <li onMouseEnter={womenToggle} onMouseLeave={womenToggle} >WOMEN</li>
        {iswomenVisible &&
          <div className='fixed bg-white rounded-lg  h-80 top-16  left-[5%] right-[5%]'>
             <div className='pl-10 pt-5 pb-5 flex gap-16'>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Top Wear</u></h1>
                <li className='mb-2'>Vest</li>
                <li className='mb-2'>Shirts</li>
                <li className='mb-2'>T-Shirts</li>
                <li className='mb-2'>Hoodies</li>
                <li className='mb-2'>SweatShirts</li>
                <li className='mb-2'>traditional</li>
                <li className='mb-2'>Sleep & Lounge</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Bottom Wear</u></h1>
                <li className='mb-2'>Boxer</li>
                <li className='mb-2'>Pants</li>
                <li className='mb-2'>Shorts</li>
                <li className='mb-2'>Jeans</li>
                <li className='mb-2'>Trousers</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Foot Wear</u></h1>
                <li className='mb-2'>Casual Shoes</li>
                <li className='mb-2'>Boots</li>
                <li className='mb-2'>Formal Shoes</li>
                <li className='mb-2'>Sports Shoes</li>
                <li className='mb-2'>Peshawari</li>
                <li className='mb-2'>Sandals</li>
                <li className='mb-2'>Sneakers</li>
                <li className='mb-2'>Sleapers</li>

              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Accessories</u></h1>
                <li className='mb-2'>Wallet</li>
                <li className='mb-2'>Belts & Key Chains</li>
                <li className='mb-2'>Fragrances</li>
                <li className='mb-2'>Eye Wear</li>
                <li className='mb-2'>Bags</li>
                <li className='mb-2'>Watches</li>
              </ul>
            </div>
         </div>
}
        <li onMouseEnter={kidsToggle}  onMouseLeave={kidsToggle}>KIDS</li>
        {iskidsVisible &&
          <div className='fixed bg-white rounded-lg  h-80 top-16  left-[5%] right-[5%]'>
             <div className='pl-10 pt-5 pb-5 flex gap-16'>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Top Wear</u></h1>
                <li className='mb-2'>Vest</li>
                <li className='mb-2'>Shirts</li>
                <li className='mb-2'>T-Shirts</li>
                <li className='mb-2'>Hoodies</li>
                <li className='mb-2'>SweatShirts</li>
                <li className='mb-2'>traditional</li>
                <li className='mb-2'>Sleep & Lounge</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Bottom Wear</u></h1>
                <li className='mb-2'>Boxer</li>
                <li className='mb-2'>Pants</li>
                <li className='mb-2'>Shorts</li>
                <li className='mb-2'>Jeans</li>
                <li className='mb-2'>Trousers</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Foot Wear</u></h1>
                <li className='mb-2'>Casual Shoes</li>
                <li className='mb-2'>Boots</li>
                <li className='mb-2'>Formal Shoes</li>
                <li className='mb-2'>Sports Shoes</li>
                <li className='mb-2'>Peshawari</li>
                <li className='mb-2'>Sandals</li>
                <li className='mb-2'>Sneakers</li>
                <li className='mb-2'>Sleapers</li>

              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Accessories</u></h1>
                <li className='mb-2'>Wallet</li>
                <li className='mb-2'>Belts & Key Chains</li>
                <li className='mb-2'>Fragrances</li>
                <li className='mb-2'>Eye Wear</li>
                <li className='mb-2'>Bags</li>
                <li className='mb-2'>Watches</li>
              </ul>
            </div>
         </div>
}
        <li onMouseEnter={beautyToggle} onMouseLeave={beautyToggle}>BEAUTY</li>
        {isbeautyVisible &&
          <div className='fixed bg-white rounded-lg  h-80 top-16  left-[5%] right-[5%]'>
             <div className='pl-10 pt-5 pb-5 flex gap-16'>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Top Wear</u></h1>
                <li className='mb-2'>Vest</li>
                <li className='mb-2'>Shirts</li>
                <li className='mb-2'>T-Shirts</li>
                <li className='mb-2'>Hoodies</li>
                <li className='mb-2'>SweatShirts</li>
                <li className='mb-2'>traditional</li>
                <li className='mb-2'>Sleep & Lounge</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Bottom Wear</u></h1>
                <li className='mb-2'>Boxer</li>
                <li className='mb-2'>Pants</li>
                <li className='mb-2'>Shorts</li>
                <li className='mb-2'>Jeans</li>
                <li className='mb-2'>Trousers</li>
              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Foot Wear</u></h1>
                <li className='mb-2'>Casual Shoes</li>
                <li className='mb-2'>Boots</li>
                <li className='mb-2'>Formal Shoes</li>
                <li className='mb-2'>Sports Shoes</li>
                <li className='mb-2'>Peshawari</li>
                <li className='mb-2'>Sandals</li>
                <li className='mb-2'>Sneakers</li>
                <li className='mb-2'>Sleapers</li>

              </ul>
              <ul>
                <h1 className='text-lg mb-3 font-bold '> <u>Accessories</u></h1>
                <li className='mb-2'>Wallet</li>
                <li className='mb-2'>Belts & Key Chains</li>
                <li className='mb-2'>Fragrances</li>
                <li className='mb-2'>Eye Wear</li>
                <li className='mb-2'>Bags</li>
                <li className='mb-2'>Watches</li>
              </ul>
            </div>
         </div>
}
        <li onMouseEnter={othersToggle} onMouseLeave={othersToggle}>OTHERS</li>
        {isothersVisible &&
           <div className='fixed bg-white rounded-lg  h-80 top-16  left-[5%] right-[5%]'>
           <div className='pl-10 pt-5 pb-5 flex gap-16'>
            <ul>
              <h1 className='text-lg mb-3 font-bold '> <u>Top Wear</u></h1>
              <li className='mb-2'>Vest</li>
              <li className='mb-2'>Shirts</li>
              <li className='mb-2'>T-Shirts</li>
              <li className='mb-2'>Hoodies</li>
              <li className='mb-2'>SweatShirts</li>
              <li className='mb-2'>traditional</li>
              <li className='mb-2'>Sleep & Lounge</li>
            </ul>
            <ul>
              <h1 className='text-lg mb-3 font-bold '> <u>Bottom Wear</u></h1>
              <li className='mb-2'>Boxer</li>
              <li className='mb-2'>Pants</li>
              <li className='mb-2'>Shorts</li>
              <li className='mb-2'>Jeans</li>
              <li className='mb-2'>Trousers</li>
            </ul>
            <ul>
              <h1 className='text-lg mb-3 font-bold '> <u>Foot Wear</u></h1>
              <li className='mb-2'>Casual Shoes</li>
              <li className='mb-2'>Boots</li>
              <li className='mb-2'>Formal Shoes</li>
              <li className='mb-2'>Sports Shoes</li>
              <li className='mb-2'>Peshawari</li>
              <li className='mb-2'>Sandals</li>
              <li className='mb-2'>Sneakers</li>
              <li className='mb-2'>Sleapers</li>

            </ul>
            <ul>
              <h1 className='text-lg mb-3 font-bold '> <u>Accessories</u></h1>
              <li className='mb-2'>Wallet</li>
              <li className='mb-2'>Belts & Key Chains</li>
              <li className='mb-2'>Fragrances</li>
              <li className='mb-2'>Eye Wear</li>
              <li className='mb-2'>Bags</li>
              <li className='mb-2'>Watches</li>
            </ul>
          </div>
       </div>
}
        <Link to='/Newarrival'><li>NEW ARRIVALS</li></Link>
        <Link to='/Sale'>   <li className='text-red-600'>SALE</li></Link>
      </ul> */}

      <div className='w-80 h-[38px] relative lg:flex hidden items-center justify-center'>
        <input type="search" placeholder='Search for items, brands and inspiration' className=' h-full text-sm w-full  bg-gray-100 pl-3 py-2 rounded placeholder:text-xs' />
        <button className='h-full absolute right-0 w-[45px] bg-amber-300 rounded flex justify-center items-center'>
          <img className='h-6 w-6' src="./search.png" alt="" />
        </button>
      </div>
      <div className='flex lg:gap-3 md:gap-2 gap-1 cursor-pointer items-center'>
      <Link to='/Searchpage'><div className='p-1 size-7 sm:size-9 lg:hidden flex '> <Search /> </div></Link>
        <Link to='/Customercare'> <div className='p-1 size-7 sm:size-8'> <img src="./customercare.png" alt="" /> </div></Link>
        <Link to='/Notification'><div className='p-1 size-7 sm:size-8'> <Bell onMouseEnter={notificationToggle} onMouseLeave={notificationToggle}/> </div></Link> 
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
import React from 'react'
import Deliveryaddressform from '../Components/Shoppingbag/Deliveryaddressform'
import Coupons from '../Components/Shoppingbag/Coupons'
import Bottomnav from '../Components/Bottomnav'

function Shoppingbag() {
  return (
    <>
    <div className='w-full h-20 lg:pl-36  lg:pr-36 md:pl-16  md:pr-16 pl-5 pr-5 flex items-center justify-between '> 
        <img className='h-6 w-28' src="./clickylogo.png" alt="" />
        <h1 className='text-lg font-semibold '>SHOPPING BAG</h1>
        <h1 className='text-lg hidden sm:flex '>100% SECURE</h1>
    </div>
   {/* <div className='w-full pl-60 pr-60 pt-10 pb-10 bg-[#EEEEEE]'>
    <div className='p-4 w-[450PX] h-[600px] bg-white gap-y-4'>
<h1 className='font-bold mb-5'>DELIVERY ADDRESS</h1>
<h1 className='mb-5 text-sm'>NEW ADDRESS</h1>
<div className='mb-5'>
  <h1 className='text-xs mb-1'>FULL NAME</h1>
  <input className='w-full rounded-md h-10 border-[1px] border-black' type="name" />
</div>
<div className='mb-5'>
  <h1 className='text-xs mb-1'>LAST NAME</h1>
  <input className='w-full rounded-md h-10 border-[1px] border-black' type="name" />
</div><div className='mb-5'>
  <h1 className='text-xs mb-1'>MOBILE</h1>
  <input className='w-full rounded-md h-10 border-[1px] border-black' type="name" />
</div>

    </div>
    <div></div>
   </div> */}
    <div  className='w-full justify-center pt-10 pb-10 bg-[#EEEEEE] flex md:gap-4 lg:gap-5'>
    <Deliveryaddressform/>
<Coupons/>
    </div>
    <Bottomnav/>
    </>
  )
}

export default Shoppingbag
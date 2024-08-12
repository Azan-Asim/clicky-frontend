import React from 'react'
import {Puzzle} from 'lucide-react';

function Coupons() {
  return (
    <>
    <div className='flex-col '>
    <div className='bg-white w-full md:w-[350px] lg:w-[400px] h-32 pl-6 pr-6 pt-3 rounded shadow-md '>
        <h1 className='flex justify-left font-bold text-md mb-4'>COUPONS</h1>
        <div className='flex gap-3 items-center  '>
        <Puzzle />
            <div className='flex gap-10 sm:gap-24  items-center text-sm'>
            <h1>Apply Coupons</h1>
        <button className='border-2 rounded-md border-red-400 sm:w-28 w-20 sm:h-10 h-8 font-semibold text-red-400 text-md sm:text-lg'>Apply</button>
        </div>
        </div>
    </div>
    <div className='bg-white w-full md:w-[350px] lg:w-[400px] h-44 pl-6 pr-6 pt-12 rounded shadow-md mt-5 '>
<div className='flex justify-between pb-3'>
    <h1 className='font-bold'>Subtotal</h1>
    <h1>Rs 0</h1>
</div>
<div className='flex justify-between pb-3'>
    <h1 className='font-bold'>Delivery Charges</h1>
    <h1>FREE</h1>
</div>
<div className='flex justify-between pb-3'>
    <h1 className='font-bold'>Total</h1>
    <h1>Rs 0</h1>
</div>
    </div>
    </div>
    </>
  )
}

export default Coupons
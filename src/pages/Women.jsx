import React from 'react'
import Header from '../Components/Header'
import Footertop from '../Components/Footertop'
import Productlist from '../Components/Womencomponents/Productlist'
import { womenTopsList } from '../data/products'
import {ChevronRight} from 'lucide-react';
import Bottomnav from '../Components/Bottomnav'


function Women() {
  return (
    <>

      <Header />
      <div className='bg-[#EEEEEE]'>
        <div className=' w-full bg-[#EEEEEE] text-sm  gap-1 md:flex hidden items-center pl-5 sm:pl-10 sm:gap-5 h-16 '>
          <button>HOME</button> <ChevronRight />
          <button>WOMEN</button><ChevronRight />
          <button>WESTERN WEAR</button><ChevronRight />
          <button>TOPS & TUNICS</button>
        </div>
        <h1 className='flex justify-center w-full p-3 text-2xl bg-white' > TOPS & TONICS</h1>
        <div className='bg-[#EEEEEE] flex align-middle items-center w-full h-12  border-solid border-2 border-black-100 '>
          <button className=' w-24 sm:w-40 sm:text-xl '>Sort</button>
          <button className=' w-24 sm:w-40 sm:text-xl'>Price Range</button>
          <button className=' w-24 sm:w-40 sm:text-xl'>Filter</button>
        </div>
        <div className='flex gap-y-6  justify-around p-8 flex-wrap '>
          {womenTopsList.map((val) => {
            return <Productlist brand={val.brand} title={val.title} image={val.image} rs={val.rs} />
          })}
        </div>
      </div>
      <Bottomnav/>

      <Footertop/>
    </>
  )
}

export default Women
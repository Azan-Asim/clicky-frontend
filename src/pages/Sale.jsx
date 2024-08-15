import React from 'react'
// import Header from '../components/Header'
import Salecard from '../components/Sale/Salecard'
import { saleCard } from '../data/saleCard'
// import Bottomnav from '../components/Bottomnav'

import {
  Link
} from "react-router-dom";

function Sale() {
  return (
    <>
    {/* <Header/> */}
    <div className=' w-full md:p-5 bg-slate-100'><img src="./Home.png" alt="" /></div>
<div className='bg-black w-full text-white'>
<div className='flex gap-6 justify-center p-6'>
<Link to='/Women'><button className='flex rounded-full border-solid border-2 border-white w-24 h-8 text-md md:text-xl md:w-32 md:h-10  justify-around items-center'> <img className='md:h-5 md:w-5 h-4 w-4' src="https://d30fs77zq6vq2v.cloudfront.net/category/20102022/Salwar-Kameez-96442914475.jpg" alt="" />Women</button></Link>
<button className='flex rounded-full border-solid border-2 border-white w-24 h-8 text-md md:text-xl md:w-32 md:h-10  justify-around items-center'> <img className='md:h-5 md:w-5 h-4 w-4' src="https://d30fs77zq6vq2v.cloudfront.net/category/20102022/Salwar-Kameez-96442914475.jpg" alt="" />Men</button>
<button className='flex rounded-full border-solid border-2 border-white w-24 h-8 text-md md:text-xl md:w-32 md:h-10  justify-around items-center'> <img className='md:h-5 md:w-5 h-4 w-4' src="https://d30fs77zq6vq2v.cloudfront.net/category/20102022/Salwar-Kameez-96442914475.jpg" alt="" />Girls</button>
<button className='flex rounded-full border-solid border-2 border-white w-24 h-8 text-md md:text-xl md:w-32 md:h-10  justify-around items-center'> <img className='md:h-5 md:w-5 h-4 w-4' src="https://d30fs77zq6vq2v.cloudfront.net/category/20102022/Salwar-Kameez-96442914475.jpg" alt="" />Boys</button>
</div>
<div className=' md:text-2xl text-xl flex justify-center font-bold'>FOR WOMEN</div>
<div className='flex bg-black  p-7 justify-around gap-y-8 flex-wrap '>
          {saleCard.map((val) => {
            return <Salecard  image={val.image} />
          })}
        </div>
        <div className=' md:text-2xl text-xl flex justify-center font-bold'>FOR MEN</div>
<div  className='flex bg-black  p-7 justify-around gap-y-8 flex-wrap '>
          {saleCard.map((val) => {
            return <Salecard  image={val.image} />
          })}
        </div>
        <div className=' md:text-2xl text-xl flex justify-center font-bold'>FOR GIRLS</div>
<div  className='flex bg-black  p-7 justify-around gap-y-8 flex-wrap '>
          {saleCard.map((val) => {
            return <Salecard  image={val.image} />
          })}
        </div>
        <div className=' md:text-2xl text-xl flex justify-center font-bold'>FOR BOYS</div>
<div  className='flex bg-black  p-7 justify-around gap-y-8 flex-wrap '>
          {saleCard.map((val) => {
            return <Salecard  image={val.image} />
          })}
        </div>
</div>
{/* <Bottomnav/> */}

    {/* <Footertop/> */}
    </>
  )
}

export default Sale
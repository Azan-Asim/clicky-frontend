import React from 'react'
import Header from '../components/layout/Header'
import { Heart } from 'lucide-react'
// import Bottomnav from '../Components/Bottomnav'

function ProductPage() {
  return (
    <>
    <Header/>
    <div className='flex'>
        <div className='grid grid-cols-2 w-[50%] ml-12 mt-6 p-5 gap-y-3 '>
            <img src="./images.jpeg" className='w-[270px] h-96'  alt="" />
            <img src="./images.jpeg" className='w-[270px] h-96' alt="" />
            <img src="./images.jpeg" className='w-[270px] h-96' alt="" />
            <img src="./images.jpeg" className='w-[270px] h-96' alt="" />
            <img src="./images.jpeg" className='w-[270px] h-96' alt="" />
            <img src="./images.jpeg" className='w-[270px] h-96' alt="" />


        </div>
        <div className='w-[50%] ml-12 mt-6 pl-5 pr-20 pt-5 '>
<h1 className='font-bold mb-2 text-lg '>Wej</h1>
<h2 className='mb-2 text-md font-semibold'>Women premium Grey Sneakers</h2>
<h2 className='mb-2 text-sm font-semibold'>Style : WJ-INH-700914-GRY-ORNG</h2>
<h2 className='text-[#D01345] mb-2 text-md font-semibold'>Be the first one to review</h2>
<h2 className='text-[#D01345] mb-2 text-xl font-bold'><s> Rs 4,490</s> Rs 3,490 (-22%)</h2>
<h1 className='mt-4 text-xl font-semibold'>MORE COLORS</h1>
<div className='flex gap-1 mt-2'>
    <img className='w-[49px] h-[60px]' src="./images.jpeg" alt="" />
    <img className='w-[49px] h-[60px]' src="./images.jpeg" alt="" />
    <img className='w-[49px] h-[60px]' src="./images.jpeg" alt="" />
    <img className='w-[49px] h-[60px]' src="./images.jpeg" alt="" />
</div>
<div className='flex gap-10 mt-4 font-bold'>
<h1>Select Size</h1>
<h1 className='text-[#D01345]'> Size Chart</h1>
</div>
<div className='flex gap-5 mt-3 mb-20'>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>36</div>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>37</div>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>38</div>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>39</div>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>40</div>
    <div className='h-[45px] w-[45px] border-2 border-black rounded-lg flex justify-center items-center'>41</div>

</div>
<div className='flex gap-3 mt-5 font-lg font-bold mb-5'>
    <button className='bg-[#D01345] w-72 h-12 text-white  '>ADD TO BAG</button>
    <button className='w-40 h-12 border-2 border-black flex justify-center items-center gap-2'><Heart/>WISHLIST</button>

</div><hr />

        </div>
    </div>
    {/* <Bottomnav/> */}

    </>
  )
}

export default ProductPage
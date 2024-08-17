import React from 'react'
import NewArrival from '../../pages/NewArrival'
import {Link} from "react-router-dom";
function Middlesection() {
  return (
    <>
    <div><h1 className=' flex justify-center pt-5 sm:pt-10 text-xl sm:text-3xl'><b>EXCULSIVE FOR YOU</b></h1>
   <Link to='NewArrival'> <img className='justify-center w-full mt-3' src="./Freshdesigns.jpg" alt="" /></Link>
   <Link to='NewArrival'> <img className='justify-center w-full mt-3 ' src="./Kids.jpg" alt="" /></Link>
   <Link to='NewArrival'><div className='flex justify-center mt-3'>
     <img className=' pr-2.5 w-[50%]' src="./Women.jpg" alt="" />
     <img className='  pl-2.5 w-[50%]' src="./Men.jpg" alt="" />
    </div></Link>
    </div>
    <div>
    <h1 className='  flex justify-center pt-5 pb-5 sm:pt-10 text-xl sm:text-3xl'><b>DEAL ZONE</b></h1>
    <div className=' pl-10 pr-10 grid lg:grid-cols-4 grid-cols-2 justify-items-center gap-4'>
    
    <div className='sm:h-60 sm:w-60 h-36 w-36 bg-red-200    rounded-full text-lg sm:text-3xl  flex  justify-center items-center'> <h1 ><b>MIN <br />60% OFF</b></h1></div>
    <div className='sm:h-60 sm:w-60 h-36 w-36 bg-red-500    rounded-full text-lg sm:text-3xl flex  justify-center items-center'><h1><b>HALF <br /> PRICE STORE</b></h1></div>
    <div className='sm:h-60 sm:w-60 h-36 w-36 bg-orange-600 rounded-full text-lg sm:text-3xl flex justify-center items-center'><h1><b>UNDER <br />RS.799</b></h1></div>
    <div className='sm:h-60 sm:w-60 h-36 w-36 bg-red-300    rounded-full text-lg sm:text-3xl flex  justify-center items-center '><h1><b>MIN <br /> RS.999</b></h1></div>
    </div>
    <img className='mt-10 w-full' src="./Toptrending.jpg" alt="" />
    </div>
    </>
  )
}

export default Middlesection
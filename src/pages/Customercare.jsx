import React from 'react'
// import Header from '../components/layout/Header'
// import Footer from '../components/FooterTop'
// import Bottomnav from '../components/Bottomnav'
import Faq from '../components/Faq'
function Customercare() {
  return (
    <>
    {/* <Header/> */}
    
        <div className='w-full h-20 bg-[#C3355C] justify-center flex items-center text-xl md:text-4xl font-bold text-white'>Hi. How Can We Help?</div>
        <div className='bg-slate-100 w-full  pl-5 pr-5 sm:pl-16 sm:pr-16 '><h1 className='text-lg font-semibold pt-8 pb-4 '>Helps & Topics</h1>
<div className='bg-white w-full h-80 grid grid-cols-2 sm:grid-cols-3 overflow-auto'>
<div className=' flex-col items-center flex justify-center sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8 '><img className='size-12 md:size-14 ' src="./Shippingdelivery.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Shipping & Delivery</h1> 
</div>
<div className='  flex-col items-center flex justify-center  sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8'><img className='size-12 md:size-14 ' src="./Returnreplacement.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Return & Replacement</h1>
</div>
<div className='  flex-col items-center flex justify-center  sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8'><img className='size-12 md:size-14 ' src="./Cancellations.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Cancellations</h1>
</div>
<div className='  flex-col items-center flex justify-center  sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8'><img className='size-12 md:size-14 ' src="./Payment.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Payments & Refund</h1>
</div>
<div className='  flex-col items-center flex justify-center  sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8'><img className='size-12 md:size-14 ' src="./Businessbuld.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Business Iquiry & Bulk Order</h1>
</div>
<div className='  flex-col items-center flex justify-center  sm:justify-center  sm:flex sm:items-center gap-4 md:gap-8'><img className='size-12 md:size-14 ' src="./Accountsetting.png" alt="" />
<h1 className='text-xs sm:text-md lg:text-lg'>Account Settings</h1>
</div>

</div>
<h1 className=' text-2xl sm:text-4xl font-bold pt-8 pb-4 '>Frequently Asked Questions</h1>
{/* <div className='bg-white w-full h-[510px] pt-4 pb-4'> */}
  <Faq/>
    {/* <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>How can i keep track of the status of my order?</div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>Will I get a confirmation call from Clicky after placing order? </div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>How can I cancel my order?</div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>What is the procedure for Returns or Exchange?</div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>I wish to become a seller on Clicky</div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>I can’t sign in to my account.</div> <hr />
    <div className='h-[67px] sm:pl-[30px] sm:pr-[30px] pl-[15px] pr-[15px] text-xs flex items-center'>What are the delivery charges?</div>  */}


{/* </div> */}

        </div>
        {/* <Bottomnav/> */}
    {/* <Footer/> */}
    </>
  )
}

export default Customercare
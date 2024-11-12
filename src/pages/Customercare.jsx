import React from 'react'
//
import Faq from '../components/Faq'
function Customercare() {
  const faq1 = {
    trigger: "How can i keep track of the status of my order?",

    faqData: [
      {
        points: [
          "The ‘My Account’ section in your clicky App will help review the status of your orders, so that you can receive relevant information based on the respective ‘Order Number’.",
        ]
      },


    ]
  }
  const faq2 = {
    trigger: "Will I get a confirmation call from Clicky after placing order? ",

    faqData: [
      {
        points: [
          "No we dont call customers for order confirmation. All new customers are logged in to clicky app via OTP(one time password) so we take this as order confirmation and ship you the order right away.",
        ]
      },


    ]
  }
  const faq3 = {
    trigger: "How can I cancel my order?",

    faqData: [
      {
        points: [
          "In order to cancel your order, please login to clicky app in your my account section. Open the order you want to cancel and you will see an option to cancel the order. Your order can only be cancelled before it reaches the ‘Dispatched’ status in your my account on Clicky app.",
        ]
      },


    ]
  }
  const faq4 = {
    trigger: "What is the procedure for Returns or Exchange?",

    faqData: [
      {
        points:
          "You can return your product easily through clicky app in few seconds. Just follow these steps:",
        subPoints: [
            <li> You can Sign in to your Clicky Account From Here.</li>,
            <li>   Go to my order section</li>,
          <li>  Click on the View order for the specific order you want to place replacement/refund Request</li>,
          <li>   Select refund/replace option from the top and then click one or all items that you want return or replaced.</li>,
          <li>  Select the quantities and reason for replacement/refund</li>,
          <li>  Click on the SAVE button to submit the request</li>,
           
        ]

      },


    ]
  }
  const faq5 = {
    trigger: "I wish to become a seller on Clicky",

    faqData: [
      {
        points: [
          "Fill this form and our team will reach you as soon as possible.",
        ]
      },


    ]
  }
  const faq6 = {
    trigger: "I can’t sign in to my account.",

    faqData: [
      {
        points: [
          "Go to Reset password page. Fill in your registered phone or email id and tap Rest Password. An otp will be sent to your medium either phone or email. Enter the otp and set a new password.",
        ]
      },


    ]
  }
  const faq7 = {
    trigger: "What are the delivery charges?",

    faqData: [
      {
        points: [
          "Delivery charge is the fee that has to be paid for the on-time delivery of a purchased product. Our standard shipping charges are Rs 150 but it keeps on changing based on the number of products purchased. For the best understanding please see the total shipping fee added to your order at checkout page.",
        ]
      },


    ]
  }
  return (
    <>

      <div className='w-full h-20 bg-[#C3355C] justify-center flex items-center text-xl md:text-4xl font-bold text-white'>Hi. How Can We Help?</div>
      <div className='bg-slate-100 w-full  pl-5 pr-5 sm:pl-16 sm:pr-16 '>
        {/* <h1 className='text-lg font-semibold pt-8 pb-4 '>Helps & Topics</h1> */}
        {/* <div className='bg-white w-full h-80 grid grid-cols-2 sm:grid-cols-3 overflow-auto'>
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
        </div> */}
        <h1 className=' text-2xl sm:text-4xl font-bold pt-8 pb-4 '>Frequently Asked Questions</h1>
        <Faq data={faq1} />
        <Faq data={faq2} />
        <Faq data={faq3} />
        <Faq data={faq4} />
        <Faq data={faq5} />
        <Faq data={faq6} />
        <Faq data={faq7} />
      </div>

    </>
  )
}

export default Customercare
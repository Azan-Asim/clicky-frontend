import React from 'react'


function Productlist({title,brand,rs,image}) {
  return (
  
  
  
    
      <div className='  rounded bg-[#EEEEEE] border-solid border-2 border-black-100'>
        <div className='md:h-[524px] md:w-[284px] sm:h-[380px] sm:w-[200px] h-[310px] w-[160px]'><img src={image} className='' alt="" />
          <div className='p-2 text-xs md:text-lg sm:text-md'>
          {brand} <br />
          <b>  {title} </b><br />
           {rs}
          </div>
        </div>
        </div>
         )
        }
        
        export default Productlist
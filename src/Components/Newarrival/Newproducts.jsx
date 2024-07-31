import React from 'react'


function Newproducts({title,brand,rs,image}) {
  return (
  
  
  
    
      <div className=' justify-between rounded bg-[#EEEEEE] border-solid border-2 border-black-100 mb-8'>
        <div className='h-[250px] w-[184px] md:h-[448px] md:w-[284px]  '><img src={image} className=' h-[208px] w-[184px] md:h-[412px] md:w-[284px]' alt="" />
          <div className='p-2 justify-center flex text-lg'>
                   {rs}
          </div>
        </div>
        </div>
         )
        }
        
        export default Newproducts
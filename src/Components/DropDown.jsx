import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const DropDown = ({ data }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='px-2 py-2 md:flex hidden text-sm outline-none'>
                {data.trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white  shadow-lg w-[calc(100vw-50px)]'>
                <div className='p-4 flex items-start justify-start gap-10'>
                    {data.dropDownData.map((dropdown, index) => (
                        <div key={index}>
                            <DropdownMenuLabel className='text-lg font-bold mb-2'>
                                {dropdown.heading}
                            </DropdownMenuLabel>
                            {dropdown.btns.map((btn, btnIndex) => (
                                <DropdownMenuItem key={btnIndex} className='mb-2 hover:bg-gray-100'>
                                    {btn}
                                </DropdownMenuItem>
                            ))}
                        </div>
                    ))}
      
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDown;

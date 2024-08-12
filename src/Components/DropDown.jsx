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
                    {/* <div>
                        <DropdownMenuLabel className='text-lg font-bold mb-2'>{data.dropDownData.heading}</DropdownMenuLabel>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Vest</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Shirts</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>T-Shirts</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Hoodies</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>SweatShirts</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Traditional</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Sleep & Lounge</DropdownMenuItem>
                    </div>

                    <div>
                        <DropdownMenuLabel className='text-lg font-bold mb-2'>Bottom Wear</DropdownMenuLabel>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Boxer</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Pants</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Shorts</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Jeans</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Trousers</DropdownMenuItem>
                    </div>

                    <div>
                        <DropdownMenuLabel className='text-lg font-bold mb-2'>Foot Wear</DropdownMenuLabel>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Casual Shoes</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Boots</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Formal Shoes</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Sports Shoes</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Peshawari</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Sandals</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Sneakers</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Sleeper</DropdownMenuItem>
                    </div>

                    <div>
                        <DropdownMenuLabel className='text-lg font-bold mb-2'>Accessories</DropdownMenuLabel>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Wallet</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Belts & Key Chains</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Fragrances</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Eye Wear</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Bags</DropdownMenuItem>
                        <DropdownMenuItem className='mb-2 hover:bg-gray-100'>Watches</DropdownMenuItem>
                    </div> */}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDown;

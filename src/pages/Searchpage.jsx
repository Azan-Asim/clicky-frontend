

import React from 'react';
import { Search } from 'lucide-react';
import Bottomnav from '../Components/Bottomnav'

import Header from '../Components/Header';

const Searchpage = () => {
    return (
        <>
        <Header/>
        <div className="p-4 md:hidden">

            <div className="mb-4 w-full flex">
                <input
                    type="text"
                    placeholder="Search for item"
                    className=" p-2 border rounded w-[95%]"
                />
            <button className='h-10 w-10 bg-slate-400 flex justify-center rounded-md items-center'><Search/></button>
            </div>


            <div className="mb-8">
                <h2 className="font-semibold mb-2">Popular Searches</h2>
                <div className="flex flex-wrap gap-2">
                    {['Men jackets', 'Women Sweater', 'Activewear', 'Women sport shoes', 'Men formal Shoes', 'Girls dresses', 'Boys shirts', 'Stone', 'Sneakers', 'Unstitch', 'Women kurta', 'Duppats', 'shawls', 'Chunky sneakers', 'Women tops', 'Flats', 'Pump', 'Women coats'].map(item => (
                        <button key={item} className="bg-gray-200 px-4 py-2 rounded">
                            {item}
                        </button>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="font-semibold mb-2">Hot Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4  ">
                    {[{
                        image: './Shoes.jpg',
                        price: 'Rs 2,999'
                    }, {
                        image: './Shoes.jpg',
                        price: 'Rs 12,600'
                    }, {
                        image: './Shoes.jpg',
                        price: 'Rs 999'
                    }, {
                        image: './Shoes.jpg',
                        price: 'Rs 6,299'
                    }, {
                        image: './Shoes.jpg',
                        price: 'Rs 1,499'
                    }].map((product, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={product.image} alt="Product" className="w-32  h-40" />
                            <p className="">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <Bottomnav/>
            </>
    );
};

export default Searchpage;

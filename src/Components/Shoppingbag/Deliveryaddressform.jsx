import React from 'react';

const Deliveryaddressform = () => {
  return (
  
<div className='flex-col hidden md:flex'>
      <div className=" lg:w-[550px] w-[400px]  p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Delivery Address</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Complete Address (H #, St # & Landmark)</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Please Select Your City</option>
              <option>City1</option>
              <option>City2</option>
              <option>City3</option>
              {/* Add more cities as needed */}
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Mark as default address</label>
          </div>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
            Save Address
          </button>
        </form>
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Payment Type</h3>
          <div className="flex items-center mb-2">
            <input type="radio" name="paymentType" value="COD" className="mr-2" defaultChecked />
            <label className="text-gray-700">Cash On Delivery</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="paymentType" value="Card" className="mr-2" />
            <label className="text-gray-700">Credit/Debit Card</label>
          </div>
        </div>
      </div>
      <div className='lg:w-[550px] w-[400px]'>
        <button className='  w-full h-12 font-bold bg-red-500 mt-5 rounded shadow-md mb-5'>ADD SOME ITEMS TO BAG</button>
        <p className='w-full text-gray-400 text-md'>By placing your order you agree to our Terms & Conditions, privacy and returns policies . You also consent to some of your data being stored by Clicky, which may be used to make future shopping experiences better for you.</p>
      </div>
      </div>
  
  );
};

export default Deliveryaddressform;

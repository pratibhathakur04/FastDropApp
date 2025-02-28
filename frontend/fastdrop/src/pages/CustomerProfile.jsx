import React from 'react';

const CustomerProfile = () => {
  return (
    <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold">Customer Profile</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" placeholder='Enter Your Name' className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" placeholder='Enter Your Email' className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" placeholder='Enter  Your Address' className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Update Profile</button>
      </form>
    </div>
    </div>
  );
};

export default CustomerProfile;
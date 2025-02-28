import React from 'react';

const DeliveryScheduling = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Schedule Home Delivery</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Delivery Date</label>
          <input type="date" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Delivery Time</label>
          <input type="time" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule Delivery</button>
      </form>
    </div>
  );
};

export default DeliveryScheduling;
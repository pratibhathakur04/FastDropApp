import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

const orderSteps = [
  { time: "9:30 AM", status: "Order Placed", description: "Your order #23456 was placed for delivery." },
  { time: "9:30 AM", status: "Product in cart", description: "Your order is picked from the store and added to the cart." },
  { time: "9:30 AM", status: "Processing", description: "Your order is being packed and getting ready for delivery." },
  { time: "9:30 AM", status: "On the way", description: "Your order is on the way to delivery. You can track it." },
  { time: "9:30 AM", status: "Delivered", description: "Your order has been delivered to your doorstep." }
];

const OrderTracking = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center bg-red-500 text-white p-4">
        <FaArrowLeft className="text-xl cursor-pointer" />
        <h2 className="ml-4 text-xl font-semibold">Order Delivery Process</h2>
      </div>

      {/* Order Timeline */}
      <div className="p-4">
        {orderSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 mb-4">
            <FaCheckCircle className="text-red-500 text-xl" />
            <div>
              <p className="text-gray-800 font-semibold">{step.status}</p>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
            <p className="text-gray-400 text-xs">{step.time}</p>
          </div>
        ))}
      </div>

      {/* Map Section (Static) */}
      <div className="relative">
        <img src="/map.png" alt="Delivery Map" className="w-full h-56 object-cover" />
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white p-3 rounded-lg flex items-center">
          <img src="/delivery-person.jpg" alt="Delivery Person" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-sm font-semibold">Thomas McSmith</p>
            <p className="text-xs">+1 (654) 765 3309</p>
          </div>
          <FaPhoneAlt className="text-green-400 text-xl ml-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;

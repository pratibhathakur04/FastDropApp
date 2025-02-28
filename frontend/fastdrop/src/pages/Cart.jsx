
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6"; // Ensure react-icons is installed
import vegetablesImg from "../assets/vegetables.jpg";
import fruitjamImg from "../assets/fruitjam.png";
import OnionImg from "../assets/onion.jpg";
import radishImg from "../assets/reddish.jpg";
import sugarcaneImg from "../assets/sugarcane.jpeg";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Fresh Vegetables", price: "$56", image:vegetablesImg },
        { id: 2, name: "Mix Fruit Jam", price: "$66", image: fruitjamImg},
        { id: 3, name: "Onions", price: "$16", image: OnionImg },
        { id: 4, name: "Radish", price: "$60", image:radishImg},
        { id: 5, name: "sugarcane", price: "$32", image:sugarcaneImg },
  ]);
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const serviceFee = 42;
  const total = subtotal + tax + serviceFee;

  return (
    <div className="max-w-md mx-auto p-10 bg-white shadow-lg rounded-lg m-5" >
      <h2 className="text-xl font-semibold mb-2">My Cart ({cart.length})</h2>
      <div className="border-b pb-2">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-3">
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
            <div className="flex-1 ml-3">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">₹ {item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <FaMinus size={12} />
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
        <p className="flex justify-between text-gray-700">
          <span>Subtotal:</span> <span>₹ {subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-gray-700">
          <span>Tax (5%):</span> <span>₹ {tax.toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-gray-700">
          <span>Service Fee:</span> <span>₹ {serviceFee.toFixed(2)}</span>
        </p>
        <hr className="my-2" />
        <p className="flex justify-between text-lg font-semibold">
          <span>Total:</span> <span>₹ {total.toFixed(2)}</span>
        </p>
      </div>

      <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg">
        Checkout
      </button>
    </div>
  );
};

export default Cart;

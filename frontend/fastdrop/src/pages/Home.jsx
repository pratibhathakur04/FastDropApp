import React from 'react';
import { useState, useEffect } from "react";

import vegetablesImg from "../assets/vegetables.jpg";
import fruitjamImg from "../assets/fruitjam.png";
import OnionImg from "../assets/onion.jpg";
import radishImg from "../assets/reddish.jpg";
import sugarcaneImg from "../assets/sugarcane.jpeg";
import rice from "../assets/rice.jpg";
import spices from "../assets/spices1.webp";
import sugar from "../assets/sugar.jpeg";
import pulses from "../assets/pulses.webp";
import achar from "../assets/acahar.jpeg";
import flour from "../assets/flour.webp";
import Testimonial from './testimonial';
import Footer from '../components/footer';
const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 15,
    minutes: 25,
    seconds: 8,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    { id: 1, name: "Fresh Vegetables", price: "$56", image:vegetablesImg },
    { id: 2, name: "Mix Fruit Jam", price: "$66", image: fruitjamImg},
    { id: 3, name: "Onions", price: "$16", image: OnionImg },
    { id: 4, name: "Radish", price: "$60", image:radishImg},
    { id: 5, name: "sugarcane", price: "$32", image:sugarcaneImg },
    { id: 6, name: "rice", price: "$32", image:rice},
    { id: 7, name: "flour", price: "$32", image: flour},
    { id: 8, name: "achar", price: "$32", image:achar },
    { id: 9, name: "spices", price: "$32", image:spices },
    { id: 10, name: "sugar", price: "$32", image:sugar },
    { id: 11, name: "pulses", price: "$32", image:pulses },
  ];

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-center p-2 text-sm">
        Get Up to 70% Discount Everyday
      </div>

      {/* Navbar */}
    

      {/* Hero Section */}
      <section className="bg-orange-300 p-10 text-center">
        <h2 className="text-xl font-semibold text-red-500">Your Comfort Is Our Business</h2>
        <h1 className="text-4xl font-bold mt-2">We Bring the Store to Your Door</h1>
        <p className="text-lg text-gray-700 mt-2">NOW! GET 25% OFF ON ALL ITEMS</p>
        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">
          Shop Now
        </button>
      </section>

      {/* Deal of the Day */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold">DEAL OF THE DAY</h2>
        <p className="text-gray-600">Flat Discounts – "Get 10% OFF on purchases above ₹1000!"</p>
        
        <div className="flex justify-center space-x-4 text-2xl font-semibold mt-4">
          <span>{timeLeft.days} <span className="text-sm">Days</span></span>
          <span> : </span>
          <span>{timeLeft.hours} <span className="text-sm">Hours</span></span>
          <span> : </span>
          <span>{timeLeft.minutes} <span className="text-sm">Minutes</span></span>
          <span> : </span>
          <span>{timeLeft.seconds} <span className="text-sm">Seconds</span></span>
        </div>
      </section>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 py-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md text-center">
            <img src={product.image} alt={product.name} className="h-32 mx-auto" />
            
            
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-green-600 font-bold">{product.price}</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700" >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
      <Testimonial/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
     
  );
};

export default Home;

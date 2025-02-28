import React from "react";
import blackcardamom from'../assets/blackcardamom.webp';
import chillipowder from'../assets/chilli powder.jpeg';
import TurmericPowder from'../assets/TurmericPowder.jpeg';
import FennelSeed from'../assets/FennelSeed.jpeg';
import veg from'../assets/Guava.png';
import melon from'../assets/melon.jpeg';
import avocado from'../assets/avocado.jpeg';
import graps from'../assets/graps.jpeg';
import banana from'../assets/banana.jpeg';
import kiwi from'../assets/kiwi.jpeg';
import mango from'../assets/mango.jpeg';
import watermelon from'../assets/watermelon.jpeg';




const products = [
  { id: 1, name: "blackcardamom", price: "$0.99", image: blackcardamom },
  { id: 2, name: "chilli powder ", price: "$1.29", image: chillipowder },
  { id: 3, name: "TurmericPowder", price: "$2.49", image: TurmericPowder },
  { id: 4, name: "FennelSeed", price: "$1.99", image: FennelSeed },


  { id: 5, name: "Guava", price: "$0.99", image: veg },
  { id: 6, name: "Melon", price: "$1.29", image: melon },
  { id: 7, name: "Avocado", price: "$2.49", image: avocado },
  { id: 8, name: "Grapes", price: "$1.99", image: graps },
  { id: 9, name: "Banana", price: "$0.59", image: banana},
  { id: 10, name: "Kiwi", price: "$1.89", image: kiwi },
  { id: 11, name: "mango", price: "$3.99", image: mango },
  { id: 12, name: "watermelon", price: "$2.79", image: watermelon},
];

const Catalog = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Promotional Banner */}
      <div className="bg-red-500 text-white text-center p-4 rounded-lg mb-6">
        <h2 className="text-3xl font-bold">Super Save</h2>
        <p className="text-lg">Get up to <span className="font-semibold">30% Off</span> on Fruits & Vegetables</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center relative">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Sale
            </span>
            <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Promotional Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg text-center">
        <p className="text-xl font-semibold">Bonus Savings: Get <span className="text-red-500">$500</span> in rewards!</p>
        <p className="text-gray-600">Free delivery for orders within a 7km radius.</p>
      </div>
    </div>
  );
};

export default Catalog;

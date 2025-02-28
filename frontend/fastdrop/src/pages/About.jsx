import React from 'react';
import aimg from "../assets/aboutimg.jpeg";
// function About() {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//         <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
//           <p className="text-gray-600 leading-relaxed mb-4">
//             Welcome to our platform! We are dedicated to providing the best services
//             and ensuring customer satisfaction. Our team consists of passionate
//             professionals who strive to make a difference through innovation and
//             technology.
//           </p>
//           <p className="text-gray-600 leading-relaxed mb-4">
//             Our mission is to create meaningful experiences and deliver high-quality
//             solutions that cater to our users' needs. We believe in continuous
//             learning and improvement to stay ahead in the industry.
//           </p>
//           <div className="mt-6">
//             <a
//               href="/contact"
//               className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default About; 

const About = () => {
  return (
    <div className="bg-green-50 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500 mb-4">About Our Grocery Store</h1>
        <p className="text-lg text-gray-600">
          Get fresh groceries delivered to your doorstep with ease and convenience.
        </p>
      </section>

      {/* Image Section */}
      <div className="flex justify-center mt-8">
        <img
          src={aimg}
          alt="Fresh Groceries"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Services Section */}
      <section className="mt-12">
        <h2 className="text-3xl text-center font-semibold text-red-500">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-red-500">Wide Range of Products</h3>
            <p className="text-gray-600 mt-2">Fresh fruits, vegetables, dairy, and more.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-red-500">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">Get groceries delivered within hours.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-red-500">Best Prices</h3>
            <p className="text-gray-600 mt-2">Affordable rates with great discounts.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-red-500">What Our Customers Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">"Amazing service! Fresh products and quick delivery."</p>
            <span className="block mt-4 text-red-500 font-bold">- A Happy Customer</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">"Best grocery delivery experience I've had!"</p>
            <span className="block mt-4 text-red-500 font-bold">- Another Customer</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-red-500">Become a Shopper</h2>
        <p className="text-gray-600 mt-2">Join us today and enjoy hassle-free grocery shopping.</p>
        <button className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 ">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default About;
  
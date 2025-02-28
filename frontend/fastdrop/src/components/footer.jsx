 import React from "react";
 import visa from "../assets/visa.jpg";
import mastercard from "../assets/mastercard.png";
import phonepay from "../assets/phonepay.png";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-light py-6">
//       <div className="container mx-auto text-center flex justify-evenly">
//         <h4 className="text-lg font-semibold">Chit Chat</h4>
//         <p className="text-sm mt-2">© 2025 Chit Chat. All Rights Reserved.</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <NavLink
//             to="/privacyPolicy"
//             className="text-gray-200 hover:text-green-500 transition duration-300"
//           >
//             Privacy Policy
//           </NavLink>
//           <NavLink
//             to="/termsOfService"
//             className="text-gray-200 hover:text-green-500 transition duration-300"
//           >
//             Terms of Service
//           </NavLink>
//           <NavLink
//             to="/contactUs"
//             className="text-gray-200 hover:text-green-500 transition duration-300"
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-red-400">FastDrop</h2>
            <p className="text-white-500">Fresh products</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 ">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 w-72 rounded-md text-gray-800 "
            />
            <button className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Why People Like Us */}
          <div>
            <h3 className="text-lg font-semibold">Why People Like us!</h3>
            <p className="text-sm mt-2">
              Typesetting, remaining essentially unchanged. It was popularized in
              the 1960s with Aldus PageMaker including Lorem Ipsum.
            </p>
            <button className="mt-4 px-4 py-2 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-gray-800">
              Read More
            </button>
          </div>

          {/* Shop Info */}
          <div>
            <h3 className="text-lg font-semibold">Shop Info</h3>
            <ul className="mt-2 space-y-2">
              <li>About Us </li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="mt-2 space-y-2">
              <li>My Account</li>
              <li>Shop Details</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>International Orders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2">Address: 1429 Netus Rd, NY 48247</p>
            <p>Email: Example@gmail.com</p>
            <p>Phone: +0123 4567 8910</p>
            <p className="mt-2 font-semibold">Payment Accepted</p>
            <div className="flex space-x-2 mt-2">
              <img src={visa} alt="Visa" className="h-8" />
              <img src={mastercard} alt="MasterCard" className="h-8" />
              <img src={phonepay} alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-600 pt-4">
          <p>
            © <span className="text-yellow-400">Your Site Name</span>, All rights reserved.
          </p>
        
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full cursor-pointer shadow-md">
        ↑
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-green-600 text-center">Checkout</h2>

      {/* Returning Customer & Coupon */}
      <div className="mt-4 space-y-2">
        <button className="w-full bg-red-100 text-red-500 py-2 rounded-lg text-sm">
          Returning Customer? Click here to Login
        </button>
        <button className="w-full bg-red-100 text-red-500 py-2 rounded-lg text-sm">
          Have a coupon? Click here to enter code
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Billing Details */}
        <div>
          <h3 className="text-xl font-semibold">Billing Details</h3>
          <form className="space-y-4 mt-4">
            <input type="text" placeholder="First Name*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="Last Name*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="Company Name (optional)" className="w-full border p-2 rounded-lg" />
            <select className="w-full border p-2 rounded-lg">
              <option>Country / Region</option>
              <option>India</option>
              <option>USA</option>
            </select>
            <input type="text" placeholder="Street Address*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="Town / City*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="State*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="ZIP*" className="w-full border p-2 rounded-lg" />
            <input type="text" placeholder="Phone*" className="w-full border p-2 rounded-lg" />
            <input type="email" placeholder="Email Address*" className="w-full border p-2 rounded-lg" />
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Create an Account</span>
            </label>
          </form>

          {/* Additional Information */}
          <h3 className="text-xl font-semibold mt-6">Additional Information</h3>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="w-full border p-2 rounded-lg mt-2"
          ></textarea>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-xl font-semibold">Your Order</h3>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <div className="flex justify-between py-2">
              <span>Vegetable Salad x1</span> <span>$15.69</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Cooked Seafoods x1</span> <span>$20.50</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span> <span>$36.19</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span> <span>$36.19</span>
            </div>
          </div>

          {/* Payment Method */}
          <h3 className="text-xl font-semibold mt-6">Payment Method</h3>
          <div className="bg-gray-100 p-4 rounded-lg mt-4 space-y-3">
            {["credit-card", "paypal", "google-pay", "apple-pay", "cash"].map((method) => (
              <label
                key={method}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="w-4 h-4"
                />
                <span className="capitalize">{method.replace("-", " ")}</span>
              </label>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Your personal data will be used to process your order, support your experience on this website, 
            and for other purposes described in our privacy policy.
          </p>

          {/* Place Order Button */}
          <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-lg text-lg font-semibold">
            Place Order →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

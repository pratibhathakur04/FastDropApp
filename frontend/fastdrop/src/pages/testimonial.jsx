import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    review: "Fresh and quality groceries delivered on time. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sanya Kapoor",
    review: "Amazing service and great prices. The fruits and veggies were super fresh!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rajesh Verma",
    review: "Very convenient and fast delivery. Best online grocery store experience!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-red-500">What Our Customers Say</h2>
        <p className="text-gray-600 mt-2">Trusted by thousands of happy customers</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-semibold text-red-500">{testimonial.name}</h3>
              <p className="mt-2 text-gray-600">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

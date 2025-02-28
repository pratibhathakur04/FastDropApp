import React from 'react';
import {   Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import Signup from './pages/singup';
import ContactUsPage from './pages/contactus';
import GroceryCatalog from './pages/GroceryCatalog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import DeliveryScheduling from './pages/DeliveryScheduling';
import OrderTracking from './pages/OrderTracking';
import CustomerProfile from './pages/CustomerProfile';
import AdminPage from './pages/AdminPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/About';
import Testimonial from './pages/testimonial';
function App (){
  return (
    <>
    
    
    <header>
      <Navbar/>
    </header>

    <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/contact" element={< ContactUsPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={< Signup/>} />
        <Route path="/catalog" element={<GroceryCatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<DeliveryScheduling />} />
        <Route path="/tracking" element={<OrderTracking />} />
        <Route path="/profile" element={<CustomerProfile />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/About" element={<About/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
       
    
    
    </>
  );
};

export default App;
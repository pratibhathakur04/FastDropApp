

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from '../assets/loginbg.avif'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Store email in localStorage if Remember Me is checked
    if (rememberMe) {
      localStorage.setItem('email', email);
    }

    try{
      const response = await axios.post("/api/auth/login"
        ,{
        
        email:email,
        password:password,
      })
      alert(response.data.Messsage);
      navigate("/login");
    }catch(error){
      console.log(error) ;
         alert(error.response.data.Messsage);
    
  };

    // Example of redirecting after login (you can change '/dashboard' to any route)
    navigate('/home');
  };

  return (
    
    <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center " >
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
            id='btn'
          >
            Login
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Not registered? <a href="/signup" className="text-red-500 hover:text-red-700">Sign up</a>
          </p>
        </form>
      </div>
    </div>
   
  );
};

export default LoginPage;


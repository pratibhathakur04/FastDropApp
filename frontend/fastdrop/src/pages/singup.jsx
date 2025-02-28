import React, { useState } from "react";

const Signup = () => {
  const [signupData, setSignupData] = useState({ username: "", password: "" });

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(signupData));
    alert("Signup successful! You can now login.");
    setSignupData({ username: "", password: "" });
  };

  return (
      <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold text-center mb-4">Signup Page</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Username"
          value={signupData.username}
          onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
         className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "required
        />
        <br />
        <button type="submit" className="mt-2  w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;

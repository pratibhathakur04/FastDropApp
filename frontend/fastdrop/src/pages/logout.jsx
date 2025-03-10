import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const LogoutPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async() => {
   try{
    const response = await axios.post("/api/auth/logout");
    alert(response.data.message);
    navigate("/login");
   }catch(error){
    console.log(error);
  alert(error.response.data.message);}
  };

  return (
    <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">Log Out</h2>

        {!showConfirm ? (
          <>
            <p className="text-lg mb-4">Are you sure you want to log out?</p>
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Yes, Log Out
            </button>
            <br />
            <button
              onClick={() => navigate("/chat")} // Redirect to a different page, e.g., dashboard
              className="mt-2 text-blue-500 hover:underline"
            >
              No, Take Me Back
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mb-4">
              Are you absolutely sure you want to log out?
            </p>
            <div className="flex justify-around">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
              >
                Yes, Log Out
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  navigate("/chat");
                }}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
              >
                No, Stay Logged In
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogoutPage;

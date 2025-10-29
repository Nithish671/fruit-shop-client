import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {

    const navigate = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Your Orders</h1>
        <p className="text-gray-600 text-lg">You don't have any orders!</p>
        <button onClick={() => navigate("/fruit-shop")} className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition">
          Shop Now
        </button>
      </div>
    </main>
  );
};

export default Orders;

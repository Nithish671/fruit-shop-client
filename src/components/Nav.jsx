import React from 'react'
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition">FruitMart</Link>
            <div className="flex items-center space-x-6">
                <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
                {!user && (
                    <>
                        <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
                        <Link to="/signup" className="hover:text-yellow-300 transition">Signup</Link>
                    </>
                )}
                {user && (
                    <>
                        <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
                        <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
                        <Link to="/orders" className="hover:text-yellow-300 transition">Orders</Link>
                    </>
                )}
                <Link to="/fruit-shop" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition">Fruit Shop</Link>
            </div>
        </nav>
    );
};

export default Nav;

import React from 'react'
import { Link } from "react-router-dom";

const Home = ({ setUser, user }) => {
    return (
        <main className="flex flex-col items-center justify-center h-[100vh] text-center bg-gradient-to-b from-yellow-50 to-yellow-100">
            {user ? (
                <>
                    <h3 className="text-2xl font-semibold text-gray-800 bg-white shadow-md px-6 py-4 rounded-lg">
                        Logged in as: <span className="text-yellow-600 font-bold">{user.name}</span>
                    </h3>
                    <button onClick={() => setUser(null)} className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition">Log out</button>
                </>
            ) : (
                <div className="space-x-6">
                    <Link to="/login" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition">Login</Link>
                    <Link to="/signup" className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition">Signup</Link>
                </div>
            )}
        </main>
    );
};

export default Home;

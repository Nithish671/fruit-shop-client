import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center py-12">
            {user && (
                <h2 className="text-3xl font-bold text-indigo-700 mb-8">
                    Welcome, {user.name}
                </h2>
            )}

            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col space-y-4 items-center">
                <Link
                    to="/"
                    className="w-full text-center bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                    Home
                </Link>

                {!user && (
                    <>
                        <Link
                            to="/login"
                            className="w-full text-center bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="w-full text-center bg-emerald-500 text-white font-semibold py-2 rounded-lg hover:bg-emerald-600 transition"
                        >
                            Signup
                        </Link>
                    </>
                )}

                <Link
                    to="/orders"
                    className="w-full text-center bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition"
                >
                    Orders
                </Link>

                <Link
                    to="/fruit-shop"
                    className="w-full text-center bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
                >
                    Fruit Shop
                </Link>
            </div>
        </main>
    );
};

export default Dashboard;

import React, { useState } from 'react'
import api from "../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", { email, password });
            setMessage(res.data.msg);
            setUser(res.data.user);

            navigate("/dashboard");
        } catch (err) {
            setMessage(err.response?.data?.msg || "Error");
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
            {user ? (
                <h1 className="text-2xl font-semibold text-gray-800 bg-white px-6 py-3 rounded-lg shadow-md">
                    Logged in as <span className="text-yellow-600 font-bold">{user.name}</span>
                </h1>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition"
                        >
                            Login
                        </button>
                    </form>
                    {message && (
                        <p className="text-center mt-4 text-sm text-gray-700 font-medium">{message}</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default Login;

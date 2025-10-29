import React, { useState } from "react";
import api from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Signup = ({ user, setUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", { name, email, password });
            setMsg(res.data.msg);
            setUser(res.data.user);
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setMsg(err.response?.data?.msg || "Error");
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
            {user ? (
                <h1 className="text-2xl font-semibold text-gray-800 bg-white px-6 py-3 rounded-lg shadow-md">
                    Logged in as <span className="text-green-600 font-bold">{user.name}</span>
                </h1>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                        >
                            Signup
                        </button>
                    </form>
                    {msg && (
                        <p className="text-center mt-4 text-sm text-gray-700 font-medium">{msg}</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default Signup;

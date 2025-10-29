import React, { useEffect, useState } from "react";
import api from "../utils/axiosInstance";

const FruitShop = () => {
  const [fruits, setFruits] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/fruit/${editingId}`, form);
      } else {
        await api.post("/fruit", form);
      }
      await fetchFruits();
      setForm({ name: "", price: "", stock: "" });
      setEditingId(null);
    } catch (err) {
      console.log(err);
      alert("Error saving fruit");
    }
  };

  const fetchFruits = async () => {
    const res = await api.get("/fruit");
    setFruits(res.data);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const handleEdit = (fruit) => {
    setForm({ name: fruit.name, price: fruit.price, stock: fruit.stock });
    setEditingId(fruit._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      await api.delete(`/fruit/${id}`);
      fetchFruits();
    }
    setEditingId(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Fruit Shop
      </h1>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {editingId ? "Edit Fruit" : "Add Fruit"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={form.name}
            placeholder="Fruit name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="number"
            value={form.price}
            placeholder="Fruit price"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="number"
            value={form.stock}
            placeholder="Fruit stock"
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {editingId ? "Update Fruit" : "Add Fruit"}
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Fruits List
        </h2>

        {fruits.length === 0 ? (
          <p className="text-center text-gray-500">No fruits available!</p>
        ) : (
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-orange-100 text-gray-700">
                <th className="p-3 border">Fruit Name</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Stock</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fruits.map((fruit) => (
                <tr
                  key={fruit._id}
                  className="hover:bg-orange-50 transition-colors"
                >
                  <td className="p-3 border">{fruit.name}</td>
                  <td className="p-3 border">{fruit.price}</td>
                  <td className="p-3 border">{fruit.stock}</td>
                  <td className="p-3 border space-x-3">
                    <button
                      onClick={() => handleEdit(fruit)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(fruit._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default FruitShop;

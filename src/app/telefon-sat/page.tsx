"use client"
import React, { useState } from 'react';
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";

function AddPhone() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API or updating state
    console.log({ image, name, price, description });
    // Here you might want to reset the form or redirect the user
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-4">Add a New Phone</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Phone
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddPhone;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="logo text-xl font-bold">Second Hand Phones</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/telefon-sat" className="hover:text-gray-400">Sell Your Phone</a></li>
        <li><a href="/add" className="hover:text-gray-400">Add Phone</a></li>
        <li><a href="/listings" className="hover:text-gray-400">Listings</a></li> {/* New link */}
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for phones..."
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
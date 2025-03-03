import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [city, setCity] = useState("");
  const [property, setProperty] = useState("");

  const handleSearch = () => {
    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }
    console.log(`Searching for ${property || "all properties"} in ${city}`);
    // Add search logic here
  };

  return (
    <nav className="bg-blue-700 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Shrishakti Builders
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white text-black rounded-lg px-3 py-1 space-x-2">
          <input
            type="text"
            placeholder="Enter city..."
            className="px-2 py-1 w-32 outline-none bg-transparent border-r border-gray-300"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Search property..."
            className="px-2 py-1 w-40 outline-none bg-transparent"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded flex items-center"
          >
            <FiSearch className="mr-1" /> Search
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/buy" className="hover:text-gray-300">Buy</Link>
          <Link to="/rent" className="hover:text-gray-300">Rent</Link>
          <Link to="/sell" className="hover:text-gray-300">Sell</Link>
          <Link to="/postproperty" className="hover:text-gray-300">Post Property</Link>
          <div className="flex space-x-3">
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">Login</Link>
            <Link to="/Register" className="bg-yellow-400 text-blue-800 px-3 py-1 rounded">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 py-4 absolute top-full left-0 w-full">
          <div className="container mx-auto flex flex-col space-y-4 text-center">
            <Link to="/buy" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Buy</Link>
            <Link to="/rent" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Rent</Link>
            <Link to="/sell" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sell</Link>
            <Link to="/postproperty" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Post Property</Link>
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded mx-auto" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/create-account" className="bg-yellow-400 text-blue-800 px-3 py-1 rounded mx-auto" onClick={() => setMenuOpen(false)}>
              Create Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

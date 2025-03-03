import { useState } from "react";

function PostProperty() {
  const [formData, setFormData] = useState({
    saleType: "sell",
    name: "",
    contact: "",
    propertyType: "",
    price: "",
    isNegotiable: false,
    address: "",
    rentAmount: "",
    rentStartDate: "",
  });

  const propertyOptions = ["1BHK", "2BHK", "3BHK", "Plots", "Villa", "MIDC Area"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.contact || !formData.propertyType || !formData.price || !formData.address) {
      alert("Please fill all required fields.");
      return;
    }

    if (formData.saleType === "rent" && (!formData.rentAmount || !formData.rentStartDate)) {
      alert("Please enter rent amount and start date.");
      return;
    }

    console.log("Property Details Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Post Your Property</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sell / Rent Selection */}
          <div>
            <label className="block font-medium mb-2">Property For</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="saleType"
                  value="sell"
                  checked={formData.saleType === "sell"}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>Sell</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="saleType"
                  value="rent"
                  checked={formData.saleType === "rent"}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>Rent</span>
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your contact number"
              required
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block font-medium">Property Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select Property Type</option>
              {propertyOptions.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter the price"
              required
            />
          </div>

          {/* Negotiable Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isNegotiable"
              checked={formData.isNegotiable}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label className="font-medium">Price Negotiable</label>
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter property address"
              required
            />
          </div>

          {/* Rent Amount & Start Date (Only for Rent) */}
          {formData.saleType === "rent" && (
            <>
              <div>
                <label className="block font-medium">Rent Amount</label>
                <input
                  type="number"
                  name="rentAmount"
                  value={formData.rentAmount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter rent amount"
                  required={formData.saleType === "rent"}
                />
              </div>

              <div>
                <label className="block font-medium">Rent Start Date</label>
                <input
                  type="date"
                  name="rentStartDate"
                  value={formData.rentStartDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required={formData.saleType === "rent"}
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Post Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostProperty;

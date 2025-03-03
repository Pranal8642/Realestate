import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    city: "",
    userType: "buyer",
    propertyType: "",
  });

  const propertyOptions = ["1BHK", "2BHK", "3BHK", "Plots", "Villa", "MIDC Area"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "seller" : "buyer") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.password || !formData.city || !formData.propertyType) {
      alert("Please fill all fields.");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Mobile Number */}
          <div>
            <label className="block font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter a strong password"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your city"
              required
            />
          </div>

          {/* Buyer/Seller Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="userType"
              checked={formData.userType === "seller"}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label className="font-medium">Are you a Seller?</label>
          </div>

          {/* Property Type Dropdown */}
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
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

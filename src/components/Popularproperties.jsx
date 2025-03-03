import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Property Card Component
// eslint-disable-next-line react/prop-types
const PropertyCard = ({ image, title, price, location }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform w-72 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-green-600 font-semibold mt-2">{price}</p>
    </div>
  );
};

// Popular Properties Component
const PopularProperties = () => {
  const scrollRef = useRef(null);

  const properties = [
    { image: "/public/3bhk.png", title: "Luxury 3BHK Apartment", location: "Rajapeth, Amravati", price: "₹45 Lakhs" },
    { image: "/public/2bhk.png", title: "Modern 2BHK Flat", location: "Gadge Nagar, Amravati", price: "₹35 Lakhs" },
    { image: "/public/villa.png", title: "Spacious Villa", location: "Sai Nagar, Amravati", price: "₹1.2 Crores" },
    { image: "/public/1bhk.png", title: "Affordable 1BHK Apartment", location: "Dastur Nagar, Amravati", price: "₹25 Lakhs" },
    { image: "/public/industrial.png", title: "Commercial Space for Rent", location: "MIDC, Amravati", price: "₹30,000/month" },
    { image: "/public/warehouse.png", title: "Warehouse for Rent", location: "MIDC, Amravati", price: "₹50,000/month" },
  ];

  // Scroll Left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-6 relative">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 text-left mb-6">
        Popular in Amravati
      </h2>

      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Property Cards Container */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-4 scroll-smooth no-scrollbar">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default PopularProperties;

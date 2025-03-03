import "react";

const RentalHomesCard = () => {
  return (
    <div className="w-full max-w-6xl mt-10">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
        <img src="/di.png" alt="Rental Homes" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Rental Homes for Everyone</h2>
        <p className="text-gray-700 mb-4">Find the perfect rental home that fits your lifestyle and budget.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Rentals
        </button>
      </div>
    </div>
  );
};

export default RentalHomesCard;

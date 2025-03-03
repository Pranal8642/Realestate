import "react";
import Cards from "./Cards"; // Import the card component
import RentalHomesCard from "./RentalHomesCard"; // Import RentalHomesCard
import PopularProperties from "./Popularproperties";
import Land from "./Land";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* First Section with Background Image */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/public/desktop-banner.jpeg')" }} // First background image
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-md text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Find Your Perfect Home</h1>
          <p className="text-lg text-gray-700 mb-6">
            Whether youre buying, selling, or renting, we make the process easy and affordable.
          </p>
        </div>
      </div>

      {/* Popular Properties Section */}
      <div className="mt-10 w-full max-w-6xl">
        <PopularProperties />
      </div>

      {/* Second Section with Another Background Image */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center mt-10"
        style={{ backgroundImage: "url('/public/house.png')" }} // Second background image
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-md text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Discover More Properties</h1>
          <p className="text-lg text-gray-700 mb-6">
            Browse through our exclusive listings and find your dream property today.
          </p>
        </div>
      </div>

      {/* Cards Section (Buy, Sell, Rent) */}
      <div className="mt-10">
        <Cards />
      </div>

      {/* Land Card Section */}
      <Land/>

      {/* Rental Homes Card Section */}
      <RentalHomesCard />
    </div>
  );
};

export default HomePage;

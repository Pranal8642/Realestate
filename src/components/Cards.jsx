import "react";

const Cards = () => {
  const cardData = [
    {
      title: "Buy",
      description: "Redfin agents are among the most experienced in the industry and can help you win in today's market.",
      buttonText: "Find an agent",
      image: "/public/buy.png", // Replace with actual image path
    },
    {
      title: "Sell",
      description: "We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee other agents charge.",
      buttonText: "Learn more",
      image: "/public/sell.png", // Replace with actual image path
    },
    {
      title: "Rent",
      description: "Whether you're searching for apartments, condos, or rental homes, we make it easy to find a place you'll love.",
      buttonText: "Explore rentals",
      image: "/public/rent.png", // Replace with actual image path
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
          <img src={card.image} alt={card.title} className="w-20 h-20 mx-auto mb-4 rounded-lg" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h2>
          <p className="text-gray-700 mb-4">{card.description}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;

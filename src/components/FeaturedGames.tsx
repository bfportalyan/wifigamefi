import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedGames: React.FC = () => {
  const games = [
    { name: 'Crypto Legends: Battle Arena', image: 'https://source.unsplash.com/300x200/?fantasy' },
    { name: 'NFT Pet World', image: 'https://source.unsplash.com/300x200/?pets' },
    { name: 'DeFi Tycoon', image: 'https://source.unsplash.com/300x200/?finance' },
    { name: 'Metaverse Racer', image: 'https://source.unsplash.com/300x200/?racing' },
    { name: 'Blockchain Puzzler', image: 'https://source.unsplash.com/300x200/?puzzle' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {games.map((game, index) => (
            <div key={index} className="flex-none w-72">
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <p className="text-center">{game.name}</p>
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
          <ChevronLeft />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedGames;
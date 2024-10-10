import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendingGames: React.FC = () => {
  const games = [
    { name: 'CryptoClash Royale', image: 'https://source.unsplash.com/200x100/?battle' },
    { name: 'NFT Farmer Deluxe', image: 'https://source.unsplash.com/200x100/?farm' },
    { name: 'Token Towers Defense', image: 'https://source.unsplash.com/200x100/?tower' },
    { name: 'Blockchain Brawlers', image: 'https://source.unsplash.com/200x100/?fight' },
    { name: 'DeFi Dungeon Crawler', image: 'https://source.unsplash.com/200x100/?dungeon' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2" /> Trending Games
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
            <img src={game.image} alt={game.name} className="w-full h-24 object-cover" />
            <p className="p-2 text-center">{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
import React from 'react';
import { Sword, ChessKnight, Puzzle, Flag, Building } from 'lucide-react';

const GameCategories: React.FC = () => {
  const categories = [
    { name: 'Action & Adventure', icon: <Sword /> },
    { name: 'Strategy & RPG', icon: <ChessKnight /> },
    { name: 'Casual & Puzzle', icon: <Puzzle /> },
    { name: 'Sports & Racing', icon: <Flag /> },
    { name: 'Simulation & Building', icon: <Building /> },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Game Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <button key={index} className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
            {category.icon}
            <span className="mt-2 text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameCategories;
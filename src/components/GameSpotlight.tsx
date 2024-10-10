import React from 'react';
import { Star } from 'lucide-react';

const GameSpotlight: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Star className="mr-2" /> Game Spotlight
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src="https://source.unsplash.com/400x300/?fantasy-game" alt="Elemental Guardians" className="rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h3 className="text-xl font-bold mb-2">Featured Game of the Week: "Elemental Guardians"</h3>
          <p className="mb-4">Embark on an epic journey through a world of elemental magic and mythical creatures. Build your team of guardians, master their unique abilities, and save the realm from an ancient evil.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Play now and receive a welcome bonus of 50 S Tokens</li>
            <li>Exclusive in-game items for GFPortal users</li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSpotlight;
import React from 'react';
import { Play, Gamepad, Trophy, Gift, ShoppingBag } from 'lucide-react';

const QuickAccessMenu: React.FC = () => {
  const menuItems = [
    { name: 'Play Now', icon: <Play /> },
    { name: 'My Games', icon: <Gamepad /> },
    { name: 'Leaderboard', icon: <Trophy /> },
    { name: 'Rewards Center', icon: <Gift /> },
    { name: 'Marketplace', icon: <ShoppingBag /> },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {menuItems.map((item, index) => (
          <button key={index} className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
            {item.icon}
            <span className="mt-2">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessMenu;
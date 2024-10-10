import React from 'react';
import { Bell } from 'lucide-react';

const LatestNews: React.FC = () => {
  const news = [
    'New Game Launch: "Cosmic Crypto Explorers"',
    'Weekend Tournament: $10,000 Prize Pool',
    'Exclusive NFT Drop: Limited Edition GFPortal Avatars',
    'Sonic Chain Upgrade: Increased Speed and Lower Fees',
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2 flex items-center">
        <Bell className="mr-2" /> Latest News & Updates
      </h2>
      <ul className="space-y-2">
        {news.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-yellow-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;
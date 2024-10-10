import React from 'react';
import { DollarSign, Image, BookOpen, Users, Code } from 'lucide-react';

const IntegratedServices: React.FC = () => {
  const services = [
    { name: 'DeFi Hub', description: 'Swap, Stake, and Earn', icon: <DollarSign /> },
    { name: 'NFT Gallery', description: 'Browse and Trade Digital Assets', icon: <Image /> },
    { name: 'Learn & Earn', description: 'Complete Quests for Rewards', icon: <BookOpen /> },
    { name: 'Community Forum', description: 'Connect with Fellow Gamers', icon: <Users /> },
    { name: 'Developer Zone', description: 'Build on GFPortal', icon: <Code /> },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Integrated Services</h2>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{service.icon}</span>
            <div>
              <p className="font-semibold">{service.name}</p>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntegratedServices;
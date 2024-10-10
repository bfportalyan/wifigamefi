import React from 'react';
import { Video, Users, UserCheck, MessageCircle } from 'lucide-react';

const SocialHub: React.FC = () => {
  const socialFeatures = [
    { name: 'Live Streams', icon: <Video /> },
    { name: 'Guilds & Clans', icon: <Users /> },
    { name: 'Friend Activity', icon: <UserCheck /> },
    { name: 'Global Chat', icon: <MessageCircle /> },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Social Hub</h2>
      <div className="grid grid-cols-2 gap-4">
        {socialFeatures.map((feature, index) => (
          <button key={index} className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
            {feature.icon}
            <span className="mt-2">{feature.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialHub;
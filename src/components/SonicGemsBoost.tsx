import React from 'react';
import { Zap } from 'lucide-react';

const SonicGemsBoost: React.FC = () => {
  return (
    <div className="bg-blue-600 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2 flex items-center">
        <Zap className="mr-2" /> Sonic Gems Boost
      </h2>
      <p>Earn 2x Sonic Gems on all activities for the next 24 hours!</p>
    </div>
  );
};

export default SonicGemsBoost;
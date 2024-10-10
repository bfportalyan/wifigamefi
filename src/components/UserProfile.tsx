import React from 'react';
import { User, Coins, Diamond } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2 flex items-center">
        <User className="mr-2" /> User Profile
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-lg">Username: CryptoGamer123</p>
        <div>
          <p className="flex items-center"><Coins className="mr-1" /> S Token Balance: 1,234.56 S</p>
          <p className="flex items-center"><Diamond className="mr-1" /> Sonic Gems: 789</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
import React from 'react';
import { Wifi } from 'lucide-react';

const WifiStatus: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2 flex items-center">
        <Wifi className="mr-2" /> WiFi Status
      </h2>
      <p>Connected to: GFPortal_HighSpeed</p>
      <p>Time Remaining: 2h 30m</p>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Top-up WiFi Access
      </button>
    </div>
  );
};

export default WifiStatus;
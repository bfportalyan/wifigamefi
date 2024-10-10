import React from 'react';
import { Gamepad2, Wallet, Wifi, Trophy, ShoppingBag, Zap, Users, HelpCircle } from 'lucide-react';
import UserProfile from './components/UserProfile';
import FeaturedGames from './components/FeaturedGames';
import QuickAccessMenu from './components/QuickAccessMenu';
import GameCategories from './components/GameCategories';
import TrendingGames from './components/TrendingGames';
import IntegratedServices from './components/IntegratedServices';
import WifiStatus from './components/WifiStatus';
import LatestNews from './components/LatestNews';
import SonicGemsBoost from './components/SonicGemsBoost';
import GameSpotlight from './components/GameSpotlight';
import SocialHub from './components/SocialHub';
import SupportResources from './components/SupportResources';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Gamepad2 className="mr-2" /> GFPortal
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-400"><Wallet className="inline mr-1" /> Wallet</a></li>
              <li><a href="#" className="hover:text-blue-400"><Wifi className="inline mr-1" /> WiFi</a></li>
              <li><a href="#" className="hover:text-blue-400"><Trophy className="inline mr-1" /> Leaderboard</a></li>
              <li><a href="#" className="hover:text-blue-400"><ShoppingBag className="inline mr-1" /> Marketplace</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <UserProfile />
            <FeaturedGames />
            <QuickAccessMenu />
            <GameCategories />
            <TrendingGames />
          </div>
          <div>
            <IntegratedServices />
            <WifiStatus />
            <LatestNews />
            <SonicGemsBoost />
          </div>
        </div>
        <GameSpotlight />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <SocialHub />
          <SupportResources />
        </div>
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-8">
        <p>&copy; 2024 GFPortal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { HelpCircle, Book, FileQuestion, MessageSquare } from 'lucide-react';

const SupportResources: React.FC = () => {
  const resources = [
    { name: 'Help Center', icon: <HelpCircle /> },
    { name: 'Tutorials', icon: <Book /> },
    { name: 'FAQs', icon: <FileQuestion /> },
    { name: 'Contact Support', icon: <MessageSquare /> },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Support & Resources</h2>
      <div className="grid grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <button key={index} className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
            {resource.icon}
            <span className="mt-2">{resource.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SupportResources;
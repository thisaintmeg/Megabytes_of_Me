
import React from 'react';
import { Card } from '@/components/ui/card';

const LoveLifeSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-200 p-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-800 mb-8 uppercase">LOVE LIFE</h1>
        
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-300 to-pink-400 rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-6xl">☹️</div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Page Not Found</h2>
          <p className="text-orange-700 text-lg leading-relaxed mb-6">
            The page you are looking for doesn't exist or another error occurred.
          </p>
          
          <div className="mt-8 p-4 bg-orange-50 rounded-2xl">
            <p className="text-orange-600 text-sm font-medium">
              Sometimes the best love stories are yet to be written...
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoveLifeSection;


import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const LoveLifeSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-12">Love Life</h1>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-12 shadow-2xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full ml-2"></div>
              </div>
            </div>
            
            <Heart className="w-12 h-12 text-purple-300 mx-auto mb-6" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">Page not Found</h2>
          <p className="text-purple-200 text-lg leading-relaxed">
            The page you are looking for doesn't exist or an another error occurred.
          </p>
          
          <div className="mt-8">
            <p className="text-purple-300 text-sm">
              Sometimes the best love stories are yet to be written... ✨
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoveLifeSection;

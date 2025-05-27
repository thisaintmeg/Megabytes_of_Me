
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const LoveLifeSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200 p-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Love Life</h1>
        
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-300 to-violet-400 rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center bg-white/20">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white rounded-full ml-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <Heart className="w-12 h-12 text-purple-500 mx-auto mb-6 animate-pulse" />
          </div>
          
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Page Not Found</h2>
          <p className="text-purple-700 text-lg leading-relaxed mb-6">
            The page you are looking for doesn't exist or another error occurred.
          </p>
          
          <div className="mt-8 p-4 bg-purple-50 rounded-2xl">
            <p className="text-purple-600 text-sm font-medium">
              Sometimes the best love stories are yet to be written... ✨💫
            </p>
          </div>
        </Card>

        {/* Floating hearts */}
        <div className="absolute top-20 left-1/4 text-2xl text-purple-300 animate-bounce opacity-50">💖</div>
        <div className="absolute top-32 right-1/3 text-xl text-violet-400 animate-pulse opacity-40">💜</div>
        <div className="absolute bottom-40 left-1/3 text-3xl text-purple-200 animate-bounce opacity-30" style={{animationDelay: '1s'}}>💕</div>
      </div>
    </div>
  );
};

export default LoveLifeSection;

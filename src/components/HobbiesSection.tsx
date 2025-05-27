
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageModal from './ImageModal';

const HobbiesSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const hobbies = [
    { 
      id: 1, 
      title: 'Nature Trip', 
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      description: 'Exploring the beauty of nature and capturing scenic moments',
      emoji: '🌿'
    },
    { 
      id: 2, 
      title: 'Online Gaming', 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Strategic gaming sessions and connecting with fellow gamers',
      emoji: '🎮'
    },
    { 
      id: 3, 
      title: 'Photography', 
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      description: 'Capturing life\'s beautiful moments through my lens',
      emoji: '📸'
    }
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">Hobbies</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <Card
              key={hobby.id}
              className="group bg-white/80 backdrop-blur-sm border-purple-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => openImage(hobby.image, hobby.title)}
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Fun emoji overlay */}
                <div className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12">
                  {hobby.emoji}
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {hobby.title}
                </h3>
                <p className="text-purple-700 text-sm leading-relaxed">{hobby.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun fact section */}
        <div className="mt-12 text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 p-8 rounded-3xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✨ Fun Fact! ✨</h3>
            <p className="text-purple-700 text-lg leading-relaxed">
              These hobbies aren't just activities - they're my way of exploring the world, 
              expressing creativity, and connecting with amazing people who share similar passions! 
              Each one tells a story of adventure and growth. 🌟
            </p>
          </Card>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-10 w-8 h-8 bg-purple-300 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-48 right-16 w-6 h-6 bg-violet-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-10 h-10 bg-purple-200 rounded-full animate-bounce opacity-25" style={{animationDelay: '2s'}}></div>

      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default HobbiesSection;

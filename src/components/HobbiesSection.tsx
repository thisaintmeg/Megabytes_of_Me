
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
      description: 'Exploring the beauty of nature and capturing scenic moments'
    },
    { 
      id: 2, 
      title: 'Online Gaming', 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Strategic gaming sessions and connecting with fellow gamers'
    },
    { 
      id: 3, 
      title: 'Photography', 
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      description: 'Capturing life\'s beautiful moments through my lens'
    }
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">Hobbies</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <Card
              key={hobby.id}
              className="group bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => openImage(hobby.image, hobby.title)}
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{hobby.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{hobby.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

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

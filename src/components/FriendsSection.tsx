
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageModal from './ImageModal';

const FriendsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const friends = [
    { id: 1, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop' },
    { id: 5, image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop' },
    { id: 7, image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop' },
    { id: 8, image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop' },
    { id: 9, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop' },
    { id: 10, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' }
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">Friends</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {friends.map((friend) => (
            <Card
              key={friend.id}
              className="group bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openImage(friend.image, `Friend ${friend.id}`)}
            >
              <div className="relative aspect-square">
                <img
                  src={friend.image}
                  alt={`Friend ${friend.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mx-auto">
            These are the amazing people who make life more colorful and meaningful. 
            Each friend brings their own unique energy and creates unforgettable memories.
          </p>
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

export default FriendsSection;

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageModal from './ImageModal';

const FriendsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const friends = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `/${i + 1}.jpg`,
    alt: `Friend ${i + 1}`
  }));

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-25 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-8 uppercase">FRIENDS</h1>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-8">
          {friends.map((friend) => (
            <Card
              key={friend.id}
              className="bg-white/60 backdrop-blur-sm border-orange-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
              onClick={() => openImage(friend.image, friend.alt)}
            >
              <div className="w-full h-32 relative">
                <img
                  src={friend.image}
                  alt={friend.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Card className="bg-white/60 backdrop-blur-sm border-orange-200 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-orange-700 text-lg leading-relaxed">
              These are the amazing people who make life more colorful and meaningful. 
              Each friend brings their own unique energy and creates unforgettable memories!
            </p>
          </Card>
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

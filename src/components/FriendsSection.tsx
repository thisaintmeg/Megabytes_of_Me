
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageModal from './ImageModal';

const FriendsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const friends = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      position: 'top-12 left-20',
      rotation: 'rotate-12',
      size: 'w-24 h-24'
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
      position: 'top-20 right-32',
      rotation: '-rotate-6',
      size: 'w-28 h-28'
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
      position: 'top-40 left-1/3',
      rotation: 'rotate-3',
      size: 'w-32 h-32'
    },
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop',
      position: 'top-52 right-1/4',
      rotation: '-rotate-12',
      size: 'w-26 h-26'
    },
    { 
      id: 5, 
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop',
      position: 'top-72 left-24',
      rotation: 'rotate-6',
      size: 'w-30 h-30'
    },
    { 
      id: 6, 
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop',
      position: 'top-80 right-20',
      rotation: '-rotate-3',
      size: 'w-28 h-28'
    },
    { 
      id: 7, 
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop',
      position: 'top-96 left-1/2',
      rotation: 'rotate-9',
      size: 'w-24 h-24'
    },
    { 
      id: 8, 
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop',
      position: 'top-108 right-1/3',
      rotation: '-rotate-6',
      size: 'w-32 h-32'
    }
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-25 to-purple-100 p-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">Friends</h1>
        
        {/* Scattered Friends Layout - Non-overlapping */}
        <div className="relative min-h-[900px]">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className={`absolute ${friend.position} ${friend.rotation} hover:scale-110 hover:z-20 transition-all duration-300 cursor-pointer group`}
              onClick={() => openImage(friend.image, `Friend ${friend.id}`)}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-purple-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-rotate-0">
                <div className={`${friend.size} relative`}>
                  <img
                    src={friend.image}
                    alt={`Friend ${friend.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
              
              {/* Fun emoji reactions */}
              <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                {friend.id % 4 === 0 ? '😄' : friend.id % 3 === 0 ? '🎉' : friend.id % 2 === 0 ? '💫' : '✨'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Card className="bg-white/60 backdrop-blur-sm border-purple-200 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-purple-700 text-lg leading-relaxed">
              These are the amazing people who make life more colorful and meaningful. 
              Each friend brings their own unique energy and creates unforgettable memories! 🌟
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

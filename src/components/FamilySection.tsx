
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';

const FamilySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const familyMembers = [
    {
      id: 1,
      name: 'Benjamin Curzon',
      relation: 'Father',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      description: 'The pillar of our family, always supportive and caring.'
    },
    {
      id: 2,
      name: 'Babeth Curzon',
      relation: 'Mother',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      description: 'The heart of our home, full of love and wisdom.'
    },
    {
      id: 3,
      name: 'Rainier Benz Curzon',
      relation: 'Brother',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      description: 'My partner in crime and best friend growing up.'
    },
    {
      id: 4,
      name: 'Meghan Curzon',
      relation: 'Me',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      description: 'Just me, living life and cherishing family moments.'
    },
    {
      id: 5,
      name: 'Christine Jane Curzon',
      relation: 'Sister',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      description: 'The youngest but with the biggest heart in our family.'
    }
  ];

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % familyMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + familyMembers.length) % familyMembers.length);
  };

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const currentMember = familyMembers[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-25 to-purple-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-12">Family</h1>
        
        {/* Current Member Details */}
        <div className="relative">
          <Card className="bg-white/60 backdrop-blur-sm border-purple-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-full h-80 object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openImage(currentMember.image, currentMember.name)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="p-8 text-center bg-gradient-to-b from-white/80 to-purple-50/80">
              <h2 className="text-3xl font-bold text-purple-800 mb-2">{currentMember.name}</h2>
              <p className="text-purple-600 text-lg mb-4 font-medium">{currentMember.relation}</p>
              <p className="text-purple-700 leading-relaxed">{currentMember.description}</p>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            onClick={prevMember}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            size="sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextMember}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            size="sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {familyMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-purple-500 scale-125 shadow-lg' : 'bg-purple-300'
              }`}
            />
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

export default FamilySection;


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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">Family</h1>
        
        {/* Family Members Overview - Overlapping Cards */}
        <div className="relative mb-8 h-48">
          <div className="flex justify-center items-center h-full">
            {familyMembers.map((member, index) => {
              const offset = (index - 2) * 60; // Center the middle card
              const zIndex = index === currentIndex ? 20 : 10;
              const scale = index === currentIndex ? 1 : 0.85;
              const opacity = index === currentIndex ? 1 : 0.7;
              
              return (
                <div
                  key={member.id}
                  className="absolute transition-all duration-500 cursor-pointer"
                  style={{
                    transform: `translateX(${offset}px) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white hover:border-purple-300 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Arrows */}
          <Button
            onClick={prevMember}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            size="sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextMember}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            size="sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Current Member Details */}
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="relative">
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full h-80 object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
              onClick={() => openImage(currentMember.image, currentMember.name)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="p-8 text-center bg-gradient-to-b from-white to-purple-50">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">{currentMember.name}</h2>
            <p className="text-purple-600 text-lg mb-4 font-medium">{currentMember.relation}</p>
            <p className="text-purple-700 leading-relaxed">{currentMember.description}</p>
          </div>
        </Card>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-3">
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

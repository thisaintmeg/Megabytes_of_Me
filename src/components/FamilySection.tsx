import React from 'react';
import { Card } from '@/components/ui/card';
import ImageModal from './ImageModal';

const FamilySection = () => {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

  const familyMembers = [
    {
      id: 1,
      name: 'Benjamin Cuizon',
      relation: 'Father',
      image: '/dad.jpg',
      description: 'The pillar of our family, always supportive and caring.'
    },
    {
      id: 2,
      name: 'Babeth Cuizon',
      relation: 'Mother',
      image: '/mom.jpg',
      description: 'The heart of our home, full of love and wisdom.'
    },
    {
      id: 3,
      name: 'Rainier Benz Cuizon',
      relation: 'Brother',
      image: '/kuya.jpg',
      description: 'My partner in crime and best friend growing up.'
    },
    {
      id: 4,
      name: 'Meghan Curzon',
      relation: 'Me',
      image: '/meg.jpg',
      description: 'Just me, living life and cherishing family moments.'
    },
    {
      id: 5,
      name: 'Christine Jane Cuizon',
      relation: 'Sister',
      image: '/tin.jpg',
      description: 'The youngest but with the biggest heart in our family.'
    }
  ];

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-pink-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-12 uppercase tracking-wide">
          FAMILY
        </h1>

        {/* Family Members in One Line */}
        <div className="flex gap-6 justify-center items-center overflow-x-auto pb-4">
          {familyMembers.map((member) => (
            <Card 
              key={member.id}
              className="bg-white/60 backdrop-blur-sm border-purple-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-64"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openImage(member.image, member.name)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-4 text-center bg-gradient-to-b from-white/80 to-purple-50/80">
                <h3 className="text-lg font-bold text-purple-800 mb-1">{member.name}</h3>
                <p className="text-purple-600 text-sm mb-2 font-medium">{member.relation}</p>
                <p className="text-purple-700 text-xs leading-relaxed">{member.description}</p>
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

export default FamilySection;

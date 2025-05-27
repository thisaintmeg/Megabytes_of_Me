
import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import HobbiesSection from '@/components/HobbiesSection';
import FamilySection from '@/components/FamilySection';
import FriendsSection from '@/components/FriendsSection';
import LoveLifeSection from '@/components/LoveLifeSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'hobbies':
        return <HobbiesSection />;
      case 'family':
        return <FamilySection />;
      case 'friends':
        return <FriendsSection />;
      case 'love-life':
        return <LoveLifeSection />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      {renderSection()}
    </div>
  );
};

export default Index;

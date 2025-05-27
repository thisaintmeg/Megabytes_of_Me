
import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  if (currentSection === 'dashboard') return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={() => onNavigate('dashboard')}
        className="bg-white/90 backdrop-blur-md border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
        size="sm"
      >
        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default Navigation;


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
        className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110"
        size="sm"
      >
        <Home className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Navigation;

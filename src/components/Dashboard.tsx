
import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, User, Heart, Users, Gamepad2 } from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const folders = [
    { id: 'hobbies', title: 'Hobbies', icon: Gamepad2, color: 'from-orange-300 to-red-400' },
    { id: 'family', title: 'Family', icon: Users, color: 'from-green-300 to-emerald-400' },
    { id: 'friends', title: 'Friends', icon: User, color: 'from-blue-300 to-cyan-400' },
    { id: 'love-life', title: 'Love Life', icon: Heart, color: 'from-pink-300 to-rose-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-25 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-800 mb-4 tracking-tight transform hover:scale-105 transition-all duration-300 cursor-default font-serif uppercase">
            MEGABYTES OF ME
          </h1>
          <p className="text-orange-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Welcome to my digital world! Explore the folders below to discover what defines me.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border-orange-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-8">
              <div className="w-80 h-64 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-4 border-4 border-white/30 rounded-xl"></div>
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <div className="text-lg font-medium">Your Photo Here</div>
                  <div className="text-sm opacity-80">Click to change</div>
                </div>
              </div>
              
              <div className="flex-1 text-orange-800">
                <h2 className="text-2xl font-bold mb-6 text-orange-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Name:</span> Meghan Curzon</div>
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Date of Birth:</span> 20-2-2000</div>
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Age:</span> 24</div>
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Gender:</span> Female</div>
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Religion:</span> Pentecostal</div>
                  <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Height:</span> 4 feet 10 inches</div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Contact Details</h3>
                  <div className="space-y-2 text-base">
                    <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Phone:</span> +63 951 932 8673</div>
                    <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Email:</span> meghanecurzon@gmail.com</div>
                    <div className="bg-orange-50 p-3 rounded-lg"><span className="text-orange-600 font-medium">Address:</span> Cagayan de Oro City</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {folders.map((folder) => (
            <Card
              key={folder.id}
              className="group cursor-pointer bg-white/50 backdrop-blur-sm border-orange-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/70 hover:-translate-y-2"
              onClick={() => onNavigate(folder.id)}
            >
              <div className="text-center">
                <div className={`w-20 h-18 mx-auto mb-4 bg-gradient-to-br ${folder.color} rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <folder.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors duration-300">
                  {folder.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

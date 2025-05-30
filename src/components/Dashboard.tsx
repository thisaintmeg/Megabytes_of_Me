import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, User, Heart, Users, Gamepad2 } from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const folders = [
    { id: 'hobbies', title: 'Hobbies', icon: Gamepad2, color: 'from-purple-300 to-violet-400' },
    { id: 'family', title: 'Family', icon: Users, color: 'from-violet-300 to-purple-400' },
    { id: 'friends', title: 'Friends', icon: User, color: 'from-indigo-300 to-purple-400' },
    { id: 'love-life', title: 'Love Life', icon: Heart, color: 'from-fuchsia-300 to-pink-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-700 mb-4 tracking-tight transform hover:scale-105 transition-all duration-300 cursor-default font-serif uppercase">
            MEGABYTES OF ME
          </h1>
          <p className="text-purple-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Welcome to my digital world! Explore the folders below to discover what defines me.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border-purple-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-8">
              <div className="w-80 h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/meg.jpg"
                  alt="Meghan Cuizon"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 text-purple-800">
                <h2 className="text-2xl font-bold mb-6 text-purple-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Name:</span> Meghan Cuizon</div>
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Date of Birth:</span> 10-21-2005</div>
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Age:</span> 19</div>
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Gender:</span> Female</div>
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Religion:</span> Pentecostal</div>
                  <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Height:</span> 4 feet 11 inches</div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">Contact Details</h3>
                  <div className="space-y-2 text-base">
                    <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Phone:</span> +63 951 929 9673</div>
                    <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Email:</span> meghanecuizon@gmail.com</div>
                    <div className="bg-purple-50 p-3 rounded-lg"><span className="text-purple-600 font-medium">Address:</span> Cagayan de Oro City</div>
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
              className="group cursor-pointer bg-white/50 backdrop-blur-sm border-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/70 hover:-translate-y-2"
              onClick={() => onNavigate(folder.id)}
            >
              <div className="text-center">
                <div className={`w-20 h-18 mx-auto mb-4 bg-gradient-to-br ${folder.color} rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <folder.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
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

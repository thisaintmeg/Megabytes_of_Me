
import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, User, Heart, Users, Gamepad2 } from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const folders = [
    { id: 'hobbies', title: 'Hobbies', icon: Gamepad2, color: 'from-amber-400 to-yellow-500' },
    { id: 'family', title: 'Family', icon: Users, color: 'from-emerald-400 to-green-500' },
    { id: 'friends', title: 'Friends', icon: User, color: 'from-blue-400 to-cyan-500' },
    { id: 'love-life', title: 'Love Life', icon: Heart, color: 'from-rose-400 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Megabytes of Me
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
            This website provides an overview of what generally defines and gives meaning to me: the bonds that link me to the people who matter most to me, including my family and friends. Each folder contains glimpses into my world.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-start gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="w-16 h-12 bg-white/20 rounded-lg mb-2 mx-auto"></div>
                  <div className="text-xs">Personal Info</div>
                </div>
              </div>
              
              <div className="flex-1 text-white">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="text-purple-300">Name:</span> Meghan Curzon</div>
                  <div><span className="text-purple-300">Date of Birth:</span> 20-2-2000</div>
                  <div><span className="text-purple-300">Age:</span> 24</div>
                  <div><span className="text-purple-300">Gender:</span> Female</div>
                  <div><span className="text-purple-300">Religion:</span> Pentecostal</div>
                  <div><span className="text-purple-300">Height:</span> 4 feet 10 inches</div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-200">Contact Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-purple-300">Phone:</span> +63 951 932 8673</div>
                    <div><span className="text-purple-300">Email:</span> meghanecurzon@gmail.com</div>
                    <div><span className="text-purple-300">Address:</span> Cagayan de Oro City</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {folders.map((folder) => (
            <Card
              key={folder.id}
              className="group cursor-pointer bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15"
              onClick={() => onNavigate(folder.id)}
            >
              <div className="text-center">
                <div className={`w-20 h-16 mx-auto mb-4 bg-gradient-to-br ${folder.color} rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <folder.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
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

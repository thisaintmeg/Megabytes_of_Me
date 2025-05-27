
import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, User, Heart, Users, Gamepad2 } from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const folders = [
    { id: 'hobbies', title: 'Hobbies', icon: Gamepad2, color: 'from-violet-300 to-purple-400' },
    { id: 'family', title: 'Family', icon: Users, color: 'from-emerald-300 to-teal-400' },
    { id: 'friends', title: 'Friends', icon: User, color: 'from-blue-300 to-indigo-400' },
    { id: 'love-life', title: 'Love Life', icon: Heart, color: 'from-rose-300 to-pink-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-3 tracking-tight">
            Megabytes of Me
          </h1>
          <p className="text-purple-600 text-base max-w-2xl mx-auto leading-relaxed">
            This website provides an overview of what generally defines and gives meaning to me: the bonds that link me to the people who matter most to me, including my family and friends. Each folder contains glimpses into my world.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-48 h-36 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-white text-center">
                  <div className="w-20 h-16 bg-white/30 rounded-xl mb-2 mx-auto flex items-center justify-center">
                    <div className="text-2xl">📸</div>
                  </div>
                  <div className="text-sm font-medium">Your Photo Here</div>
                </div>
              </div>
              
              <div className="flex-1 text-purple-800">
                <h2 className="text-xl font-bold mb-4 text-purple-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Name:</span> Meghan Curzon</div>
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Date of Birth:</span> 20-2-2000</div>
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Age:</span> 24</div>
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Gender:</span> Female</div>
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Religion:</span> Pentecostal</div>
                  <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Height:</span> 4 feet 10 inches</div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-base font-semibold mb-2 text-purple-900">Contact Details</h3>
                  <div className="space-y-1 text-sm">
                    <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Phone:</span> +63 951 932 8673</div>
                    <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Email:</span> meghanecurzon@gmail.com</div>
                    <div className="bg-purple-50 p-2 rounded-lg"><span className="text-purple-600 font-medium">Address:</span> Cagayan de Oro City</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {folders.map((folder) => (
            <Card
              key={folder.id}
              className="group cursor-pointer bg-white/70 backdrop-blur-sm border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:-translate-y-2"
              onClick={() => onNavigate(folder.id)}
            >
              <div className="text-center">
                <div className={`w-16 h-14 mx-auto mb-3 bg-gradient-to-br ${folder.color} rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <folder.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                  {folder.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun floating elements */}
        <div className="fixed top-20 left-10 w-4 h-4 bg-purple-300 rounded-full animate-bounce opacity-60"></div>
        <div className="fixed top-40 right-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse opacity-50"></div>
        <div className="fixed bottom-32 left-20 w-5 h-5 bg-purple-200 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default Dashboard;


import React, { useState } from 'react';
import EarthVisualization from '../components/EarthVisualization';
import { useApp } from '../context/AppContext';
import { Leaf, Route, Globe, Users, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import confetti from '../utils/confetti';

const Journey = () => {
  const { currentJourney } = useApp();
  
  const teamMembers = [
    {
      name: "Bhuvan Vijay",
      role: "Student Developer",
      bio: "Passionate about sustainable transportation and urban planning.",
      image: "https://media.discordapp.net/attachments/1356373701268078803/1358350836463308821/image.jpg?ex=67f3864c&is=67f234cc&hm=dec4dca77fce5ef5f28bf233c384dd16018dff8264e38154caffdd383ef3215c&=&format=webp&width=910&height=1478",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Madhav Tirumale",
      role: "Student Developer",
      bio: "Experienced developer focusing on climate tech solutions.",
      image: "https://media.discordapp.net/attachments/1356373701268078803/1358402537073672343/image.png?ex=67f3b672&is=67f264f2&hm=d22c9e2e00acece436e4edb3b69606537e265205e21911326646eaf98669041b&=&format=webp&quality=lossless&width=886&height=1236",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Zaman Zahid",
      role: "Student Developer",
      bio: "Building intuitive interfaces for environmental impact tracking.",
      image: "https://media.discordapp.net/attachments/1356373701268078803/1358349892573200535/20241023_101852.jpg?ex=67f3856b&is=67f233eb&hm=3c3b2098033f08826a4e2867b19e738bfe68edf7bb19f20b7b75ab977325465f&=&format=webp&width=880&height=1478",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Akhil Deevi",
      role: "Student Developer",
      bio: "Creating beautiful experiences that inspire sustainable choices.",
      image: "https://media.discordapp.net/attachments/1356373701268078803/1358402782624874506/image.jpg?ex=67f3b6ad&is=67f2652d&hm=28fc79e7e4e8b90dcb82787339708f78d88b48fb2444db59c654f1fff0a16b8b&=&format=webp&width=972&height=1480",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];
  
  // If journey is active, show simplified journey progress view
  if (currentJourney) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="relative h-[400px] w-full order-2 md:order-1">
            <EarthVisualization />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="rgba(72, 187, 120, 0.2)" />
                    <circle cx="50" cy="50" r="30" fill="rgba(72, 187, 120, 0.4)" />
                    <path d="M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 50 90 A40 40 0 0 1 10 50 A40 40 0 0 1 50 10 Z" fill="none" stroke="rgba(72, 187, 120, 0.8)" strokeWidth="2" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold">
                  <span className="text-green-500">Eco</span>
                  <span>Quest</span>
                </h1>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Journey in Progress</h2>
            <p className="text-xl text-muted-foreground mb-6">
              {currentJourney.mode.charAt(0).toUpperCase() + currentJourney.mode.slice(1)} journey active...
            </p>
            <div className="w-full max-w-sm bg-green-50/30 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-700 dark:text-green-300">
                Keep going! You're making a positive impact on the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
        <div className="relative h-[400px] w-full order-2 md:order-1">
          <EarthVisualization />
        </div>
        
        <div className="flex flex-col items-center text-center order-1 md:order-2">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 mr-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="rgba(72, 187, 120, 0.2)" />
                <circle cx="50" cy="50" r="30" fill="rgba(72, 187, 120, 0.4)" />
                <path d="M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 50 90 A40 40 0 0 1 10 50 A40 40 0 0 1 50 10 Z" fill="none" stroke="rgba(72, 187, 120, 0.8)" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold">
              <span className="text-green-500">Eco</span>
              <span>Quest</span>
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-md">Make green choices, track your impact, earn rewards</p>
          
          {/* Sign in and Sign up buttons added here */}
          <div className="flex space-x-4 mb-8">
            <Link to="/login">
              <Button variant="outline" className="px-6">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button className="px-6">Sign up</Button>
            </Link>
          </div>
          
          <div className="mt-8 p-6 bg-transparent backdrop-blur-sm border border-muted rounded-lg max-w-md">
            <h3 className="text-xl font-medium mb-4">What is EcoQuest?</h3>
            <p className="text-muted-foreground mb-4">
              EcoQuest is a platform designed to help you make environmentally friendly choices in your daily travel and activities. 
              By tracking your sustainable transportation methods, you can see your positive impact on the environment while earning rewards.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 border rounded-lg bg-green-50/30 dark:bg-green-900/20">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">Track</div>
                <div className="text-xs text-muted-foreground">Your journeys</div>
              </div>
              <div className="p-3 border rounded-lg bg-blue-50/30 dark:bg-blue-900/20">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">Reduce</div>
                <div className="text-xs text-muted-foreground">Carbon emissions</div>
              </div>
              <div className="p-3 border rounded-lg bg-amber-50/30 dark:bg-amber-900/20">
                <div className="text-lg font-bold text-amber-600 dark:text-amber-400">Reward</div>
                <div className="text-xs text-muted-foreground">Earn points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Who Are We Section */}
      <div className="mt-16 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Who Are We
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Meet the passionate team behind EcoQuest who are dedicated to making our planet greener through technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleCardClick = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6, x: (0.2 + (index * 0.2)) },
      colors: ['#22c55e', '#3b82f6', '#eab308']
    });
  };
  
  return (
    <Card 
      className={`overflow-hidden transform transition-all duration-300 ${
        isHovered ? 'scale-105 shadow-lg' : ''
      } bg-transparent backdrop-blur-sm cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="aspect-square w-full overflow-hidden relative">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3`}>
          <p className="text-white text-sm">{member.bio}</p>
        </div>
      </div>
      <CardContent className="p-4 text-center relative">
        <h3 className="font-bold">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
        
        <div className="mt-3 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Journey;

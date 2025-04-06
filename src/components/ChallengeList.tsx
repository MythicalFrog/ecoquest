import React from 'react';
import { Button } from '@/components/ui/button';
import { useApp } from '../context/AppContext';
import { formatDistance } from '../utils/formatters';
import { MapPin, Bike, Car, Bus, Footprints } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import confetti from 'canvas-confetti';

type TransportMode = 'walking' | 'biking' | 'car' | 'public';

interface Location {
  name: string;
}

interface Challenge {
  id: number;
  title: string;
  mode: TransportMode;
  points: number;
  description: string;
  location: Location;
  distance: number;
}

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList = ({ challenges }: ChallengeListProps) => {
  const { completeChallenge } = useApp();
  const { toast } = useToast();

  const handleComplete = async (challenge: Challenge) => {
    try {
      await completeChallenge(challenge.id);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toast({
        title: "Challenge Completed! 🎉",
        description: `You earned ${challenge.points} points!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to complete challenge",
        variant: "destructive",
      });
    }
  };

  const getIcon = (mode: TransportMode) => {
    switch (mode) {
      case 'walking':
        return <Footprints className="h-4 w-4" />;
      case 'biking':
        return <Bike className="h-4 w-4" />;
      case 'car':
        return <Car className="h-4 w-4" />;
      case 'public':
        return <Bus className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const defaultChallenges: Challenge[] = [
    {
      id: 1,
      title: "Walk to the Park",
      mode: "walking",
      points: 10,
      description: "Take a walk to the nearest park and enjoy the fresh air.",
      location: { name: "Central Park" },
      distance: 1.2,
    },
    {
      id: 2,
      title: "Bike to the Grocery Store",
      mode: "biking",
      points: 15,
      description: "Ride your bike to the grocery store and pick up some essentials.",
      location: { name: "Local Grocery Store" },
      distance: 2.5,
    },
    {
      id: 3,
      title: "Carpool to Work",
      mode: "car",
      points: 20,
      description: "Share a ride with a colleague to reduce your carbon footprint.",
      location: { name: "Office" },
      distance: 5.0,
    },
    {
      id: 4,
      title: "Compost",
      mode: "walking",
      points: 20,
      description: "Reuse food waste and other biodegradable.",
      location: { name: "Home or at a compost location" },
      distance: 2.0,
    },
    {
      id: 5,
      title: "Recycle",
      mode: "walking",
      points: 10,
      description: "You know how to do this...",
      location: { name: "The Recycling bin. duh." },
      distance: 1.0,
    },
    {
      id: 6,
      title: "Visit a National Park",
      mode: "car",
      points: 30,
      description: "Spend some time in 'America's backyard, and get your money's worth. Your taxes pay for it after all...'",
      location: { name: "National Parks." },
      distance: 10.0,
    },
    {
      id: 7,
      title: "Volunteer",
      mode: "car",
      points: 30,
      description: "Spend some time volunteering for a local organization.",
      location: { name: "Local organization." },
      distance: 5.0,
    },
  ];

  // Use defaultChallenges if challenges array is empty
  const activeChallenges = challenges.length === 0 ? defaultChallenges : challenges;

  return (
    <div className="space-y-4">
      {activeChallenges.map((challenge) => (
        <div key={challenge.id} className="p-3 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                  ${challenge.mode === 'walking' ? 'bg-green-100 text-green-700' : 
                    challenge.mode === 'biking' ? 'bg-blue-100 text-blue-700' : 
                    challenge.mode === 'car' ? 'bg-red-100 text-red-700' : 
                    'bg-purple-100 text-purple-700'}`}
              >
                {getIcon(challenge.mode)}
              </div>
              <div>
                <div className="font-medium">{challenge.title}</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {challenge.location?.name || "Location unknown"}
                  <span className="mx-1">•</span>
                  {formatDistance(Number(challenge.distance))}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">+{challenge.points} pts</div>
              <Button
                variant="outline"
                size="sm"
                className="mt-1"
                onClick={() => handleComplete(challenge)}
              >
                Complete
              </Button>
            </div>
          </div>
          <div className="mt-2 text-sm">{challenge.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, UtensilsCrossed, Music, Gift, Users, Camera } from 'lucide-react';

const events = [
  {
    icon: Gamepad2,
    title: 'Fun Games',
    description: 'Exciting games and competitions with amazing prizes',
    time: '10:30 PM - 3:00 PM',
    color: 'bg-yellow-400'
  },
  {
    icon: UtensilsCrossed,
    title: 'Delicious Buffet',
    description: 'Wide variety of food and refreshments for everyone',
    time: '12:00 PM - 2:00 PM',
    color: 'bg-yellow-500'
  },
  {
    icon: Music,
    title: 'DJ Party',
    description: 'Dance the night away with our amazing DJ',
    time: '9:00 PM - 4:00 PM',
    color: 'bg-yellow-400'
  },
  {
    icon: Gift,
    title: 'Prize Distribution',
    description: 'Exciting prizes and awards for winners',
    time: '1:00 PM - 2:30 PM',
    color: 'bg-yellow-500'
  },
  {
    icon: Users,
    title: 'Meet & Greet',
    description: 'Connect with classmates and teachers',
    time: '10:00 PM - 3:00 PM',
    color: 'bg-yellow-400'
  },
  {
    icon: Camera,
    title: 'Photo Booth',
    description: 'Capture memories with fun props and backgrounds',
    time: '11:30 AM - 3:30 PM',
    color: 'bg-yellow-500'
  }
];

export default function EventsSection() {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-gray-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What's Happening at the Party?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get ready for an unforgettable night filled with entertainment, food, and fun!
          </p>
        </div>
        
        {/* Mobile-first 2x2 grid layout */}
        <div className="mobile-events-grid">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card key={index} className="school-card text-white hover:scale-105 transition-transform duration-300 mobile-event-card">
                <CardHeader className="text-center pb-2 px-3 pt-4">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${event.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-yellow-400 leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-3 pb-4">
                  <p className="text-gray-300 mb-3 text-sm md:text-base leading-tight">{event.description}</p>
                  <div className="bg-gradient-to-r from-yellow-400/20 to-amber-600/20 rounded-lg py-2 px-2">
                    <p className="text-yellow-300 font-semibold text-xs md:text-sm">{event.time}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
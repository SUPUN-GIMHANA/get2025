import SchoolHeader from '@/components/SchoolHeader';
import PartyTicket from '@/components/PartyTicket';
import EventsSection from '@/components/EventsSection';
import PartyInfo from '@/components/PartyInfo';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Index() {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <SchoolHeader />
      
      {/* Hero Section with Ticket */}
      <div className="py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-amber-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">LUMORA GET TOGETHER 2025</span>
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Ticket to an Amazing Reunion!
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Join the G/Aluthwala M.V. 2019 O/L, 2022 A/L Batch for an unforgettable day of 
              DJ music, fun games, delicious buffet, and precious memories at Hotel Ranathunga.
            </p>
          </div>
          
          {/* Party Ticket Component */}
          <PartyTicket />
          
          <div className="text-center mt-8">
            <Button 
              onClick={scrollToEvents}
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              Explore Events
            </Button>
          </div>
        </div>
      </div>
      
      {/* Events Section */}
      <div id="events">
        <EventsSection />
      </div>
      
      {/* Party Information */}
      <PartyInfo />
      
      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">
            G/Aluthwala Maha Vidyalaya
          </h3>
          <p className="text-gray-400 mb-4">
            LUMORA 2025 - Creating memories, building friendships, celebrating together
          </p>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-sm">
            <span>© 2025 G/Aluthwala M.V.</span>
            <span>•</span>
            <span>2019 O/L, 2022 A/L Batch</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
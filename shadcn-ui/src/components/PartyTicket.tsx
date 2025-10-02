import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { useState } from 'react';
import TicketPurchaseModal from './TicketPurchaseModal';

export default function PartyTicket() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <Card className="party-ticket text-white overflow-hidden">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <Ticket className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">PARTY TICKET</h3>
              <div className="text-4xl font-bold text-white mb-2">#2025</div>
              <div className="text-yellow-300 font-semibold">ADMIT ONE</div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-yellow-300 text-sm">Date</div>
                  <div className="text-white font-semibold">October 19, 2025</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-yellow-300 text-sm">Time</div>
                  <div className="text-white font-semibold">09:00 AM - 04:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-yellow-300 text-sm">Venue</div>
                  <div className="text-white font-semibold">Hotel Ranathunga</div>
                  <div className="text-yellow-200 text-xs">Ganapinuwala</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 pulse-yellow"
                onClick={() => setIsModalOpen(true)}
              >
                GET YOUR TICKET
              </Button>
              <p className="text-yellow-300 text-xs mt-2">LKR 4500/= per person</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <TicketPurchaseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';

export default function PartyInfo() {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-amber-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Party Details & Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our amazing get-together party
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event Details */}
          <Card className="school-card text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Date</h4>
                    <p className="text-gray-300">Sunday, October 19, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Time</h4>
                    <p className="text-gray-300">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Venue</h4>
                    <p className="text-gray-300">Hotel Ranathunga, Ganapinuwala</p>
                    <p className="text-gray-400 text-sm">123 Education Street, City Center</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Dress Code</h4>
                    <p className="text-gray-300">Smart Casual / Party Wear</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <Card className="school-card text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contact Us</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Phone</h4>
                    <p className="text-gray-300">+94 (78) 764 4148</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold text-yellow-300">Email</h4>
                    <p className="text-gray-300">lumora2025@aluthwala.edu.lk</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 rounded-lg p-4 mb-6 border border-amber-600/20">
                <h4 className="font-semibold text-yellow-300 mb-2">Important Notes:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Entry is free for all current students</li>
                  <li>• Please bring your student ID</li>
                  <li>• Food and drinks will be provided</li>
                  <li>• Photography allowed</li>
                </ul>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold">
                RSVP Now
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="school-card text-white inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Don't Miss Out!
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Join us for the most exciting school event of the year. 
                Create memories that will last a lifetime!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold pulse-yellow">
                Register Now - It's Free!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
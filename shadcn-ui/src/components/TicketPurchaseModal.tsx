import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Building2, Phone, Mail, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface TicketPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketPurchaseModal({ isOpen, onClose }: TicketPurchaseModalProps) {
  const [copiedText, setCopiedText] = useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const bankDetails = [
    { label: 'Bank Name', value: 'Commercial Bank of Ceylon' },
    { label: 'Account Name', value: 'G/Aluthwala M.V. School Fund' },
    { label: 'Account Number', value: '8001234567890' },
    { label: 'Branch', value: 'Ganapinuwala Branch' },
    { label: 'Swift Code', value: 'CCEYLKLX' }
  ];

  const contactNumbers = [
    { name: 'Vinu', number: '075 481 7674' },
    { name: 'Osanga', number: '078 764 4148' },
    { name: 'Apsara', number: '074 128 9162' },
    { name: 'Kaushika', number: '071 341 8691' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-black to-gray-900 text-white border-yellow-400">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-yellow-400 text-center">
            🎫 Purchase Your LUMORA Ticket
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ticket Image */}
          <div className="space-y-4">
            <Card className="school-card">
              <CardContent className="p-4">
                <img 
                  src="/assets/lumora-ticket.jpg" 
                  alt="LUMORA Get Together Ticket" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
            
            <Card className="school-card">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Ticket Price
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">LKR 4500/=</div>
                  <p className="text-gray-300">Per Person</p>
                  <div className="mt-4 p-3 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                    <p className="text-yellow-300 text-sm">
                      <strong>Event:</strong> LUMORA Get Together<br/>
                      <strong>Date:</strong> 2025 - 19th OCT<br/>
                      <strong>Time:</strong> 09.00AM to 04.00PM<br/>
                      <strong>Venue:</strong> Hotel Ranathunga, Ganapinuwala
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            {/* Bank Details */}
            <Card className="school-card">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Bank Transfer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bankDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                    <span className="text-yellow-300 font-medium">{detail.label}:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{detail.value}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(detail.value, detail.label)}
                        className="h-6 w-6 p-0 hover:bg-yellow-400/20"
                      >
                        {copiedText === detail.label ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-yellow-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="school-card">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact for Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {contactNumbers.map((contact, index) => (
                    <div key={index} className="p-3 bg-gray-800/50 rounded text-center">
                      <div className="text-yellow-300 font-semibold">{contact.name}</div>
                      <div className="text-white text-sm">{contact.number}</div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4 bg-yellow-400/20" />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-yellow-300 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">Email</span>
                  </div>
                  <p className="text-white">lumora2025@aluthwala.edu.lk</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            <Card className="school-card">
              <CardHeader>
                <CardTitle className="text-yellow-400">Payment Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="text-gray-300 text-sm space-y-2">
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">1.</span>
                    Transfer LKR 4500/= to the above bank account
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">2.</span>
                    Take a screenshot of the payment receipt
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">3.</span>
                    Send the receipt to any contact number above
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">4.</span>
                    Include your full name and student ID
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">5.</span>
                    Wait for confirmation from our team
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold"
                onClick={() => window.open('tel:0787644148')}
              >
                Call Now
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold"
                onClick={() => window.open('https://wa.me/94787644148')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
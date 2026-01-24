import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi! I'd like to book an event with KANMI.

*Name:* ${name}
*Event Date:* ${eventDate}
*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/5635801913?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = `KANMI Event Booking - ${eventDate}`;
    const body = `Hi KANMI!

I'd like to book an event.

Name: ${name}
Event Date: ${eventDate}

Message:
${message}`;

    window.location.href = `mailto:munizcanas@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-neutral-200 border border-neutral-100">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Brew Something Special.</h2>
            <p className="text-neutral-500">Reach out for bookings, collaborations, or just to say hi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <p className="font-medium text-lg">Direct Channels</p>

                <a href="https://wa.me/5635801913" className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-neutral-900">WhatsApp</p>
                        <p className="text-sm text-neutral-500">Quickest reply</p>
                    </div>
                </a>

                <a href="mailto:munizcanas@hotmail.com" className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-neutral-900">Email</p>
                        <p className="text-sm text-neutral-500">For detailed inquiries</p>
                    </div>
                </a>

                <a href="#" className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                        <Instagram size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-neutral-900">Instagram</p>
                        <p className="text-sm text-neutral-500">See our latest events</p>
                    </div>
                </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300"
                      placeholder="Jane Doe"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Event Date</label>
                    <input
                      type="text"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                      className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300"
                      placeholder="DD/MM/YYYY"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Message</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300 resize-none"
                      placeholder="Tell us about your event..."
                    />
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </Button>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full py-3 px-6 border border-neutral-200 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Send via Email
                  </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};
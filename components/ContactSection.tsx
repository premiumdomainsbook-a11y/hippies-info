import React from 'react';
import { Send, MessageSquare, CheckCircle } from 'lucide-react';
import { DOMAIN_LIST } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Make an Offer
          </h2>
          <p className="text-slate-400 mb-8">Secure your piece of the digital future.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium uppercase tracking-wide">
              <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Escrow Secured</span>
              </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Fast Transfer</span>
              </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Verified Owner</span>
              </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6 relative z-10">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-xl text-white shadow-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Broker Contact</h3>
              <p className="text-sm text-slate-400">Response time: &lt; 24 hours</p>
            </div>
          </div>

          <form 
            action="https://formsubmit.co/premiumdomainsbook@gmail.com" 
            method="POST"
            className="space-y-6 relative z-10"
          >
            <input type="hidden" name="_subject" value="New Inquiry - Hippies.Info" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 gap-8">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-slate-300 mb-2">
                  Which asset are you interested in?
                </label>
                <div className="relative">
                  <select
                    id="domain"
                    name="domain"
                    required
                    className="block w-full rounded-xl border-slate-700 bg-slate-950 text-white shadow-sm focus:border-rose-500 focus:ring-rose-500 py-4 px-4 appearance-none transition-shadow"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a domain from inventory...</option>
                    {DOMAIN_LIST.map((domain) => (
                      <option key={domain.id} value={domain.name}>
                        {domain.name} - {domain.formattedPrice}
                      </option>
                    ))}
                    <option value="General Inquiry">General Partnership / Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border-slate-700 bg-slate-950 text-white shadow-sm focus:border-rose-500 focus:ring-rose-500 py-4 px-4 placeholder-slate-600 transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message / Offer
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="I'm interested in acquiring this domain for my new venture..."
                  className="block w-full rounded-xl border-slate-700 bg-slate-950 text-white shadow-sm focus:border-rose-500 focus:ring-rose-500 py-4 px-4 placeholder-slate-600 transition-shadow"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-3 py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all hover:scale-[1.01]"
            >
              <Send className="w-5 h-5" />
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
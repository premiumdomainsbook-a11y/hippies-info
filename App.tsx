import React from 'react';
import { Flower } from 'lucide-react';
import Hero from './components/Hero';
import DomainList from './components/DomainList';
import ArticleSection from './components/ArticleSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-body">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-rose-900/20">
                <Flower className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">Hippies.Info</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <a href="#inventory" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Domains</a>
                <a href="#articles" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Journal</a>
                <a href="#contact" className="px-4 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors border border-slate-700">
                    Contact
                </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <DomainList />
        <ArticleSection />
        <ContactSection />
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-slate-300">Hippies.Info</span>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Hippies.Info. Peace, Love & Domains.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms</a>
              <a href="mailto:premiumdomainsbook@gmail.com" className="hover:text-rose-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
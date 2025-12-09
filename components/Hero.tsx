import React from 'react';
import { Flower, Globe, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-slate-950">
      {/* Abstract Psychedelic Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-rose-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <Flower className="w-4 h-4" />
          <span>Peace, Love & Digital Assets</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-display font-bold text-white mb-6 tracking-wide">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            Hippies.Info
          </span>
          <span className="block text-3xl sm:text-5xl mt-4 font-light text-slate-300">
            The Counterculture Marketplace
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Explore the intersection of modern bohemian lifestyle and premium digital real estate. 
          From <strong>Van Life</strong> to <strong>Web3</strong>, secure the domains that define the new age of freedom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#inventory" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2">
            <Globe className="w-5 h-5" />
            Browse Assets
          </a>
          <a href="#articles" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-700">
            <Sparkles className="w-5 h-5" />
            Read Insights
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
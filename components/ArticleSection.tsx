import React from 'react';
import { BookOpen, Hash, Clock } from 'lucide-react';
import { ARTICLES } from '../constants';

const ArticleSection: React.FC = () => {
  return (
    <section id="articles" className="bg-slate-900 py-24 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Digital Counterculture Insights
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Navigating the new world of decentralized finance, sustainable living, and location independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-900/10 group"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-rose-400 font-medium mb-4">
                  <Clock className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-display leading-tight group-hover:text-rose-300 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed font-serif-text text-sm flex-1">
                  {article.content.substring(0, 150)}...
                </p>
                
                <div className="pt-6 border-t border-slate-900 mt-auto">
                   <div className="flex flex-wrap gap-2">
                    {article.keywords.slice(0, 3).map((keyword, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                      >
                        <Hash className="w-2.5 h-2.5 mr-1 opacity-50" />
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
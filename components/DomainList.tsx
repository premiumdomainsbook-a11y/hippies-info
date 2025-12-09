import React, { useState } from 'react';
import { Search, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { DOMAIN_LIST } from '../constants';

const DomainList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDomains = DOMAIN_LIST.filter((domain) =>
    domain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
            <Tag className="w-6 h-6 text-rose-500" />
            Premium Inventory
          </h2>
          <p className="text-slate-400 mt-2">Curated digital land for the modern visionary.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-800 rounded-xl leading-5 bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-all backdrop-blur-sm"
            placeholder="Search domains (e.g., Crypto, NYC)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 bg-slate-950/50 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <div className="col-span-6">Domain Name</div>
          <div className="col-span-3 text-right">Valuation</div>
          <div className="col-span-3 text-right">Action</div>
        </div>

        {filteredDomains.length > 0 ? (
          <div className="divide-y divide-slate-800/50">
            {filteredDomains.map((domain) => (
              <div key={domain.id} className="group relative hover:bg-slate-800/30 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-6 items-center">
                  
                  {/* Name Section */}
                  <div className="col-span-1 md:col-span-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${domain.featured ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-800 text-slate-400'}`}>
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white group-hover:text-rose-400 transition-colors font-body">
                          {domain.name}
                        </h3>
                        {domain.category && (
                          <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                            {domain.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="col-span-1 md:col-span-3 flex items-center md:justify-end">
                     <div className="flex flex-col md:items-end">
                        <span className="text-lg font-bold text-white tracking-tight">{domain.formattedPrice}</span>
                        <span className="text-xs text-slate-500 font-medium">USD / Buy Now</span>
                     </div>
                  </div>

                  {/* Button Section */}
                  <div className="col-span-1 md:col-span-3 flex items-center md:justify-end mt-4 md:mt-0">
                    <a 
                      href={domain.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-indigo-600 text-sm font-medium text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                    >
                      Visit Site <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center text-slate-500">
            <p className="text-lg">No domains found matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-rose-400 hover:underline">Clear Search</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainList;
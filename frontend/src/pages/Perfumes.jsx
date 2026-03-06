import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

const Perfumes = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // In production, this proxies to the backend container
    fetch('/api/perfumes')
      .then(res => res.json())
      .then(data => {
        setPerfumes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching perfumes:', err);
        setLoading(false);
      });
  }, []);

  const families = ['All', 'Oriental', 'Floral', 'Citrus', 'Woody', 'Green'];
  
  const filteredPerfumes = filter === 'All' 
    ? perfumes 
    : perfumes.filter(p => p.family === filter);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-amber border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500 font-sans">Loading database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
        <div>
          <h1 className="text-4xl font-serif text-charcoal mb-2">Discover Scents</h1>
          <p className="text-gray-500 font-sans">Explore our curated collection of Thai perfumery</p>
        </div>
        
        <div className="mt-6 md:mt-0 flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border text-sans border-gray-200 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
          >
            {families.map(f => (
              <option key={f} value={f}>{f} Family</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPerfumes.map(perfume => (
          <Link 
            key={perfume.id} 
            to={`/perfume/${perfume.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full"
          >
            <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 group-hover:bg-amber/5 transition-colors">
               <div className="w-24 h-32 rounded-t-full bg-white border border-gray-200 shadow-sm relative overflow-hidden flex items-center justify-center">
                  <div className="absolute bottom-0 w-full h-1/3 bg-amber/10"></div>
                  <span className="font-serif text-4xl text-gray-200">K</span>
               </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber bg-amber/10 px-2 py-1 rounded-sm">
                    {perfume.family}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-1 group-hover:text-amber transition-colors">{perfume.name}</h3>
                <p className="text-sm text-gray-500 font-sans">{perfume.brand}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPerfumes.length === 0 && (
        <div className="text-center py-24 text-gray-500">
          <p>No perfumes found in this family.</p>
        </div>
      )}
    </div>
  );
};

export default Perfumes;

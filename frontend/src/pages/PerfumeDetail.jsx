import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Droplets, Wind } from 'lucide-react';

const PerfumeDetail = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/perfumes/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Perfume not found');
        return res.json();
      })
      .then(data => {
        setPerfume(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-amber border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error || !perfume) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif text-charcoal mb-4">Oops! {error}</h2>
        <Link to="/perfumes" className="text-amber hover:underline font-sans flex justify-center items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/perfumes" className="inline-flex items-center text-sm font-sans text-gray-500 hover:text-amber mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Visual representation */}
        <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm flex items-center justify-center min-h-[500px]">
          <div className="w-48 h-64 rounded-t-full bg-offwhite border border-gray-200 shadow-lg relative overflow-hidden flex flex-col items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-amber/10"></div>
             <span className="font-serif text-6xl text-gray-200 relative z-10">K</span>
             <p className="mt-4 text-xs font-serif uppercase tracking-widest text-gray-400 relative z-10">{perfume.brand}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <div className="mb-4 inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full">
              {perfume.family}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-2">{perfume.name}</h1>
            <p className="text-xl text-gray-500 font-sans">{perfume.brand}</p>
          </div>

          {/* Accords */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 border-b pb-2">Main Accords</h3>
            <div className="space-y-4">
              {perfume.accords.map((accord, idx) => (
                <div key={idx} className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-sm text-charcoal bg-gray-100">
                        {accord.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-500">
                        {accord.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-100">
                    <div style={{ width: `${accord.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pyramid */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 border-b pb-2">Fragrance Pyramid</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs uppercase text-gray-500 font-bold mb-2">Top Notes</p>
                <p className="text-charcoal font-medium">{perfume.pyramid.top.join(', ')}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs uppercase text-gray-500 font-bold mb-2">Middle Notes</p>
                <p className="text-charcoal font-medium">{perfume.pyramid.middle.join(', ')}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs uppercase text-gray-500 font-bold mb-2">Base Notes</p>
                <p className="text-charcoal font-medium">{perfume.pyramid.base.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Voting / Community */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 border-b pb-2">Community Consensus</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                 <Droplets className="w-8 h-8 text-amber hover:scale-110 transition-transform mb-3" />
                 <span className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Longevity</span>
                 <span className="text-3xl font-serif text-charcoal">{perfume.voting.longevity}%</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                 <Wind className="w-8 h-8 text-amber hover:scale-110 transition-transform mb-3" />
                 <span className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Sillage</span>
                 <span className="text-3xl font-serif text-charcoal">{perfume.voting.sillage}%</span>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">* Mock voting metrics for DevOps MVP demonstration</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerfumeDetail;

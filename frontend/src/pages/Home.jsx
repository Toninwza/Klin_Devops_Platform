import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/perfumes');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-serif text-charcoal leading-tight">
          Discover the essence of <br className="hidden md:block"/>
          <span className="italic text-amber">Thai Perfumery</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-xl mx-auto font-sans">
          The curated database for authentic Thai scents, artisanal brands, and community reviews.
        </p>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-amber transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search by brand, note, or perfume name..." 
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all text-lg font-sans bg-white"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-charcoal text-white px-6 rounded-full hover:bg-black transition-colors font-medium text-sm"
          >
            Explore
          </button>
        </form>

        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 mt-16">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-amber">100+</span>
            <span className="text-sm text-gray-500 mt-2 uppercase tracking-wider">Thai Brands</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-amber">2,000+</span>
            <span className="text-sm text-gray-500 mt-2 uppercase tracking-wider">Perfumes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-amber">10k+</span>
            <span className="text-sm text-gray-500 mt-2 uppercase tracking-wider">Votes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

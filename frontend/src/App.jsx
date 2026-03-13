import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfumes from './pages/Perfumes'
import PerfumeDetail from './pages/PerfumeDetail'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b border-gray-200 py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="font-serif text-2xl font-semibold text-charcoal tracking-tight">Klin<span className="text-amber">.</span></a>
          <div className="flex space-x-6">
            <a href="/" className="text-sm font-medium hover:text-amber transition-colors">Home</a>
            <a href="/perfumes" className="text-sm font-medium hover:text-amber transition-colors">Discover</a>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/perfume/:id" element={<PerfumeDetail />} />
        </Routes>
      </main>

      <footer className="bg-charcoal text-offwhite py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Klin Scent Database.</p>
      </footer>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import { 
  Recycle, 
  Leaf, 
  Droplets, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  Mail,
  MapPin,
  CheckCircle2,
  XCircle,
  GraduationCap
} from 'lucide-react';

// --- Pages Components ---

const HomePage = ({ navigate }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative bg-emerald-900 text-white py-20 px-6 rounded-3xl m-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523293968677-8122313283e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-500/50 text-emerald-300 text-sm font-bold mb-6 backdrop-blur-sm">
          AWARENESS INITIATIVE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Recycling Isn't Just a Choice.<br/>It's Our Future.
        </h1>
        <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
          Join the movement to switch from harmful mechanical shredding to sustainable bio-enzymatic solutions. Knowledge is the first step to change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('methods')} className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
            <BookOpen size={20} /> Learn the Methods
          </button>
          <button onClick={() => navigate('calculator')} className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-500 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-emerald-500">
            <Calculator size={20} /> Check Your Impact
          </button>
        </div>
      </div>
    </section>

    {/* Quotes Section */}
    <section className="py-16 px-6 container mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { q: "The greatest threat to our planet is the belief that someone else will save it.", a: "Robert Swan" },
          { q: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", a: "Annie Leonard" },
          { q: "We do not inherit the Earth from our ancestors; we borrow it from our children.", a: "Native American Proverb" }
        ].map((quote, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
            <div className="text-emerald-200 absolute top-4 left-4 text-6xl font-serif opacity-50">"</div>
            <p className="text-slate-700 font-medium italic mb-4 relative z-10 pt-4">{quote.q}</p>
            <p className="text-emerald-600 font-bold text-sm uppercase tracking-wide">— {quote.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const MethodsPage = () => (
  <div className="container mx-auto px-6 py-12 animate-fade-in">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Understanding the Methods</h2>
      <p className="text-slate-600 text-lg">
        Not all recycling is created equal. See why the industry needs to evolve.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* The Old Way */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-slate-100 p-6 border-b border-slate-200">
          <div className="flex items-center gap-3 text-slate-600 mb-2">
            <XCircle size={24} className="text-red-500" />
            <span className="font-bold tracking-wider text-sm uppercase">The Old Way</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Mechanical Recycling</h3>
        </div>
        <div className="p-8">
          <p className="text-slate-600 mb-6 leading-relaxed">
            Imagine putting a t-shirt into a giant blender. That's mechanical recycling. It shreds fabric into "shoddy," breaking the fibers apart.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-100 p-1 rounded text-red-600 mt-1"><XCircle size={16} /></div>
              <div>
                <strong className="block text-slate-900">Damaged Fibers</strong>
                <span className="text-slate-500 text-sm">Fibers get short and weak. Can't be used for new clothes.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-100 p-1 rounded text-red-600 mt-1"><XCircle size={16} /></div>
              <div>
                <strong className="block text-slate-900">Downcycling</strong>
                <span className="text-slate-500 text-sm">Turns into insulation or padding, which eventually ends up in landfills.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-100 p-1 rounded text-red-600 mt-1"><XCircle size={16} /></div>
              <div>
                <strong className="block text-slate-900">Heavy Waste</strong>
                <span className="text-slate-500 text-sm">Generates large amounts of unusable fiber dust.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* The New Way */}
      <div className="bg-emerald-50 rounded-3xl shadow-xl overflow-hidden border border-emerald-100 relative">
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
        <div className="bg-emerald-100/50 p-6 border-b border-emerald-200">
          <div className="flex items-center gap-3 text-emerald-800 mb-2">
            <CheckCircle2 size={24} className="text-emerald-600" />
            <span className="font-bold tracking-wider text-sm uppercase">The Future</span>
          </div>
          <h3 className="text-2xl font-bold text-emerald-950">Bio-Enzymatic Recycling</h3>
        </div>
        <div className="p-8">
          <p className="text-emerald-900/70 mb-6 leading-relaxed">
            This method uses nature's own tools—enzymes—to gently "clean" the fabric. It removes starch and dyes without hurting the cotton.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-emerald-200 p-1 rounded text-emerald-700 mt-1"><CheckCircle2 size={16} /></div>
              <div>
                <strong className="block text-emerald-900">Zero Damage</strong>
                <span className="text-emerald-800/70 text-sm">Fibers stay long and strong. Can be made into new, high-quality clothes.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-emerald-200 p-1 rounded text-emerald-700 mt-1"><CheckCircle2 size={16} /></div>
              <div>
                <strong className="block text-emerald-900">Upcycling</strong>
                <span className="text-emerald-800/70 text-sm">Truly circular. Old shirt → New shirt.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-emerald-200 p-1 rounded text-emerald-700 mt-1"><CheckCircle2 size={16} /></div>
              <div>
                <strong className="block text-emerald-900">Valuable Byproducts</strong>
                <span className="text-emerald-800/70 text-sm">The waste water contains sugars that can be used for fuel or compost!</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CalculatorPage = () => {
  const [waste, setWaste] = useState(500);
  
  // Constants based on your report data
  const waterSavedPerKg = 40; // Liters
  const ghgSavedPerKg = 2.5; // kg CO2e
  
  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
            <Leaf className="text-emerald-400" /> Impact Calculator
          </h2>
          <p className="text-slate-400">
            See the difference switching to Bio-Enzymatic methods can make.
          </p>
        </div>

        <div className="mb-12">
          <label className="block text-emerald-400 text-sm font-bold mb-4 uppercase tracking-wider text-center">
            Amount of Textile Waste (kg/month)
          </label>
          <div className="flex items-center gap-4 max-w-lg mx-auto">
            <span className="text-slate-500 font-mono">100kg</span>
            <input 
              type="range" 
              min="100" 
              max="5000" 
              step="50" 
              value={waste} 
              onChange={(e) => setWaste(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <span className="text-slate-500 font-mono">5000kg</span>
          </div>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold text-white">{waste}</span>
            <span className="text-slate-400 ml-2">kg</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center">
            <Droplets size={32} className="mx-auto text-blue-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{(waste * waterSavedPerKg).toLocaleString()} L</div>
            <div className="text-sm text-emerald-200">Water Saved per Month</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center">
            <Leaf size={32} className="mx-auto text-green-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{(waste * ghgSavedPerKg).toLocaleString()} kg</div>
            <div className="text-sm text-emerald-200">CO2 Emissions Avoided</div>
          </div>
        </div>
        
        <p className="text-center text-xs text-slate-500 mt-8">
          *Calculations based on comparative study of Chemical vs. Bio-Enzymatic desizing processes (2020-2025).
        </p>
      </div>
    </div>
  );
};

const TeamPage = () => (
  <div className="container mx-auto px-6 py-12 animate-fade-in">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-6">
          <GraduationCap size={18} />
          STUDENTS OF DYPIU
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Group 08: IceQuants</h2>
        <p className="text-slate-600">
          Dedicated to researching sustainable industrial solutions for a better tomorrow.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-8">
        <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Team Members</h3>
          <Users size={20} className="text-slate-400" />
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { id: "20230901013", name: "Rahul Patil", role: "Lead Researcher" },
            { id: "20230901054", name: "Tanvi Mahajan", role: "Research Associate" },
            { id: "20230901059", name: "Shivangni Shree", role: "Research Associate" },
            { id: "20230901070", name: "Deep Nirheli", role: "Data Analyst" },
            { id: "20220901002", name: "Sabreshwar Rout", role: "Technical Lead" },
          ].map((member) => (
            <div key={member.id} className="px-8 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <div className="font-bold text-slate-900">{member.name}</div>
                <div className="text-xs text-slate-500">ID: {member.id}</div>
              </div>
              <span className="text-xs font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
        <p className="text-slate-400 mb-6">
          Have questions about our research or want to collaborate?
        </p>
        <a href="mailto:20230901013@dypiu.ac.in" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-lg transition-colors">
          <Mail size={20} />
          20230901013@dypiu.ac.in
        </a>
        <div className="mt-4 text-sm text-slate-500 flex justify-center items-center gap-2">
          <MapPin size={14} />
          DYPIU Campus, Pune, Maharashtra
        </div>
      </div>
    </div>
  </div>
);

// --- Main Layout ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Recycle size={24} />
            </div>
            <div className="text-left">
              <div className="font-bold text-xl leading-none text-slate-900">IceQuants</div>
              <div className="text-xs text-slate-500 font-medium">DYPIU Group 08</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            {['home', 'methods', 'calculator', 'team'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize hover:text-emerald-600 transition-colors relative py-2 ${
                  currentPage === page ? 'text-emerald-600 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-emerald-600 after:rounded-full' : ''
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={setCurrentPage} />}
        {currentPage === 'methods' && <MethodsPage />}
        {currentPage === 'calculator' && <CalculatorPage />}
        {currentPage === 'team' && <TeamPage />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-6 text-emerald-500 font-bold text-xl">
            <Leaf size={24} /> EcoSustainability Initiative
          </div>
          <p className="max-w-md mx-auto mb-8 text-slate-500">
            "Sustainable development is the pathway to the future we want for all. It offers a framework to generate economic growth, achieve social justice, exercise environmental stewardship and strengthen governance."
          </p>
          <div className="text-sm border-t border-slate-800 pt-8">
            <p>&copy; 2025 Group 08 IceQuants | DY Patil International University</p>
            <p className="mt-2">Research Duration: 48 Days | Pune & Mumbai Region</p>
          </div>
        </div>
      </footer>
      
      {/* Simple CSS Animation injection for Fade In */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;
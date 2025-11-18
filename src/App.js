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
  GraduationCap,
  Sparkles,
  Zap,
  Scale,
  PackageCheck, // New icon for product
  FlaskConical // New icon for byproduct
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';


// --- Shared Background Pattern for Dark Mode ---
const DarkBackground = ({ children }) => (
  <div className="relative min-h-screen bg-slate-950 text-slate-200">
    {/* Subtle grid pattern background */}
    <div 
      className="absolute inset-0 z-0 opacity-10" 
      style={{
        backgroundImage: 'radial-gradient(var(--tw-gradient-stops))',
        '--tw-gradient-stops': 'var(--tw-gradient-from), transparent var(--tw-gradient-to)',
        '--tw-gradient-from': 'rgba(16, 185, 129, 0.1)', // emerald-500 with opacity
        '--tw-gradient-to': 'rgba(16, 185, 129, 0.1)', // emerald-500 with opacity
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center',
        maskImage: 'radial-gradient(ellipse at center, white, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, white, transparent 70%)',
      }}
    ></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);


// --- Pages Components ---

const HomePage = ({ navigate }) => (
  <div className="animate-fade-in">
    <section className="relative bg-emerald-900 text-white py-20 px-6 rounded-3xl m-4 overflow-hidden shadow-xl">
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
          <button onClick={() => navigate('tools')} className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-500 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-emerald-500">
            <Calculator size={20} /> Explore Tools
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
          <div key={idx} className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow relative">
            <div className="text-emerald-200 absolute top-4 left-4 text-6xl font-serif opacity-50">"</div>
            <p className="text-slate-300 font-medium italic mb-4 relative z-10 pt-4">{quote.q}</p>
            <p className="text-emerald-500 font-bold text-sm uppercase tracking-wide">— {quote.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const MethodsPage = () => {
  const comparisonData = [
    { name: 'Mechanical', ghgReduction: 30, waterUsage: 100 },
    { name: 'Bio-Enzymatic', ghgReduction: 70, waterUsage: 20 },
  ];

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Understanding the Methods</h2>
        <p className="text-slate-400 text-lg">
          Not all recycling is created equal. See why the industry needs to evolve.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* The Old Way */}
        <div className="bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-700">
          <div className="bg-slate-700 p-6 border-b border-slate-600">
            <div className="flex items-center gap-3 text-slate-400 mb-2">
              <XCircle size={24} className="text-red-500" />
              <span className="font-bold tracking-wider text-sm uppercase">The Old Way</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Mechanical Recycling</h3>
          </div>
          <div className="p-8">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Imagine putting a t-shirt into a giant blender. That's mechanical recycling. It shreds fabric into "shoddy," breaking the fibers apart.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-red-900/30 p-1 rounded text-red-400 mt-1"><XCircle size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Damaged Fibers</strong>
                  <span className="text-slate-400 text-sm">Fibers get short and weak. Can't be used for new clothes.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-900/30 p-1 rounded text-red-400 mt-1"><XCircle size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Downcycling</strong>
                  <span className="text-slate-400 text-sm">Turns into insulation or padding, which eventually ends up in landfills.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-900/30 p-1 rounded text-red-400 mt-1"><XCircle size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Heavy Waste</strong>
                  <span className="text-slate-400 text-sm">Generates large amounts of unusable fiber dust.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* The New Way */}
        <div className="bg-emerald-900/30 rounded-3xl shadow-xl overflow-hidden border border-emerald-700 relative">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
          <div className="bg-emerald-800/50 p-6 border-b border-emerald-700">
            <div className="flex items-center gap-3 text-emerald-300 mb-2">
              <CheckCircle2 size={24} className="text-emerald-400" />
              <span className="font-bold tracking-wider text-sm uppercase">The Future</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Bio-Enzymatic Recycling</h3>
          </div>
          <div className="p-8">
            <p className="text-emerald-200 mb-6 leading-relaxed">
              This method uses nature's own tools—enzymes—to gently "clean" the fabric. It removes starch and dyes without hurting the cotton.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-emerald-900/50 p-1 rounded text-emerald-400 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Zero Damage</strong>
                  <span className="text-emerald-300 text-sm">Fibers stay long and strong. Can be made into new, high-quality clothes.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-900/50 p-1 rounded text-emerald-400 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Upcycling</strong>
                  <span className="text-emerald-300 text-sm">Truly circular. Old shirt → New shirt.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-900/50 p-1 rounded text-emerald-400 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                  <strong className="block text-slate-100">Valuable Byproducts</strong>
                  <span className="text-emerald-300 text-sm">The waste water contains sugars that can be used for fuel or compost!</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* New: Method Comparison Visualizer */}
      <div className="bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-700 animate-fade-in">
        <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <Scale size={24} className="text-blue-400" /> Method Impact Comparison
        </h3>
        <p className="text-slate-400 mb-8">
          See the clear differences in environmental impact between Mechanical and Bio-Enzymatic textile recycling.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={comparisonData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis yAxisId="left" orientation="left" stroke="#94a3b8" label={{ value: 'GHG Reduction (%)', angle: -90, position: 'insideLeft', fill: '#64748b' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" label={{ value: 'Water Usage (L/kg)', angle: 90, position: 'insideRight', fill: '#64748b' }} />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.1)' }}
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#e2e8f0' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="ghgReduction" name="GHG Reduction" fill="#10b981" />
            <Bar yAxisId="right" dataKey="waterUsage" name="Water Usage" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-xs text-slate-500 mt-6">
          *Values are illustrative and represent average comparative benefits based on recent studies.
        </p>
      </div>
    </div>
  );
};

const CalculatorPage = () => {
  const [waste, setWaste] = useState(500);
  
  // Constants based on your report data
  const waterSavedPerKg = 40; // Liters
  const ghgSavedPerKg = 2.5; // kg CO2e
  
  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto border border-slate-700">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
            <Leaf className="text-emerald-400" /> Industrial Impact Calculator
          </h2>
          <p className="text-slate-400">
            See the difference switching to Bio-Enzymatic methods can make at an industrial scale.
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


const ToolsPage = () => {
  const [item, setItem] = useState('tshirt');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  // --- Expanded Data List based on Project Research ---
  const conversions = {
    tshirt: { 
      label: "Cotton T-Shirt (0.2kg)",
      weight: 0.2,
      water: 2700, 
      co2: 2.3, 
      energy: 0.1,
      recycledOutput: "Cellulose Pulp / Viscose",
      byproductVal: "Bio-ethanol (via Glucose)"
    },
    jeans: { 
      label: "Denim Jeans (0.8kg)",
      weight: 0.8,
      water: 8000, 
      co2: 15, 
      energy: 0.5,
      recycledOutput: "Regenerated Cellulosic Fiber",
      byproductVal: "Biodegradable Indigo Sludge"
    },
    pet_bottle: { 
      label: "PET Plastic Bottle (0.01kg)",
      weight: 0.01,
      water: 5, 
      co2: 0.08, 
      energy: 0.01,
      recycledOutput: "Recycled PET Granules",
      byproductVal: "TPA Monomers"
    },
    poly_shirt: { 
      label: "Polyester Sport Shirt (0.25kg)",
      weight: 0.25,
      water: 500, 
      co2: 5.5, 
      energy: 1.2,
      recycledOutput: "Polyester Chips",
      byproductVal: "Ethylene Glycol Recovery"
    },
    blend_shirt: { 
      label: "Poly-Cotton Blend Shirt (0.2kg)",
      weight: 0.2,
      water: 3000, 
      co2: 4.0, 
      energy: 0.4,
      recycledOutput: "Separated PET & Cellulose",
      byproductVal: "Glucose Syrup Feedstock"
    },
    bedsheet: { 
      label: "Cotton Bed Sheet (0.8kg)",
      weight: 0.8,
      water: 6000, 
      co2: 9.0, 
      energy: 0.4,
      recycledOutput: "High-Quality Pulp",
      byproductVal: "Compost / Fertilizer"
    },
    wool_sweater: { 
      label: "Wool Sweater (0.5kg)",
      weight: 0.5,
      water: 4000, 
      co2: 12.0, 
      energy: 0.3,
      recycledOutput: "Keratin Hydrolysate",
      byproductVal: "Amino Acid Fertilizer"
    },
    nylon_jacket: { 
      label: "Nylon Jacket (0.6kg)",
      weight: 0.6,
      water: 1500, 
      co2: 8.0, 
      energy: 1.5,
      recycledOutput: "Depolymerized Nylon 6",
      byproductVal: "Caprolactam (Monomer)"
    },
    silk_scarf: { 
      label: "Silk Scarf (0.1kg)",
      weight: 0.1,
      water: 1000, 
      co2: 1.5, 
      energy: 0.1,
      recycledOutput: "Silk Protein Solution",
      byproductVal: "Sericin (Cosmetics)"
    },
    viscose_dress: { 
      label: "Viscose/Rayon Dress (0.4kg)",
      weight: 0.4,
      water: 2000, 
      co2: 3.5, 
      energy: 0.5,
      recycledOutput: "Regenerated Cellulose",
      byproductVal: "Sodium Sulphate (Salt)"
    }
  };

  const calculateImpact = () => {
    const data = conversions[item];
    if (data) {
      setResult({
        water: (data.water * quantity).toLocaleString(),
        co2: (data.co2 * quantity).toLocaleString(),
        energy: (data.energy * quantity).toLocaleString(),
        recycled: data.recycledOutput,
        byproduct: data.byproductVal
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto border border-slate-700">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
            <Sparkles className="text-purple-400" /> Textile Waste Converter
          </h2>
          <p className="text-slate-400">
            Calculate the tangible environmental savings and circular economy potential of various textile wastes using Bio-Enzymatic methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <label htmlFor="item" className="block text-emerald-400 text-sm font-bold mb-2 uppercase tracking-wider">
              Select Textile Type
            </label>
            <select
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 text-white p-3 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            >
              {Object.entries(conversions).map(([key, value]) => (
                <option key={key} value={key}>{value.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-emerald-400 text-sm font-bold mb-2 uppercase tracking-wider">
              Quantity (Items)
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              min="1"
              className="w-full bg-slate-700 border border-slate-600 text-white p-3 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        <button 
          onClick={calculateImpact} 
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-10"
        >
          <Calculator size={20} /> Calculate Circular Value
        </button>

        {result && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Environmental Savings Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-blue-500/30 p-6 rounded-2xl text-center">
                <Droplets size={32} className="mx-auto text-blue-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{result.water} L</div>
                <div className="text-sm text-blue-200">Water Saved</div>
              </div>
              <div className="bg-slate-900/50 border border-green-500/30 p-6 rounded-2xl text-center">
                <Leaf size={32} className="mx-auto text-green-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{result.co2} kg</div>
                <div className="text-sm text-green-200">CO2 Avoided</div>
              </div>
              <div className="bg-slate-900/50 border border-yellow-500/30 p-6 rounded-2xl text-center">
                <Zap size={32} className="mx-auto text-yellow-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{result.energy} kWh</div>
                <div className="text-sm text-yellow-200">Energy Saved</div>
              </div>
            </div>

            {/* Circular Economy Output Row (New) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-2xl flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full text-purple-300">
                    <PackageCheck size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-1">Recycled Product</div>
                    <div className="text-xl font-bold text-white">{result.recycled}</div>
                    <div className="text-xs text-slate-400 mt-1">Ready for spinning/manufacturing</div>
                  </div>
               </div>

               <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-2xl flex items-center gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-full text-orange-300">
                    <FlaskConical size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-orange-300 font-bold uppercase tracking-wider mb-1">Valorized Byproduct</div>
                    <div className="text-xl font-bold text-white">{result.byproduct}</div>
                    <div className="text-xs text-slate-400 mt-1">Converted from waste stream</div>
                  </div>
               </div>
            </div>

          </div>
        )}

        <p className="text-center text-xs text-slate-500 mt-8">
          *Savings & outputs based on Bio-Enzymatic method efficacy data (2020-2025) compared to traditional chemical/mechanical processes.
        </p>
      </div>
    </div>
  );
};


const TeamPage = () => (
  <div className="container mx-auto px-6 py-12 animate-fade-in">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-800">
          <GraduationCap size={18} />
          STUDENTS OF DYPIU
        </div>
        <h2 className="text-4xl font-bold text-slate-100 mb-4">Group 08: IceQuants</h2>
        <p className="text-slate-400">
          Dedicated to researching sustainable industrial solutions for a better tomorrow.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden mb-8">
        <div className="bg-slate-700 px-8 py-4 border-b border-slate-600 flex justify-between items-center">
          <h3 className="font-bold text-slate-100">Team Members</h3>
          <Users size={20} className="text-slate-400" />
        </div>
        <div className="divide-y divide-slate-700">
          {[
            { id: "20230901013", name: "Rahul Patil", role: "Lead Researcher" },
            { id: "20230901054", name: "Tanvi Mahajan", role: "Research Associate" },
            { id: "20230901059", name: "Shivangni Shree", role: "Research Associate" },
            { id: "20230901070", name: "Deep Nirheli", role: "Data Analyst" },
            { id: "20220901002", name: "Sabreshwar Rout", role: "Technical Lead" },
          ].map((member) => (
            <div key={member.id} className="px-8 py-4 flex justify-between items-center hover:bg-slate-700 transition-colors">
              <div>
                <div className="font-bold text-slate-100">{member.name}</div>
                <div className="text-xs text-slate-400">ID: {member.id}</div>
              </div>
              <span className="text-xs font-medium px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full border border-emerald-800">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center border border-slate-700">
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
    <DarkBackground>
      <div className="min-h-screen font-sans flex flex-col">
        {/* Navbar */}
        <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-6 h-20 flex justify-between items-center">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Recycle size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl leading-none text-slate-100">IceQuants</div>
                <div className="text-xs text-slate-400 font-medium">DYPIU Group 08</div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 font-medium text-slate-400">
              {['home', 'methods', 'calculator', 'tools', 'team'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`capitalize hover:text-emerald-500 transition-colors relative py-2 ${
                    currentPage === page ? 'text-emerald-500 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-emerald-500 after:rounded-full' : ''
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
          {currentPage === 'tools' && <ToolsPage />}
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
    </DarkBackground>
  );
};

export default App;
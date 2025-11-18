import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ScatterChart, 
  Scatter, 
  ZAxis,
  ReferenceLine
} from 'recharts';
import { 
  Activity, 
  MapPin, 
  Database, 
  Cpu, 
  Droplets, 
  Wind, 
  AlertTriangle,
  Terminal,
  TrendingUp,
  Factory
} from 'lucide-react';

// --- Real Survey Data (Mocked into Structure) ---
const COMPANY_DATA = [
  { id: 1, name: 'Galiyar Waste', location: 'Pimpri-Chinchwad', method: 'Mechanical', scale: 1200, ghg: 30, type: 'Small' },
  { id: 2, name: 'Greenwear', location: 'Bhosari MIDC', method: 'Thermal', scale: 800, ghg: 20, type: 'Small' },
  { id: 3, name: 'Biolaxi Enzymes', location: 'Thane', method: 'Bio-Enzymatic', scale: 500, ghg: 70, type: 'Pilot' },
  { id: 4, name: 'Circular Threads', location: 'Pune City', method: 'Upcycling', scale: 300, ghg: 35, type: 'SME' },
  { id: 5, name: 'EnviGreen', location: 'Pune', method: 'Thermal & Chem', scale: 1000, ghg: 40, type: 'Pilot' },
  { id: 6, name: 'Arvind Ltd.', location: 'Mumbai', method: 'Mechanical', scale: 5000, ghg: 55, type: 'Industrial' },
  { id: 7, name: 'Aditya Birla', location: 'Mumbai', method: 'Chemical', scale: 3500, ghg: 65, type: 'Industrial' },
  { id: 8, name: 'Upcyclers India', location: 'Mumbai', method: 'Upcycling', scale: 250, ghg: 30, type: 'SME' },
  { id: 9, name: 'Renewcell', location: 'Mumbai', method: 'Chemical', scale: 2000, ghg: 75, type: 'Industrial' },
  { id: 10, name: 'Ginni Filaments', location: 'Mumbai', method: 'Mech + Chem', scale: 1800, ghg: 60, type: 'Industrial' },
];

const ZONES = [
  { id: 'pune', name: 'Pune City', coords: { x: 65, y: 60 }, type: 'Mixed' },
  { id: 'pimpri', name: 'Pimpri-Chinchwad', coords: { x: 55, y: 50 }, type: 'Mechanical Hub' },
  { id: 'bhosari', name: 'Bhosari MIDC', coords: { x: 60, y: 40 }, type: 'Thermal Hub' },
  { id: 'thane', name: 'Thane', coords: { x: 30, y: 20 }, type: 'Bio-Innovation' },
  { id: 'mumbai', name: 'Mumbai Port', coords: { x: 20, y: 60 }, type: 'Industrial Export' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-600 p-3 rounded shadow-xl text-xs">
        <p className="font-bold text-emerald-400 mb-1">{data.name}</p>
        <p className="text-slate-300">Method: {data.method}</p>
        <p className="text-slate-300">Scale: {data.scale} kg/mo</p>
        <p className="text-slate-300">GHG Red: {data.ghg}%</p>
      </div>
    );
  }
  return null;
};

const App = () => {
  const [ticker, setTicker] = useState(92450);
  const [selectedZone, setSelectedZone] = useState(null);
  const [calcInput, setCalcInput] = useState(5000); // Default to Arvind's scale
  const [time, setTime] = useState(new Date());

  // Simulation Effects
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => prev + Math.floor(Math.random() * 5));
      setTime(new Date());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Filter Data based on map selection
  const filteredData = selectedZone 
    ? COMPANY_DATA.filter(c => c.location.includes(selectedZone.name) || (selectedZone.id === 'mumbai' && c.location === 'Mumbai'))
    : COMPANY_DATA;

  const savingsWater = (calcInput * 45); // 45L per kg (Chemical)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-mono p-4 md:p-6 overflow-hidden flex flex-col">
      
      {/* Inject Custom Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-custom {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* --- Header / Top Bar --- */}
      <header className="flex justify-between items-end border-b-2 border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-500 mb-1">
            <Activity size={18} className="animate-pulse" />
            <span className="text-xs font-bold tracking-widest">LIVE MONITORING</span>
          </div>
          <h1 className="text-3xl text-slate-100 font-bold tracking-tighter">GAP<span className="text-slate-600">_</span>MONITOR<span className="text-emerald-500">.v1</span></h1>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-2xl text-slate-100 font-bold">{time.toLocaleTimeString()}</div>
          <div className="text-xs text-slate-600">PUNE_MAHARASHTRA_IST</div>
        </div>
      </header>

      {/* --- Ticker --- */}
      <div className="bg-slate-900 border-y border-slate-800 py-2 mb-6 overflow-hidden whitespace-nowrap relative">
        <div className="inline-block animate-marquee-custom text-sm font-medium text-slate-300 whitespace-nowrap">
          <span className="mx-4 text-emerald-500">● PUNE WASTE GENERATED: {ticker.toLocaleString()} TONS</span>
          <span className="mx-4 text-blue-500">● SURVEY COMPLETION: 100%</span>
          <span className="mx-4 text-orange-500">● ADOPTION GAP: CRITICAL</span>
          <span className="mx-4 text-red-500">● DOMINANT METHOD: MECHANICAL (55% SHARE)</span>
          <span className="mx-4 text-emerald-500">● BIO-ENZYME EFFICACY: +70% GHG REDUCTION</span>
        </div>
      </div>

      {/* --- Main Grid Layout --- */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
        
        {/* --- LEFT COL: Interactive Map (4 Cols) --- */}
        <div className="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
            <h2 className="text-slate-100 font-bold flex items-center gap-2">
              <MapPin size={16} /> REGIONAL_MAP
            </h2>
            <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">INTERACTIVE</span>
          </div>
          
          {/* Styled SVG Map */}
          <div className="relative flex-grow bg-slate-950 rounded border border-slate-800 overflow-hidden group min-h-[300px]">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Nodes */}
            {ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone === selectedZone ? null : zone)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:opacity-100 ${selectedZone && selectedZone.id !== zone.id ? 'opacity-30' : 'opacity-100'}`}
                style={{ left: `${zone.coords.x}%`, top: `${zone.coords.y}%` }}
              >
                <div className={`w-4 h-4 rounded-full border-2 ${zone.id === 'thane' ? 'border-emerald-500 bg-emerald-500/20 animate-pulse' : 'border-blue-500 bg-slate-900'}`}></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 z-10">
                  {zone.name}
                </div>
              </button>
            ))}

            {/* Connection Lines (Decorative) */}
            <svg className="absolute inset-0 pointer-events-none opacity-20">
              <line x1="20%" y1="60%" x2="30%" y2="20%" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
              <line x1="30%" y1="20%" x2="60%" y2="40%" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
              <line x1="60%" y1="40%" x2="55%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
              <line x1="55%" y1="50%" x2="65%" y2="60%" stroke="#94a3b8" strokeWidth="1" />
            </svg>
          </div>

          {/* Selected Zone Info */}
          <div className="mt-4 h-32 bg-slate-950 border border-slate-800 p-3 rounded text-xs overflow-y-auto">
            {selectedZone ? (
              <>
                <div className="font-bold text-emerald-400 mb-2">{`>> ZONE: ${selectedZone.name.toUpperCase()}`}</div>
                <div className="mb-2">TYPE: {selectedZone.type}</div>
                <div className="mb-2">COMPANIES FOUND: {filteredData.length}</div>
                <div className="space-y-1">
                  {filteredData.map(c => (
                    <div key={c.id} className="flex justify-between border-b border-slate-800 pb-1">
                      <span>{c.name}</span>
                      <span className={c.method.includes('Bio') ? 'text-emerald-500' : 'text-slate-500'}>{c.method}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-600 italic">
                Select a zone on map to inspect
              </div>
            )}
          </div>
        </div>

        {/* --- RIGHT COL: Analytics (8 Cols) --- */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Row 1: Scatter Plot (The Core Insight) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex-grow min-h-[300px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-slate-100 font-bold flex items-center gap-2">
                <Database size={16} /> SCALE_VS_EFFICACY_ANALYSIS
              </h2>
              <div className="flex gap-4 text-xs">
                 <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Bio-Enzymatic</div>
                 <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Conventional</div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" dataKey="scale" name="Scale" unit=" kg/mo" stroke="#94a3b8" label={{ value: 'Monthly Production Scale (kg)', position: 'bottom', fill: '#64748b', fontSize: 12 }} />
                <YAxis type="number" dataKey="ghg" name="GHG Reduction" unit="%" stroke="#94a3b8" label={{ value: 'GHG Reduction %', angle: -90, position: 'left', fill: '#64748b', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <ReferenceLine x={2000} stroke="red" strokeDasharray="3 3" label={{ position: 'top', value: 'Industrial Threshold', fill: 'red', fontSize: 10 }} />
                
                {/* Bio Companies */}
                <Scatter name="Bio" data={filteredData.filter(d => d.method.includes('Bio'))} fill="#10b981" shape="circle" />
                {/* Conventional Companies */}
                <Scatter name="Conventional" data={filteredData.filter(d => !d.method.includes('Bio'))} fill="#3b82f6" shape="square" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Row 2: Impact Calculator */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
              <h2 className="text-slate-100 font-bold flex items-center gap-2">
                <Terminal size={16} /> TRANSITION_SIMULATOR
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div>
                  <label className="text-xs text-slate-500 block mb-2 uppercase tracking-widest">Target Scale (Input)</label>
                  <div className="flex items-end gap-2 mb-2">
                     <span className="text-3xl text-white font-bold">{calcInput.toLocaleString()}</span>
                     <span className="text-sm mb-1 text-slate-500">kg/month</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="10000" 
                    step="500" 
                    value={calcInput} 
                    onChange={(e) => setCalcInput(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <p className="text-xs text-slate-600 mt-2">
                     *Simulating shift from Chemical to Bio-Enzymatic method.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 border border-slate-800 rounded">
                     <div className="text-blue-400 text-xs font-bold flex items-center gap-2 mb-1">
                        <Droplets size={12} /> WATER SAVED
                     </div>
                     <div className="text-xl text-white font-bold">{savingsWater.toLocaleString()} L</div>
                  </div>
                  <div className="bg-slate-950 p-4 border border-slate-800 rounded">
                     <div className="text-emerald-400 text-xs font-bold flex items-center gap-2 mb-1">
                        <Wind size={12} /> GHG REDUCTION
                     </div>
                     <div className="text-xl text-white font-bold">70%</div>
                     <div className="text-[10px] text-emerald-600">vs. 55% baseline</div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;

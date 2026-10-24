// import React from 'react';

// const bags = [
//   { id: 1, name: "Louis Vuitton Speedy 40 Bandouliere Monogram Leather Brown Monogram", price: "₹16,10,499", img: bag1 },
//   { id: 2, name: "Hermes Gold Togo Birkin", price: "₹46,62,641.16", img: bag2 },
//   { id: 3, name: "Hermes Birkin 30 Himalaya Niloticus Crocodile Diamond Tote Bag", price: "₹3,77,62,163.20", img: bag3 },
// ];

import React from 'react';

// NO IMPORTS NEEDED FOR PUBLIC FOLDER IMAGES

const bags = [
  { 
    id: 1, 
    name: "Louis Vuitton Speedy 40 Bandouliere Monogram Leather Brown Monogram", 
    price: "₹16,10,499", 
    // This path automatically looks in the 'public' folder
    img: "/images/bag1.jpg" 
  },
  { 
    id: 2, 
    name: "Hermes Gold Togo Birkin", 
    price: "₹46,62,641.16", 
    img: "/images/bag2.jpg" 
  },
  { 
    id: 3, 
    name: "Hermes Birkin 30 Himalaya Niloticus Crocodile Diamond Tote Bag", 
    price: "₹3,77,62,163.20", 
    img: "/images/bag3.jpg" 
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 font-serif selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-8 border-b border-white/5 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-lg z-50">
        <h1 className="text-2xl tracking-[0.3em] font-light uppercase text-[#d4af37]">Aura by Sindhu</h1>
        <div className="flex gap-8 text-[10px] tracking-[0.4em] uppercase text-stone-400">
          <span className="cursor-pointer hover:text-white transition-colors">Collections</span>
          <span className="cursor-pointer hover:text-white transition-colors">Cart (0)</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <p className="text-[#d4af37] text-[10px] tracking-[0.6em] uppercase mb-6">Est. 2025</p>
        <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-8 leading-none">Timeless <br/> Elegance</h2>
        <button className="px-12 py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 text-xs tracking-[0.3em] uppercase">
          Enter Boutique
        </button>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {bags.map(bag => (
          <div key={bag.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-900 mb-6">
              <img 
                src={bag.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" 
                alt={bag.name} 
                // Error handling in case the image file is missing
                onError={(e) => { e.target.src = 'https://placehold.co'; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
            </div>
            <h3 className="text-sm tracking-[0.2em] uppercase font-light text-stone-100">{bag.name}</h3>
            <p className="text-[#d4af37] text-xs mt-2 tracking-widest">{bag.price}</p>
          </div>
        ))}
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">
        <p className="text-[9px] tracking-[0.5em] uppercase font-light">Created Exclusively for Sindhu</p>
      </footer>
    </div>
  );
}

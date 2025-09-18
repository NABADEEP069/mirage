import React from 'react';
import { Sun, Moon, Code } from 'lucide-react';

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-4xl py-3 px-5  flex justify-between items-center
        bg-white/30 backdrop-blur-lg
        rounded-2xl border border-white/20 shadow-md
        z-50
      "
    >
     
      <div className="flex items-center gap-3">
       
        <span className="font-bold text-lg text-gray-900">Mirage</span>
      </div>

     
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 p-1 bg-gray-200/50 rounded-full">
          <button className="p-1.5 bg-white rounded-full shadow-sm">
            <Sun size={18} className="text-blue-500" />
          </button>
          <button className="p-1.5">
            <Moon size={18} className="text-gray-500" />
          </button>
        </div>

        
        
      </div>
    </nav>
  );
};

export default Navbar;
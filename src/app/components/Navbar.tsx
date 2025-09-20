import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  
  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-4xl py-3 px-5 flex justify-between items-center
        bg-white/30 backdrop-blur-lg
        dark:bg-gray-900/40 dark:border-gray-700
        rounded-2xl border border-white/20 shadow-md
        z-50
      "
    >
   
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg text-gray-900 dark:text-white">
          Mirage
        </span>
      </div>

   
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 p-1 bg-gray-200/50 dark:bg-gray-800/50 rounded-full">
          <button
            onClick={() => toggleTheme("light")}
            className={`p-1.5 rounded-full shadow-sm transition ${
              theme === "light" ? "bg-white" : ""
            }`}
            aria-label="Switch to light mode"
          >
            <Sun size={18} className="text-blue-500" />
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`p-1.5 rounded-full shadow-sm transition ${
              theme === "dark" ? "bg-gray-700" : ""
            }`}
            aria-label="Switch to dark mode"
          >
            <Moon size={18} className="text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

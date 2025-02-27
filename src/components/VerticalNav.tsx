import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, User, Code, Info } from "lucide-react";

const sections = [
  { id: "about", label: "About", icon: <User size={20} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
  { id: "projects", label: "Projects", icon: <Code size={20} /> },
  { id: "moreaboutme", label: "More About Me", icon: <Info size={20} /> },
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let foundSection = "about";
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top < window.innerHeight * 0.3) {
            foundSection = id;
          }
        }
      });
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6">
      {sections.map(({ id, label, icon }) => (
        <motion.button
          key={id}
          className={`relative flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300
            ${
              activeSection === id
                ? "bg-yellow-400 text-gray-900 shadow-[0_0_20px_rgba(255,215,0,1)] scale-110"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            }`}
          onClick={() => scrollToSection(id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{icon}</span>
          <span className="hidden sm:inline">{label}</span>
        </motion.button>
      ))}
    </div>
  );
}

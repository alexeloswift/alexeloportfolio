import { FaSwift, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, FaServer } from "react-icons/fa";
import { SiAmazonwebservices, SiTypescript, SiDotnet, SiCplusplus, SiNextdotjs, SiFirebase, SiVite, SiXcode, SiSwift, SiJson, SiMapbox, SiMysql, SiPostgresql, SiVmware, SiWordpress, SiAdobe, SiAdobeacrobatreader, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom, SiStripe, SiPostman, SiTailwindcss } from "react-icons/si";

const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Swift", icon: <FaSwift className="text-orange-500" /> },
      { name: "C#", icon: <SiDotnet className="text-purple-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },

    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Angular", icon: "🔺" },
      { name: "RegEx", icon: "📝" },

    ],
  },
  {
    category: "iOS Development",
    items: [
      { name: "SwiftUI", icon: <SiSwift className="text-indigo-400" /> },
      { name: "Combine", icon: "🔗" },
      { name: "Core Data", icon: "📂" },
      { name: "UIKit", icon: <SiSwift className="text-orange-400" /> },
      { name: "AVFoundation", icon: "🎬" },
      { name: "MapKit", icon: <SiMapbox className="text-green-400" /> },
      { name: "CoreLocation", icon: "📍" },
      { name: "Xcode", icon: <SiXcode className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "REST APIs", icon: <FaServer className="text-gray-400" /> },
      { name: "JSON", icon: <SiJson className="text-yellow-300" /> },
      { name: ".NET", icon: <SiDotnet className="text-purple-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "AWS", icon: <SiAmazonwebservices className="text-orange-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Stripe", icon: <SiStripe className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Swift Package Manager", icon: "📦" },
      { name: "GCD", icon: "⚡️" },
      { name: "Async/Await", icon: "⏳" },
      { name: "VMware Fusion", icon: <SiVmware className="text-gray-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },


    ],
  },
  {
    category: "Adobe Creative Cloud",
    items: [
      { name: "Adobe Creative Cloud", icon: <SiAdobe className="text-red-500" /> },
      { name: "Adobe Acrobat", icon: <SiAdobeacrobatreader className="text-red-600" /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
      { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-purple-500" /> },
      { name: "Adobe Lightroom", icon: <SiAdobelightroom className="text-blue-400" /> },
    ],
  },
];

export default function Experience() {
  return (
<section id="experience" className="max-w-7xl mx-auto py-20 text-center">
<h3 className="text-5xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,1)]">
        Tech Stack
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
        {techStack.map((group) => (
          <div key={group.category} className="bg-gray-800/30 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-white mb-4">{group.category}</h4>
            <ul className="space-y-2">
              {group.items.map((tech) => (
                <li key={tech.name} className="flex items-center space-x-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

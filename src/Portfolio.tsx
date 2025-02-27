import Experience from "./components/Experience";
import About from "./components/About";
import VerticalNav from "./components/VerticalNav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import MoreAboutMe from "./components/MoreAboutMe";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-indigo-950 to-violet-900 text-white min-h-screen flex">
      {/* Sidebar Navigation (Fixed Width) */}
      <div className="w-24 text-center bg-gray-900 border-r border-gray-800">
        <VerticalNav />
      </div>

      {/* Main Content (Perfectly Centered) */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-7xl w-full px-8">
          <section className="pt-20">
          <Intro />

          </section>
          <section id="about">
            <About />
          </section>
          

          <section id="experience">
            <Experience />
          </section>

          <section id="projects" className=" relative py-5 z-10">
            <Projects />
          </section>

          <section id="moreaboutme" className="py-5 px-6 lg:px-0 relative z-10">
            <MoreAboutMe />
          </section>

          <footer className="text-center py-10 border-t border-gray-700 mt-20 text-xl font-medium relative z-10 animate-fadeIn">
            <p>&copy; {new Date().getFullYear()} Alex. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

import Experience from "./components/Experience";
import About from "./components/About";
import VerticalNav from "./components/VerticalNav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import MoreAboutMe from "./components/MoreAboutMe";

export default function Portfolio() {
  return (
    <div className="flex-1 flex justify-center">
      {/* Vertical Nav for Desktop */}
      <div className="hidden lg:block w-24 text-center bg-gray-900 border-r border-gray-800">
        <VerticalNav />
      </div>
      <div className="w-full bg-gradient-to-b from-indigo-950 to-violet-900 text-white min-h-screen flex justify-center">
        {/* Main Content */}
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
          <section id="projects">
            <Projects />
          </section>
          <section id="moreaboutme">
            <MoreAboutMe />
          </section>
          <footer className="text-center py-20 border-t border-gray-700 mt-20 text-xl font-medium animate-fadeIn">
            <p>&copy; {new Date().getFullYear()} Alex. All rights reserved.</p>
          </footer>
        </div>
        {/* Mobile Navbar */}
        <div className="lg:hidden w-full text-center bg-gray-900 border-t border-gray-800 fixed bottom-0 z-50">
          <VerticalNav />
        </div>
      </div>
    </div>
  );
}

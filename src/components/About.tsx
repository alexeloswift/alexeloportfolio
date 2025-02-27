
export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* About Content */}
        <div className="flex-1 text-gray-300">
          <h3 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h3>

          {/* Q&A Section */}
          <div className="space-y-6">
            <div>
              <h4 className="py-2 text-2xl font-semibold text-yellow-400">What drives me?</h4>
              <p className="text-xl text-gray-300">
              My family and my passion for technology are what fuel me every day. I have a beautiful wife, three beautiful children, and a fourth on the way, and they are my biggest motivation. 
              Everything I do—every project I take on, every late night I spend learning something new—is for them. 
              I want to provide, inspire, and show them that with determination and perseverance, anything is possible.
              </p>
            </div>

            <div>
              <h4 className="py-2 text-2xl font-semibold text-yellow-400">What is a software engineer to me?</h4>
              <p className="text-xl text-gray-300">
              To me, a software engineer is someone with a can-do attitude when it comes to building software. 
              It’s not just about what you already know—it’s about your ability to engineer a solution, no matter your experience. 
              Being an engineer means tackling challenges head-on, learning as you go, and finding creative ways to bring ideas to life.
              </p>
            </div>

            <div>
              <h4 className="py-2 text-2xl font-semibold text-yellow-400">How did I get here?</h4>
              <p className="text-xl text-gray-300">
              When I graduated early college in 2016, I had no clear path—except for one thing: I knew I wanted to marry my girlfriend. 
              So, I got to work. In North Carolina, upholstery is a big industry, so I jumped in, learned the trade, and became skilled at it. 
              By December 22, 2018, I had achieved one of my biggest life goals—I married my high school sweetheart  ❤️ 
              
              </p>
              <p className="text-xl text-gray-300 mt-4">
              However, after a few years of doing upholstery, I realized that while I had a steady job, I wasn’t truly passionate about it. 
              I knew I was capable of more, something that challenged and excited me.
              So, after having a long conversation with my wife, we decided I needed to make a change.
              
              </p>
              <p className="text-xl text-gray-300 mt-4">
              That’s when I started searching for new career paths and came across some YouTube videos about SwiftUI. 
              Something about software development just clicked. I gave myself one year to learn and land a job in the field—if I couldn’t make it happen, I’d move on. 
              That year was full of late nights, problem-solving, and nonstop learning. 
              Just when my self-imposed deadline was approaching, I landed an internship that soon turned into my first job as an iOS Engineer. 
              </p>
              <p className="text-xl text-gray-300 mt-4">
              With that momentum, I doubled down and decided to pursue my Bachelor's in Software Engineering. 
              After a year of balancing both work and school, I made the difficult choice to step away from work and focus entirely on finishing my degree. 
              Now, I’m a full-time student with just six classes left before I graduate and nearing the finish line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


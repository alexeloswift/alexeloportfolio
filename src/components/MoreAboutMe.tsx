export default function MoreAboutMe() {
    const workingOn = [
        { icon: "🚀", text: "Building a sleek portfolio with React & TypeScript" },
        { icon: "🤝", text: "Actively exploring new opportunities for my next role." },
        { icon: "🥇", text: "Currently preparing for the CompTIA Project+ certification to further enhance my project management skills and industry knowledge" },
        { icon: "💻", text: "Advanced Data Management - D326, where I utilize SQL to complete a performance assessment focused on complex data management and optimization." },
    ];

    const beyondCoding = [
        { icon: "🏠", text: "Time with my family is everything to me. If I'm not working at my computer, I'm spending time with my wife and kids... or my parents... or my sisters... or my brothers-in-law... or all of them." },
        { icon: "🙏", text: "I love helping others! Whether it's with a website, network setup, home repairs, tech advice, or teaching them about the Catholic faith." },
        { icon: "🤝", text: "I also really enjoy music; I play the guitar and bass guitar. For many years, I played in my church choir. Occasionally, I still get to play for our Lord, most recently at Catholic Family Day for the Diocese of Charlotte." },
        { icon: "💪", text: "Lastly, if I have the extra time, I love working with my hands. My current home project is to finish building a fence around our house. We're about 1/4 of the way there." },
    ];

    const certifications = [
        { icon: "🏆", text: "AWS Certified Cloud Practitioner" },
        { icon: "📚", text: "Currently Working on CompTIA Project+" },
    ];

    const communityInvolvement = [
        { icon: "👩‍❤️‍👨", title: "St. Joseph Marriage Preparation Instructor", description: "Helped lead classes for engaged couples, providing practical guidance on building strong, faith-based Catholic marriages." },
        { icon: "🧑‍💻", title: "St. Joseph Technical Support Volunteer", description: "Assisted with the setup and maintenance of technical equipment and software, including routers, long-range outdoor CPE (Customer Premises Equipment), digital signage software, and the church website." },
        { icon: "🎼", title: "St. Joseph Musician", description: "Played bass guitar, acoustic guitar, and provided vocals for weekly Mass, retreats, and various church events." },
        { icon: "💒", title: "Worldwide Marriage Encounter Volunteer", description: "Supported weekend retreats designed to strengthen marital relationships through effective communication and faith-centered activities." },
    ];

    return (
        <section id="moreaboutme" className="pt-20 text-white">
            <h3 className="max-w-7xl mx-auto px-6 text-center text-5xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,1)]">
                More About Me
            </h3>


            {/* Background for the grid on desktop only */}
            <div className="md:bg-gray-800/50 md:p-8 md:rounded-xl md:shadow-lg md:ring-1 md:ring-gray-700">
            <p className="bg-gray-800/50 p-4 rounded-xl text-lg leading-relaxed text-gray-300">
                    Hey! I'm glad you're here. I wanted to take a section of this site to explain a bit more about me, what I'm working on, and what I enjoy doing outside of coding.
                    Hopefully, this gives you a better sense of who I am.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "What I’m Working On", items: workingOn },
                        { title: "Beyond Coding", items: beyondCoding },
                        { title: "Certifications", items: certifications },
                    ].map((section, index) => (
                        <div key={index} className="bg-gray-900/50 p-5 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-yellow-400 mb-2">{section.title}</h4>
                            <ul className="list-none space-y-2 text-left">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2 text-xl">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="bg-gray-900/50 p-5 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Community Involvement</h4>
                        <ul className="list-none space-y-2 text-left">
                            {communityInvolvement.map((item, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <span className="font-semibold">{item.title}</span> – {item.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A portfolio project showcasing the technologies I've worked with.",
            techStack: "React, Tailwind, TypeScript",
            staticImage: "/port.png",
            video: "/port.mp4",
            link: "#"
        },
        {
            id: 2,
            title: "Poppin: The Party Platform iOS App",
            description: "An event management platform for hosting parties and events.",
            techStack: "iOS, Swift, SwiftUI, Firebase",
            staticImage: "/poppin.png",
            video: "/poppin.mp4",
            link: "https://apps.apple.com/us/app/poppin-the-party-platform/id1573674111"
        },
        {
            id: 3,
            title: "St. Joseph Catholic Church Web App",
            description: "A web app for St. Joseph Catholic Church in Newton, NC to share events and announcements.",
            techStack: "Wordpress",
            staticImage: "/stjoe.png",
            video: "/stjoe.mp4",
            link: "#"
        },
        {
            id: 4,
            title: "Island of Taniti Website",
            description: "A fictional travel website for a tropical island vacation.",
            techStack: "React Router, Tailwind, TypeScript",
            staticImage: "/taniti.png",
            video: "/taniti.mp4",
            link: "https://github.com/alexeloswift/taniti"
        },
        {
            id: 5,
            title: "World Map Website",
            description: "A website showcasing a world map with interactive features.",
            techStack: "Angular, CSS, TypeScript",
            staticImage: "/worldmap.png",
            video: "/worldmap.mp4",
            link: "https://github.com/alexeloswift/worldmap"
        },
        {
            id: 6,
            title: "Auxilium iOS App",
            description: "A tool to help people pray and go to confession.",
            techStack: "iOS, Swift, SwiftUI",
            staticImage: "/aux.png",
            video: "/aux.mp4",
            link: "https://github.com/alexeloswift/Auxilium"
        }
    ];

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    return (
        <section id="projects" className="relative py-5 z-10">
            <h3 className="text-5xl font-bold mb-14 text-center text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,1)]">
                Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 350, damping: 40 }}
                        href={project.link}
                        target="_blank"
                        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-yellow-600 transition-transform hover:ring-4 hover:ring-yellow-400 hover:ring-opacity-90 hover:shadow-[0_0_80px_rgba(255,215,0,0.8)]"
                        onMouseEnter={() => {
                            const video = videoRefs.current[index];
                            const image = imageRefs.current[index];
                            if (video) {
                                video.style.opacity = "1"; 
                                video.play();
                            }
                            if (image && video) {
                                image.style.opacity = "0"; 
                            }
                        }}
                        onMouseLeave={() => {
                            const video = videoRefs.current[index];
                            if (video) {
                                video.style.opacity = "0"; 
                                video.pause();
                                video.currentTime = 0; 
                            }
                            if (imageRefs.current[index]) {
                                imageRefs.current[index].style.opacity = "1"; 
                            }
                        }}
                    >
                        {/* Image Wrapper */}
                        <motion.div className="w-full h-60 bg-transparent rounded-lg flex items-center justify-center overflow-hidden shadow-md relative">
                            {/* Static Image (Default) */}
                            <img
                                ref={(el) => {
                                    imageRefs.current[index] = el;
                                }}
                                src={project.staticImage}
                                alt={project.title}
                                className="w-full h-full object-contain absolute transition-opacity duration-300"
                                loading="lazy"
                            />

                            {/* MP4 Video (Plays on Card Hover) */}
                            {project.video && (
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    src={project.video || undefined}
                                    className="w-full h-full object-contain absolute transition-opacity duration-300 opacity-0"
                                    muted
                                    loop
                                    playsInline
                                />
                            )}
                        </motion.div>

                        {/* Project Details */}
                        <h4 className="text-3xl font-semibold mt-6 text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.9)]">
                            {project.title}
                        </h4>
                        <p className="text-gray-300 mt-3 text-lg opacity-90">
                            {project.description}
                        </p>
                        <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

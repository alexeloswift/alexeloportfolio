import { useState } from "react";
import { motion } from "framer-motion";

export default function Intro() {
    const [isEnlarged, setIsEnlarged] = useState(false);

    return (
        <>
            {/* Black Overlay (Appears when enlarged) */}
            {isEnlarged && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-40"
                    onClick={() => setIsEnlarged(false)}
                ></div>
            )}

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 lg:gap-14 relative">
                {/* Profile Image */}
                <motion.div
                    className={`relative w-48 h-48 sm:w-36 sm:h-36 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg cursor-pointer ${isEnlarged ? " inset-y-56 flex items-center justify-center z-50" : "z-10"
                        }`}
                    onClick={() => setIsEnlarged(!isEnlarged)}
                    initial={{ scale: 1 }}
                    animate={{ scale: isEnlarged ? 2 : 1 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                >
                    <img
                        src="/me3.jpg"
                        alt="Alex"
                        className={`absolute w-auto h-auto min-w-full min-h-full object-cover transform scale-110 object-right ${isEnlarged ? "rounded-lg" : ""}`}
                    />
                </motion.div>

                {/* Text Intro */}
                <div className="text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold text-white flex flex-col items-center lg:items-start gap-3"
                    >
                        <div className="whitespace-nowrap overflow-hidden drop-shadow-[0_0_10px_rgba(255,215,0,1)] animate-pulse text-center lg:text-left">
                            <span className="inline-block">Hi, I'm&nbsp;</span>
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                                Alex!
                            </span>
                        </div>
                    </motion.h1>
                    <p className="mt-3 text-lg sm:text-xl text-gray-300 max-w-lg">
                        I'm the guy holding the baby, and this is my beautiful family ❤️
                    </p>
                    <p className="mt-3 text-lg sm:text-xl text-gray-300 max-w-lg">
                        I'm a husband, a father of 4, and a passionate software engineer.
                    </p>
                </div>
            </div>
        </>
    );
}

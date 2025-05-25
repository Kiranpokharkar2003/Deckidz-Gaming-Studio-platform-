import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white p-6 overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-[-1]"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
      >
        <source src="/src/assets/hero-section.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold font-serif bg-gradient-to-r from-[#FFD700] to-[#FF5733] bg-clip-text text-transparent drop-shadow-lg"
      >
        Unlock Your Potential with Deckidz
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl mt-4 max-w-2xl text-gray-200 drop-shadow-lg"
      >
        Experience immersive learning with innovative tools & engaging content.
      </motion.p>

      {/* Typing Effect CTA */}
      <motion.div
        className="mt-6 text-2xl font-semibold text-[#FFD700] cursor-pointer px-6 py-3 border border-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-black transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/features")}
      >
        <Typewriter
          options={{
            strings: ["Start Learning Now!", "Begin Your Journey 🚀", "Explore Features 📚"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <span className="text-sm text-gray-300">Scroll Down</span>
        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center animate-bounce mt-2 text-lg">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;

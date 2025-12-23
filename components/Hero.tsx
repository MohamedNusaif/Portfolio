"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="z-10 px-6 max-w-4xl text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Nusaif
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full-Stack Developer crafting scalable systems and elegant interfaces.
          <br />
          Specialized in{" "}
          <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-white font-medium">React Native</span>{" "},
          <span className="text-white font-medium">Node.js</span>, and{" "}
          <span className="text-white font-medium">Spring Boot</span>, with a
          growing focus on{" "}
          <span className="text-blue-400 font-medium">DevOps</span> and{" "}
          <span className="text-blue-400 font-medium">AI integration</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            View Projects
          </a>

          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold transition-all"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
    </section>
  );
}

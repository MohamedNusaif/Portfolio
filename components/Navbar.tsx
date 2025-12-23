"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl shadow-blue-500/5"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-[101]"
          style={{
            scaleX: scrolled ? 1 : 0,
            transformOrigin: "left",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative group text-2xl font-black tracking-tighter"
          >
            <span className="text-white group-hover:text-blue-500 transition-colors">
              N
            </span>
            <span className="text-blue-500">usaif</span>
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-8 text-sm font-semibold tracking-wide text-gray-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-all relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-white transition-all relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            {/* Download CV */}
            <motion.a
              href="/Nusaif_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/40 text-blue-400 text-sm font-bold hover:bg-blue-500/10 transition-all"
            >
              <Download size={16} />
              Download CV
            </motion.a>

            {/* Hire Me */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold transition-all border border-blue-400/20"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-8 space-y-6 flex flex-col items-center"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-gray-400 hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-bold text-gray-400"
              >
                Contact
              </button>

              <a
                href="/Nusaif_CV.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-2xl border border-blue-500/40 text-center font-bold text-blue-400"
              >
                Download CV
              </a>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 rounded-2xl bg-blue-600 font-bold text-white"
              >
                Hire Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

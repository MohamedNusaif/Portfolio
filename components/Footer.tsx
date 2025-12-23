"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Phone, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-5"
          >
            <h2 className="text-3xl font-extrabold tracking-tight">
              Nusaif<span className="text-sky-500">.</span>dev
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Full-stack developer crafting scalable web and mobile experiences with
              modern technologies and clean architecture.
            </p>
          </motion.div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
              Contact
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  text: "mrmnusaif@gmail.com",
                  href: "mailto:mrmnusaif@gmail.com",
                },
                {
                  icon: Phone,
                  text: "+94 76 868 1685",
                  href: "tel:+94768681685",
                },
                {
                  icon: MessageCircle,
                  text: "WhatsApp",
                  href: "https://wa.me",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4 text-gray-400 hover:text-white transition"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 
                                  group-hover:border-sky-500/50 group-hover:text-sky-400 transition-all">
                    <item.icon size={16} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
              Social
            </h3>

            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl
                             bg-white/[0.04] border border-white/10
                             hover:border-sky-500/50 hover:bg-white/[0.08]
                             transition-all text-sm font-semibold"
                >
                  <social.icon size={16} />
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
              © {currentYear} Nusaif
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
              Sri Lanka
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-widest
                       text-gray-500 hover:text-sky-500 transition"
          >
            <div className="p-3 rounded-full bg-white/5 border border-white/10
                            group-hover:border-sky-500/50 transition-all">
              <ArrowUp size={16} />
            </div>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

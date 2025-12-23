"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            About <span className="text-sky-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Me</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-sky-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-md flex flex-col justify-center group hover:border-sky-500/20 transition-all duration-500"
          >
            <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light">
              I am a{" "}
              <span className="text-white font-bold underline decoration-sky-500 decoration-4 underline-offset-4">
                Full-Stack Developer
              </span>{" "}
              from Sri Lanka, currently specializing as a{" "}
              <span className="text-white font-bold">Intern Developer</span>. 
              I engineer end-to-end applications by merging scalable backends with high-performance frontends.
            </p>

            <p className="text-gray-500 text-base md:text-lg mt-6 leading-relaxed">
              Actively mastering <span className="text-sky-400">DevOps practices</span> and <span className="text-sky-400">AI-driven automation</span>. 
              My focus lies in optimizing CI/CD pipelines and building intelligent systems that scale effortlessly.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-sky-500/10 to-transparent border border-white/[0.05] backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-sky-500 mb-6">Education</h3>
              <p className="text-xl font-bold text-white">BSc in Computer Science</p>
              <p className="text-sm text-gray-400 mt-2 italic font-medium">Expected Graduation — 2026</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-gray-400 text-sm leading-relaxed">
                Core focus on Software Engineering, Backend Architecture, Ai/ML and Automation Workflows.
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] flex items-center gap-5 group hover:bg-white/[0.04] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Location</p>
              <p className="text-lg font-bold text-white">Sri Lanka</p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] flex items-center gap-5 group hover:bg-white/[0.04] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Experience</p>
              <p className="text-lg font-bold text-white">1+ Year</p>
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] flex items-center gap-5 group hover:bg-white/[0.04] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Rocket size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Built</p>
              <p className="text-lg font-bold text-white">5+ Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

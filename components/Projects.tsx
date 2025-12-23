"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, DollarSign, Smartphone } from 'lucide-react'; // Example icons

const projects = [
  {
    title: "Loan Management System",
    description: "MERN stack system with role-based access control, analytics dashboard, and secure transactions.",
    icon: DollarSign,
    link: "/projects/loan_management",
  },
  {
    title: "Finance Mobile App",
    description: "React Native app using Expo and Node.js backend for seamless budget tracking and expense management.",
    icon: Smartphone,
    link: "/projects/finance_mobile_app",
  },
  {
    title: "Portfolio Website",
    description: "Next.js portfolio with Tailwind CSS, Framer Motion animations, and a modern bento layout.",
    icon: Code,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-14 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black mb-12 uppercase"
        >
          Featured <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(59, 130, 246, 0.5)' }} // Blue border on hover
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer transition-all duration-300 shadow-xl shadow-gray-900/50"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mr-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link} className="text-blue-400 font-medium flex items-center group-hover:text-blue-300">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

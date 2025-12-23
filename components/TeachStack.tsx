"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiSpringboot, SiMysql, SiMongodb,
  SiDocker, SiAmazonwebservices, SiPython, SiPandas,
  SiFigma, SiPostman, SiExpo, SiN8N, SiNginx,
  SiJavascript, SiCss3
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const stacks = [
  {
    title: "Frontend Core",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "CSS3", Icon: SiCss3 },
    ],
  },
  {
    title: "Backend / Systems",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Java", Icon: FaJava },
      { name: "Spring Boot", Icon: SiSpringboot },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "n8n", Icon: SiN8N },
      { name: "Python", Icon: SiPython },
      { name: "Pandas", Icon: SiPandas },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "NGINX", Icon: SiNginx },
    ],
  },
  {
    title: "Mobile Dev",
    items: [
      { name: "React Native", Icon: TbBrandReactNative },
      { name: "Expo", Icon: SiExpo },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "Postman", Icon: SiPostman },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-12 bg-[#0a0a0a] text-white overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase"
          >
            <span className="text-white">Tech</span>{" "}
            <span className="text-sky-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Stack</span>
          </motion.h2>
          <p className="text-gray-500 mt-6 max-w-lg font-medium text-base md:text-lg leading-relaxed">
            Building software using the best tools available          </p>
        </div>

        {/* Big Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stacks.map((stack, idx) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 md:p-11 rounded-[3rem] bg-white/[0.01] border border-white/10 hover:border-sky-500/40 transition-all duration-700 overflow-hidden"
            >
              {/* Massive Corner Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/[0.03] blur-[100px] group-hover:bg-sky-500/[0.08] transition-colors duration-1000" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9]" />
                   <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
                    {stack.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  {stack.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-sky-500/10 hover:border-sky-500/50 transition-all duration-300 group/item"
                    >
                      <tech.Icon className="text-2xl md:text-3xl text-gray-400 group-hover/item:text-white transition-all duration-300" />
                      <span className="text-xs font-bold text-gray-500 group-hover/item:text-white uppercase tracking-widest">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Scan Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-500 to-transparent group-hover:w-full transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  BarChart3,
  Wallet,
  Database,
  Globe,
} from "lucide-react";

export default function FinanceMobileAppProject() {
  const features = [
    {
      icon: Wallet,
      title: "Expense & Budget Tracking",
      desc: "Intuitive expense logging and budget categorization to help users monitor spending habits effectively.",
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      desc: "Interactive charts and summaries that provide real-time visibility into income, expenses, and savings.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      desc: "Token-based authentication ensuring secure access to personal financial data.",
    },
    {
      icon: Database,
      title: "Scalable Backend API",
      desc: "Node.js REST API designed for performance, scalability, and clean separation of concerns.",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest">
              Mobile App Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Finance Mobile App
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A cross-platform finance management application built with React
            Native and Expo, backed by a Node.js API. The app enables users to
            track expenses, manage budgets, and gain actionable insights into
            their financial behavior through a clean and responsive mobile
            experience.
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Case study focused on usability, performance, and mobile-first
            financial workflows.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Smartphone className="text-green-500" /> Technology Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React Native",
                "Expo",
                "Node.js",
                "Express.js",
                "REST API",
                "JWT Authentication",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Impact / CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 p-8 rounded-3xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-3">
                Architecture & Impact
              </h3>
              <p className="text-gray-300 italic text-sm">
                “Designed a mobile-first architecture with a lightweight Node.js
                backend, enabling fast API responses, smooth user interactions,
                and scalable financial data handling.”
              </p>
            </div>

            <a
              href="https://github.com/MohamedNusaif/client_user_loan_managment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-green-500 hover:text-white transition-all whitespace-nowrap"
            >
              <Globe size={18} />
              View Source Code on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

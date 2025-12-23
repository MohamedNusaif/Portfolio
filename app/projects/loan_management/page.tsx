"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  Zap,
  Database,
  Github, // Changed Globe to Github icon to match link
} from "lucide-react";

export default function LoanManagementProject() {
  const features = [
    {
      icon: Users,
      title: "Role-Based Access Control",
      desc: "Granular access control for Admin, Manager, and Client roles, enforced at both UI and database levels.",
    },
    {
      icon: Zap,
      title: "Loan Approval Workflow",
      desc: "Structured, multi-step approval pipeline that minimizes manual intervention and processing delays.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      desc: "Firebase Authentication integrated with Firestore security rules to safeguard sensitive financial data.",
    },
    {
      icon: LayoutDashboard,
      title: "Analytics Dashboard",
      desc: "Real-time visibility into loan performance, approvals, and operational activity.",
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
          viewport={{ once: true, amount: 0.5 }} // Added amount for better viewport check
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
              Next.js Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Loan Management System
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-4xl leading-relaxed">
            A production-ready loan management platform built with Next.js and
            Firebase, engineered to replace manual lending workflows with a
            secure, role-driven system.
          </p>

          <p className="text-gray-500 text-sm mt-4 italic">
            This case study highlights architectural choices focused on scalability, security, and real-world financial operations.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Database className="text-blue-500" /> Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js (App Router)",
                "React",
                "Firebase Authentication",
                "Firestore Database",
                "Tailwind CSS",
                "Vercel Deployment",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3 p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-3">
                Architecture & Impact
              </h3>
              <p className="text-gray-100 italic text-sm">
                “Implemented a serverless architecture using Vercel and
                Firestore real-time listeners to enable instant data
                synchronization, reduce backend complexity, and improve overall
                system responsiveness.”
              </p>
            </div>

            <a
              href="https://github.com/MohamedNusaif/Loan-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-all whitespace-nowrap shadow-md"
            >
              <Github size={18} />
              View Source Code
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

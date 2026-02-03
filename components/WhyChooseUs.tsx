"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, LineChart, Code2 } from "lucide-react";
import Link from "next/link";

const offerings = [
    {
        title: "AI & ML Development",
        desc: "Custom training, fine-tuning, and deployment of Large Language Models and Computer Vision systems.",
        icon: BrainCircuit,
    },
    {
        title: "SaaS Product Engineering",
        desc: "End-to-end development of scalable, cloud-native storage and analytics platforms.",
        icon: Code2,
    },
    {
        title: "Data Intelligence",
        desc: "Turning raw data into actionable insights using predictive analytics and business intelligence.",
        icon: LineChart,
    },
    {
        title: "Process Automation",
        desc: "Streamlining workflows with intelligent agents and robotic process automation (RPA).",
        icon: Bot,
    },
];

import { BrainCircuit } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[var(--primary)] font-semibold tracking-wider text-sm uppercase"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-2"
                    >
                        Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] neon-text">Intelligence Age</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {offerings.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={32} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors pt-2">
                                        Explore Solutions <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

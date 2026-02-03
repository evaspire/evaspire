"use client";

import { motion } from "framer-motion";
import { Factory, Landmark, Stethoscope, ShoppingBag, Plane, Shield } from "lucide-react";

const industries = [
    { name: "Manufacturing", icon: Factory, desc: "Visual inspection, predictive maintenance, and worker safety." },
    { name: "BFSI & Fintech", icon: Landmark, desc: "Fraud detection, KYC automation, and document processing." },
    { name: "Healthcare", icon: Stethoscope, desc: "Medical imaging analysis and patient monitoring." },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Customer analytics, footfall tracking, and inventory management." },
    { name: "Aviation & Drones", icon: Plane, desc: "Terrain mapping, surveillance, and automated inspections." },
    { name: "Defense & Security", icon: Shield, desc: "Perimeter security, threat detection, and facial recognition." },
];

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Industries() {
    const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);

    return (
        <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries <span className="text-[var(--primary)] neon-text">We Serve</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Transforming sectors with tailored AI solutions. Click to explore.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((ind, idx) => (
                    <motion.div
                        key={idx}
                        layoutId={`card-${ind.name}`}
                        onClick={() => setSelectedIndustry(ind)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 transition-all cursor-pointer hover:border-[var(--primary)]/30"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ind.icon size={100} />
                        </div>
                        <ind.icon size={48} className="text-[var(--primary)] mb-6" />
                        <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
                        <p className="text-gray-400 leading-relaxed">{ind.desc}</p>
                        <div className="mt-4 text-sm text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            Read more →
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIndustry && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedIndustry(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedIndustry.name}`}
                            className="relative w-full max-w-2xl glass-card p-8 rounded-2xl border border-[var(--primary)]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedIndustry(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                    <selectedIndustry.icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold">{selectedIndustry.name}</h2>
                            </div>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                AI is revolutionizing the <strong>{selectedIndustry.name}</strong> sector. Our solutions go beyond simple automation, providing deep insights and predictive capabilities that drive value.
                                {selectedIndustry.desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <h4 className="font-bold text-white mb-2">Key Applications</h4>
                                    <ul className="space-y-2">
                                        {["Process Automation", "Quality Control", "Data Analytics"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                    <h4 className="font-bold text-white mb-2">Our Impact</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm text-gray-400"><Check size={14} className="text-green-400" /> 40% Efficiency Boost</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-400"><Check size={14} className="text-green-400" /> 24/7 Monitoring</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-400"><Check size={14} className="text-green-400" /> Reduced Error Rates</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href={`https://wa.me/919876543210?text=I'd%20like%20to%20discuss%20AI%20solutions%20for%20${encodeURIComponent(selectedIndustry.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 rounded-lg bg-[var(--primary)] text-black font-bold hover:bg-[var(--primary)]/90 transition-all"
                                >
                                    Get a Strategy & Quote
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Computer Vision",
        items: ["AI Visual Inspection", "Object Detection", "Image Processing", "Image Segmentation", "Object Tracking", "OCR for Business", "Smart Parking", "Object Blur with AI"]
    },
    {
        title: "Generative AI",
        items: ["AI Chatbots", "LLM Development", "AI Agents", "ChatGPT Integration", "RAG Systems", "Prompt Engineering"]
    },
    {
        title: "NLP & Audio",
        items: ["Speech Recognition", "Audio Transcription", "Video Transcription", "Sentiment Analysis"]
    },
    {
        title: "Drones & Edge AI",
        items: ["Drone Inspection", "Search & Rescue", "Wind Turbine Inspection", "Terrain Mapping"]
    },
    {
        title: "Analytics",
        items: ["Time Series Analysis", "Predictive Maintenance", "Forecasting", "Business Intelligence", "Edge Analytics"]
    }
];

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function Solutions() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Industry <span className="text-[var(--secondary)] neon-text">Solutions</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    End-to-end AI implementation for your specific business needs. Click on any solution to learn more.
                </p>
            </div>

            <div className="space-y-16">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold border-l-4 border-[var(--primary)] pl-4">{cat.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {cat.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedItem(item)}
                                    className="p-4 bg-white/5 border border-white/5 rounded-lg hover:border-[var(--primary)]/30 hover:bg-white/10 transition-all cursor-pointer group"
                                >
                                    <h3 className="font-medium text-gray-200 group-hover:text-[var(--primary)] transition-colors">{item}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-lg glass-card p-8 rounded-2xl border border-[var(--primary)]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">{selectedItem}</h2>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our <strong>{selectedItem}</strong> solution is designed to optimize workflows and enhance decision-making.
                                By leveraging state-of-the-art algorithms, we help businesses automate complex tasks associated with {selectedItem.toLowerCase()}.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-semibold text-white border-b border-white/10 pb-2">Benefits</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm text-gray-400">
                                        <CheckCircle size={16} className="text-[var(--primary)] mt-1 shrink-0" />
                                        <span>Increased efficiency and reduced operational costs.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-400">
                                        <CheckCircle size={16} className="text-[var(--primary)] mt-1 shrink-0" />
                                        <span>Real-time data processing and actionable insights.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-400">
                                        <CheckCircle size={16} className="text-[var(--primary)] mt-1 shrink-0" />
                                        <span>Seamless integration with existing infrastructure.</span>
                                    </li>
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/919876543210?text=I'm%20interested%20in%20implementing%20${encodeURIComponent(selectedItem)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 rounded-lg bg-[var(--primary)] text-black font-bold hover:bg-[var(--primary)]/90 transition-all text-center"
                            >
                                Consult an Expert
                            </a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

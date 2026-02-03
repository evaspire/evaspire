"use client";

import { motion } from "framer-motion";
import { Instagram, Video, Type, Image as ImageIcon } from "lucide-react";

export default function AdGeneration() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="container mx-auto px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 text-sm font-bold mb-4">
                        NEW SAAS PRODUCT
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Create Viral Ads with <span className="text-[var(--accent)] neon-text">Generative AI</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Generate posters, Instagram stories, captions, and promo videos in seconds.
                        Automate your marketing content creation workflow.
                    </p>
                    <div className="pt-8 flex justify-center gap-4">
                        <button className="px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent)]/90 transition-all shadow-[0_0_20px_rgba(255,0,85,0.4)]">
                            Start Generating
                        </button>
                        <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all font-semibold">
                            View Examples
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Features */}
            <section className="bg-black/50 py-20 border-y border-white/5">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ImageIcon, title: "AI Poster Generator", desc: "Create stunned visuals for events and products." },
                        { icon: Instagram, title: "Instagram Ads", desc: "Story and Feed formats optimized for engagement." },
                        { icon: Type, title: "AI Captions", desc: "Catchy copy and hashtags generated instantly." },
                        { icon: Video, title: "Promo Videos", desc: "Short video clips generated from product images." }
                    ].map((feat, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--accent)]/50 transition-colors">
                            <feat.icon size={32} className="text-[var(--accent)] mb-4" />
                            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                            <p className="text-gray-400 text-sm">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

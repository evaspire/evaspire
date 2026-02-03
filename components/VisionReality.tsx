"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function VisionReality() {
    return (
        <section className="py-24 !bg-white dark:!bg-black overflow-hidden relative transition-colors duration-300">
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold !text-black dark:!text-white"
                    >
                        Turn your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white">Visions</span> into Reality
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Abstract Map Visualization */}
                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                        {/* Interactive "Map" dots pattern */}
                        <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
                            <svg className="w-full h-full !text-gray-300 dark:!text-gray-700" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <pattern id="dots" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                                    <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                                </pattern>
                                <rect width="100" height="100" fill="url(#dots)" />
                            </svg>
                        </div>

                        {/* Pulsing Location Markers (Monochrome) */}
                        {/* North America */}
                        <LocationDot top="30%" left="20%" label="Canada" delay={0} />
                        <LocationDot top="40%" left="20%" label="USA" delay={0.2} />
                        <LocationDot top="55%" left="22%" label="Mexico" delay={0.4} />

                        {/* Europe/Africa/Middle East */}
                        <LocationDot top="35%" left="48%" label="UK" delay={0.6} />
                        <LocationDot top="40%" left="52%" label="Bulgaria" delay={0.8} />
                        <LocationDot top="55%" left="55%" label="UAE" delay={1.0} />

                        {/* Asia */}
                        <LocationDot top="48%" left="65%" label="Pakistan" delay={1.2} />

                        {/* Australia */}
                        <LocationDot top="75%" left="85%" label="Australia" delay={1.4} />

                        {/* Decorative Line */}
                        <svg className="absolute inset-0 pointer-events-none opacity-30">
                            <motion.path
                                d="M 200 150 Q 400 50 600 250"
                                fill="transparent"
                                stroke="url(#gradient-line)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="currentColor" className="text-black dark:text-white" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="currentColor" className="text-black dark:text-white" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Right Side: Contact Form Card */}
                    <div className="w-full max-w-md mx-auto lg:ml-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="!bg-white dark:!bg-zinc-900 border border-black/10 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300"
                        >
                            {/* Shine effect (Monochrome) */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gray-200 dark:bg-white/10 blur-[60px] opacity-50 dark:opacity-20 rounded-full pointer-events-none"></div>

                            <form className="space-y-6 relative z-10">
                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-semibold !text-gray-800 dark:!text-gray-300 uppercase tracking-wider mb-2">Your Name*</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 !text-black dark:!text-white placeholder-gray-400 dark:placeholder-gray-500 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold !text-gray-800 dark:!text-gray-300 uppercase tracking-wider mb-2">Your Email*</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 !text-black dark:!text-white placeholder-gray-400 dark:placeholder-gray-500 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold !text-gray-800 dark:!text-gray-300 uppercase tracking-wider mb-2">Phone*</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 !text-black dark:!text-white placeholder-gray-400 dark:placeholder-gray-500 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                                            placeholder="+91 8525000360"
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-xs font-semibold !text-gray-800 dark:!text-gray-300 uppercase tracking-wider mb-2">Describe Your Project*</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 !text-black dark:!text-white placeholder-gray-400 dark:placeholder-gray-500 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                                        placeholder="I want to build an AI platform..."
                                    />
                                </div>

                                {/* Submit Button (High Contrast) */}
                                <button className="w-full !bg-black dark:!bg-white !text-white dark:!text-black font-bold py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg">
                                    Connect Today
                                    <Send size={16} />
                                </button>

                                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-4 leading-tight">
                                    By submitting this form, you are agreeing to EvaSpire's Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper Component for Map Dots (Monochrome)
function LocationDot({ top, left, label, delay }: { top: string, left: string, label: string, delay: number }) {
    return (
        <div style={{ top, left }} className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.5, type: "spring" }}
                className="relative"
            >
                {/* Black dot in Light Mode, White dot in Dark Mode */}
                <div className="w-3 h-3 !bg-black dark:!bg-white rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)] border border-white dark:border-black"></div>
                <div className="absolute inset-0 w-3 h-3 bg-black/50 dark:bg-white/50 rounded-full animate-ping"></div>
            </motion.div>

            <motion.span
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 }}
                className="mt-2 text-[10px] font-medium !text-black dark:!text-white bg-white/80 dark:bg-zinc-900/80 px-1.5 py-0.5 rounded backdrop-blur-sm border border-black/10 dark:border-white/10"
            >
                {label}
            </motion.span>
        </div>
    );
}

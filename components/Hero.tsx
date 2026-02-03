"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import vid from "../public/ai-g.gif"

const boxes = [
    { id: 1, label: "Person 98%", color: "#ffffff", x: [10, 80, 40], y: [20, 30, 70], w: 100, h: 200, delay: 0 },
    { id: 2, label: "Person 92%", color: "#cccccc", x: [70, 20, 60], y: [60, 40, 20], w: 90, h: 180, delay: 2 },
    { id: 3, label: "Bag 87%", color: "#999999", x: [40, 60, 30], y: [40, 80, 50], w: 50, h: 60, delay: 1 },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent z-0 opacity-50 dark:opacity-30"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent"></div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                        </span>
                        AI Development Company
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Automating Growth With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] neon-text">AI Excellence</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        AI-powered SaaS products and end-to-end AI solutions for startups, enterprises, and innovators. Unlock the future of automation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/solutions"
                            className="group px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                        >
                            View AI Solutions
                            <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded font-semibold transition-all flex items-center justify-center"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content - Object Detection Simulation */}
                <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden glass-card border border-[var(--primary)]/30">
                    {/* Simulation Background using CSS Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img
                            src="https://www.folio3.ai/wp-content/uploads/2024/05/614%E2%80%8A%C3%97%E2%80%8A374.gif"
                            alt="AI Vision"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>

                    {/* Simulated Moving Objects */}
                    {/* {boxes.map((box) => (
                        <motion.div
                            key={box.id}
                            initial={{ left: `${box.x[0]}%`, top: `${box.y[0]}%` }}
                            animate={{
                                left: box.x.map(val => `${val}%`),
                                top: box.y.map(val => `${val}%`)
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "linear",
                                delay: box.delay
                            }}
                            className="absolute border-2"
                            style={{
                                width: box.w,
                                height: box.h,
                                borderColor: box.color
                            }}
                        >
                            <div
                                className="absolute -top-6 left-[-2px] px-2 py-0.5 text-xs font-bold text-black"
                                style={{ backgroundColor: box.color }}
                            >
                                {box.label}
                            </div>
                        </motion.div>
                    ))} */}
                </div>
            </div>
        </section>
    );
}

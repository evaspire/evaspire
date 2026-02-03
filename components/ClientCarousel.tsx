"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder scrolling logos - normally these would be client logos
const logos = [
    "Google", "Amazon", "Microsoft", "Meta", "Netflix", "OpenAI", "NVIDIA"
];

export function ClientCarousel() {
    return (
        <section className="py-12 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Powering Innovation With</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 px-16">
                    {/* First set */}
                    {logos.map((logo, i) => (
                        <span key={i} className="text-2xl font-bold text-gray-600 dark:text-gray-500 opacity-50 hover:opacity-100 transition-opacity cursor-default uppercase">
                            {logo}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {logos.map((logo, i) => (
                        <span key={`dup-${i}`} className="text-2xl font-bold text-gray-600 dark:text-gray-500 opacity-50 hover:opacity-100 transition-opacity cursor-default uppercase">
                            {logo}
                        </span>
                    ))}
                    {/* Triplicate set for seamlessly loop on wide screens */}
                    {logos.map((logo, i) => (
                        <span key={`tri-${i}`} className="text-2xl font-bold text-gray-600 dark:text-gray-500 opacity-50 hover:opacity-100 transition-opacity cursor-default uppercase">
                            {logo}
                        </span>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10"></div>
            </div>
        </section>
    );
}

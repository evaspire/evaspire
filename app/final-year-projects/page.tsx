"use client";

import { CheckCircle2, BookOpen, Code2, GraduationCap } from "lucide-react";

export default function FinalYearProjects() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Industry-Ready <br />
                        <span className="text-[var(--secondary)] neon-text">Final Year Projects</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Get approved, high-quality AI projects with complete source code, documentation, and mentor support. Perfect for CS/IT students.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Real-time Deployment Support",
                            "Complete Project Report & PPT",
                            "Viva-Voce Guidance",
                            "100% Working GitHub Code",
                            "Explainable AI Models"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-[var(--secondary)]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="px-8 py-3 bg-[var(--secondary)] text-white font-bold rounded hover:bg-[var(--secondary)]/90 transition-all">
                        Browse Project List
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[var(--secondary)]/10 border border-[var(--secondary)]/20">
                        <Code2 size={40} className="text-[var(--secondary)] mb-4" />
                        <h3 className="font-bold text-xl mb-2">Source Code</h3>
                        <p className="text-sm text-gray-400">Clean, commented, and modular Python/JS codebases.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                        <BookOpen size={40} className="text-[var(--primary)] mb-4" />
                        <h3 className="font-bold text-xl mb-2">Documentation</h3>
                        <p className="text-sm text-gray-400">IEEE standard reports, flowcharts, and architecture diagrams.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 md:col-span-2">
                        <GraduationCap size={40} className="text-white mb-4" />
                        <h3 className="font-bold text-xl mb-2">Mentor Support</h3>
                        <p className="text-sm text-gray-400">One-on-one sessions to understand the algorithm and logic for your viva.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

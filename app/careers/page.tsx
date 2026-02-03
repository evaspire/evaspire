"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Database, Brain, Phone, Users, MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Careers Page Component (Always Dark Theme)

const jobs = [
    {
        id: "flutter-dev",
        title: "Flutter Developer",
        type: "Full-time",
        location: "Remote / Hybrid",
        department: "Mobile Development",
        icon: <Code size={24} />,
        description: "We are looking for a skilled Flutter Developer to build cross-platform mobile applications that provide seamless user experiences. You will work on integrating AI features into mobile interfaces.",
    },
    {
        id: "ml-engineer",
        title: "Machine Learning Engineer",
        type: "Full-time",
        location: "Remote",
        department: "AI Research",
        icon: <Brain size={24} />,
        description: "Join our core AI team to design and deploy state-of-the-art machine learning models. Experience with NLP, LLMs, and Python is essential.",
    },
    {
        id: "python-fullstack",
        title: "Python Fullstack Developer",
        type: "Full-time",
        location: "Hybrid",
        department: "Engineering",
        icon: <Database size={24} />,
        description: "Build robust backend systems and intuitive frontends. You will work with FastAPI/Django and React/Next.js to power our AI SaaS platforms.",
    },
    {
        id: "sales-exec",
        title: "Sales Executive",
        type: "Full-time",
        location: "Remote",
        department: "Sales & Growth",
        icon: <Users size={24} />,
        description: "Drive growth by connecting with potential clients and showcasing the value of our AI solutions. Excellent communication skills required.",
    },
    {
        id: "client-support",
        title: "Client Support Specialist",
        type: "Full-time",
        location: "Remote",
        department: "Customer Success",
        icon: <Phone size={24} />,
        description: "Assist our clients in navigating our products. You will be the first point of contact for resolving queries and ensuring customer satisfaction.",
    },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 bg-black text-white selection:bg-[var(--primary)] selection:text-black transition-colors duration-300">
            {/* Header */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] neon-text">Revolution</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Build the future of AI with us. We are looking for passionate individuals to join our team and make a global impact.
                    </p>
                </motion.div>
            </section>

            {/* Job Listings */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300"
                        >
                            <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/20 transition-colors">
                                <div className="text-gray-400 group-hover:text-[var(--primary)] transition-colors">
                                    {job.icon}
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-semibold text-[var(--primary)] px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                                    {job.department}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[var(--primary)] transition-colors">
                                {job.title}
                            </h3>

                            <div className="flex gap-4 text-sm text-gray-400 mb-4 font-medium">
                                <span className="flex items-center gap-1">• {job.type}</span>
                                <span className="flex items-center gap-1">• {job.location}</span>
                            </div>

                            <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                {job.description}
                            </p>

                            <a
                                href={`mailto:hr@evaspire.in?subject=Application for ${job.title}`}
                                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors"
                            >
                                Send CV <MoveRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Database, Layers, Code2, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 pt-24 pb-24">

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Our Technology Stack
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Powering the Next Generation of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Intelligent Systems</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We don't just use AI; we engineer comprehensive ecosystems using the most advanced models, frameworks, and infrastructure available in the world today.
                    </p>
                </motion.div>
            </section>

            {/* Detailed Sections */}
            <div className="container mx-auto px-4 space-y-32">

                {/* Generative AI Section */}
                <TechSection
                    title="Generative AI & LLMs"
                    description="The core cognitive engines driving natural language understanding and creative generation."
                    icon={<BrainCircuit size={40} className="text-blue-600 dark:text-blue-400" />}
                    technologies={[
                        { name: "GPT-4 & Turbo", desc: "Unmatched reasoning and context handling for complex enterprise tasks." },
                        { name: "Claude 3 Opus", desc: "Superior nuance, coding capabilities, and massive context windows." },
                        { name: "Llama 3", desc: "State-of-the-art open source models optimized for on-premise deployment." },
                        { name: "Midjourney & DALL-E 3", desc: "High-fidelity image generation for dynamic visual content." }
                    ]}
                    align="left"
                    image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                />

                {/* Deep Learning Frameworks */}
                <TechSection
                    title="Deep Learning Frameworks"
                    description="The robust architectural foundations upon which our custom neural networks are built and trained."
                    icon={<Layers size={40} className="text-purple-600 dark:text-purple-400" />}
                    technologies={[
                        { name: "PyTorch 2.0", desc: "Dynamic computation graphs allowing for rapid research and prototyping." },
                        { name: "TensorFlow Enterprise", desc: "Production-grade scalability for deploying models to millions of users." },
                        { name: "JAX", desc: "High-performance accelerator-oriented programming for advanced research." },
                        { name: "Hugging Face Transformers", desc: "Industry-standard library for state-of-the-art NLP implementations." }
                    ]}
                    align="right"
                    image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
                />

                {/* Infrastructure & Compute */}
                <TechSection
                    title="Infrastructure & Compute"
                    description="Massive parallel processing capabilities to train and run the most demanding AI workloads."
                    icon={<Cpu size={40} className="text-cyan-600 dark:text-cyan-400" />}
                    technologies={[
                        { name: "NVIDIA H100 GPUs", desc: "The world's most powerful tensor core GPUs for massive acceleration." },
                        { name: "Google Cloud TPU v5", desc: "Purpose-built custom ASICs for machine learning efficiency." },
                        { name: "Azure AI Infrastructure", desc: "Enterprise-grade reliability, security, and global scaling." },
                        { name: "Kubernetes & Docker", desc: "Containerized orchestration for seamless model deployment." }
                    ]}
                    align="left"
                    image="https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=800"
                />

                {/* Data Engineering */}
                <TechSection
                    title="Data Engineering & Vector DBs"
                    description="The memory and context systems that allow AI to understand your specific business data."
                    icon={<Database size={40} className="text-emerald-600 dark:text-emerald-400" />}
                    technologies={[
                        { name: "Pinecone & Milvus", desc: "High-performance vector databases for RAG (Retrieval Augmented Generation)." },
                        { name: "Apache Spark", desc: "Unified analytics engine for large-scale data processing." },
                        { name: "LangChain", desc: "The bridge connecting LLMs to your private data sources and APIs." },
                        { name: "MongoDB Atlas", desc: "Flexible document storage for unstructured AI metadata." }
                    ]}
                    align="right"
                    image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
                />

            </div>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 mt-32">
                <div className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-12 md:p-24 text-center border border-gray-100 dark:border-white/10 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white relative z-10">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 relative z-10">
                        Leverage our world-class technology stack to transform your business operations and customer experiences.
                    </p>
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2">
                            Start a Project <ArrowRight size={20} />
                        </Link>
                        <Link href="/solutions" className="px-8 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-white/20 text-black dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function TechSection({ title, description, icon, technologies, align, image }: any) {
    return (
        <div className={`flex flex-col ${align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}>

            {/* Text Content */}
            <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/10">
                        {icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technologies.map((tech: any, idx: number) => (
                        <div key={idx} className="p-4 rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-zinc-900/50 hover:border-blue-500/30 transition-colors">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{tech.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual/Image Area (Generic Tech Abstract) */}
            <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-zinc-900 flex items-center justify-center">
                    {/* Placeholder for actual image if needed, or abstract tech vis */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-80 dark:opacity-60" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent"></div>
                </div>
            </div>

        </div>
    );
}

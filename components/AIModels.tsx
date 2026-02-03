"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Cpu, Layers, Image as ImageIcon, Code2, Database, BrainCircuit } from "lucide-react";
import Link from "next/link";

const categories = [
    { id: "toolkits", label: "AI Toolkits" },
    { id: "frameworks", label: "DL Frameworks" },
    { id: "gen_models", label: "Generative Models" },
    { id: "neural_nets", label: "Neural Networks" },
    { id: "libraries", label: "AI Libraries" },
    { id: "image_models", label: "Image Models" },
];

const data = {
    toolkits: [
        { name: "DALL·E", icon: ImageIcon },
        { name: "OpenAI", icon: BrainCircuit },
        { name: "NVIDIA", icon: Cpu },
        { name: "Hugging Face", icon: "🤗" }, // Using emoji for HF if icon not avail, or text
        { name: "Google DeepMind", icon: Layers },
        { name: "TensorFlow", icon: Layers }, // TensorFlow is a library/framework but listed here in image
        { name: "fast.ai", icon: Code2 },
        { name: "AllenNLP", icon: Database },
        { name: "Meta AI", icon: BrainCircuit }, // Facebook AI Research
    ],
    // Populating others with generic placeholders for now as image only shows one tab
    frameworks: [
        { name: "PyTorch", icon: Layers },
        { name: "Keras", icon: Layers },
        { name: "JAX", icon: Code2 },
        { name: "MXNet", icon: Database },
        { name: "Caffe", icon: Cpu },
        { name: "ONNX", icon: Layers },
    ],
    gen_models: [
        { name: "GPT-4", icon: BrainCircuit },
        { name: "Claude 3", icon: BrainCircuit },
        { name: "Llama 3", icon: BrainCircuit },
        { name: "Stable Diffusion", icon: ImageIcon },
        { name: "Midjourney", icon: ImageIcon },
        { name: "Mistral", icon: Code2 },
    ],
    neural_nets: [
        { name: "Transformer", icon: Layers },
        { name: "CNN", icon: ImageIcon },
        { name: "RNN", icon: Database },
        { name: "LSTM", icon: Database },
        { name: "GAN", icon: ImageIcon },
        { name: "BERT", icon: BrainCircuit },
    ],
    libraries: [
        { name: "Scikit-learn", icon: Code2 },
        { name: "Pandas", icon: Database },
        { name: "NumPy", icon: Code2 },
        { name: "SciPy", icon: Code2 },
        { name: "OpenCV", icon: ImageIcon },
        { name: "NLTK", icon: Database },
    ],
    image_models: [
        { name: "ResNet", icon: ImageIcon },
        { name: "YOLO", icon: ImageIcon },
        { name: "VGG", icon: ImageIcon },
        { name: "Inception", icon: ImageIcon },
        { name: "EfficientNet", icon: ImageIcon },
        { name: "ViT", icon: ImageIcon },
    ],
};

export function AIModels() {
    const [activeTab, setActiveTab] = useState("toolkits");

    return (
        <section className="py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white"
                    >
                        Cutting-edge AI models powering intelligent solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        We leverage industry-leading AI models to build powerful, intelligent agents that deliver exceptional performance across diverse business applications.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`relative pb-4 text-sm md:text-base font-semibold transition-colors duration-300 ${activeTab === cat.id
                                ? "text-black dark:text-white"
                                : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                                }`}
                        >
                            {cat.label}
                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-white"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {data[activeTab as keyof typeof data].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 p-6 rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/30 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                                {typeof item.icon === "string" ? (
                                    <span className="text-xl">{item.icon}</span>
                                ) : (
                                    <item.icon size={20} className="text-gray-700 dark:text-gray-300" />
                                )}
                            </div>
                            <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{item.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link href="/technology">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#003366] dark:bg-white text-white dark:text-[#003366] px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg flex items-center gap-2 mx-auto"
                        >
                            Get Advanced AI Tech
                            <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

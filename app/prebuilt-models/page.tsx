"use client";

import { motion } from "framer-motion";
import { Scan, User, Car, ScanFace, Box, Eye, Fingerprint, Focus } from "lucide-react";

const models = [
    {
        title: "AI Transcription",
        icon: Focus,
        desc: "High-accuracy speech-to-text for multiple languages.",
        features: ["Real-time streaming", "Speaker Diarization", "30+ Languages Supported", "Custom Vocabulary"],
        specs: "Accuracy: 99% | Latency: <500ms"
    },
    {
        title: "Vehicle Counting",
        icon: Car,
        desc: "Real-time traffic analysis and vehicle counting system.",
        features: ["Classifies Cars, Trucks, Bikes", "Day/Night Capability", "Traffic Flow Analytics", "License Plate Recognition Ready"],
        specs: "FPS: 60+ on Edge | Accuracy: >98%"
    },
    {
        title: "Face Recognition",
        icon: ScanFace,
        desc: "Secure access control and identity verification.",
        features: ["Liveness Detection", "Anti-Spoofing", "1:N Matching", "Masked Face Recognition"],
        specs: "Database: 1M+ Faces | Match Time: <100ms"
    },
    {
        title: "Person Detection",
        icon: User,
        desc: "Detect and track individuals in complex environments.",
        features: ["Multi-Camera Tracking", "Crowd Density Analysis", "Loitering Detection", "Pose Estimation"],
        specs: "YOLOv8 Based | Occlusion Handling"
    },
    {
        title: "Food Detection",
        icon: Box,
        desc: "Automated dietary analysis and calorie estimation.",
        features: ["Ingredient Analysis", "Portion Estimation", "Calorie Counting", "Freshness Detection"],
        specs: "Cuisines: Global | Recognition: 500+ Dishes"
    },
    {
        title: "Apparel Detection",
        icon: Scan,
        desc: "Fashion items recognition for retail analytics.",
        features: ["Brand Recognition", "Style Classification", "Color/Pattern matching", "Virtual Try-On Output"],
        specs: "Retail Ready | Real-time SDK"
    },
    {
        title: "Animal Detection",
        icon: Eye,
        desc: "Wildlife monitoring and domestic animal tracking.",
        features: ["Species Identification", "Behavior Analysis", "Poacher Alert System", "Farm Livestock Counting"],
        specs: "Thermal Support | Night Vision"
    },
    {
        title: "Object Detection",
        icon: Box,
        desc: "General purpose YOLO-based object detection.",
        features: ["Custom Object Training", "80+ COCO Classes", "Edge Deployment", "API Integration"],
        specs: "Model: YOLO-World | Formats: ONNX, TensorRT"
    },
    {
        title: "Logo Recognition",
        icon: Fingerprint,
        desc: "Brand monitoring and visibility analysis.",
        features: ["Sponsorship Valuation", "Broadcast Monitoring", "Social Media Scanning", "Fake Product Detection"],
        specs: "Small Object Detection | Rotated Logo Support"
    },
    {
        title: "Face Blur AI",
        icon: ScanFace,
        desc: "Privacy protection for public video feeds.",
        features: ["GDPR Compliant", "Selective Blurring", "Reversible Encryption", "Live Stream Processing"],
        specs: "Zero Latency | 4K Support"
    },
];

import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function PrebuiltModels() {
    const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

    return (
        <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Prebuilt <span className="text-[var(--primary)] neon-text">AI Models</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Deploy production-ready AI models instantly. Accuracy tested and optimized for edge devices and cloud.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-6 rounded-xl border border-white/5 hover:border-[var(--primary)]/50 transition-colors group flex flex-col"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                            <model.icon size={24} className="text-[var(--primary)]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{model.title}</h3>
                        <p className="text-sm text-gray-400 mb-6 flex-grow">{model.desc}</p>
                        <button
                            onClick={() => setSelectedModel(model)}
                            className="w-full py-2 rounded border border-[var(--primary)]/30 hover:bg-[var(--primary)] hover:text-black transition-all text-sm font-semibold"
                        >
                            Learn More
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedModel && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedModel(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-lg glass-card p-8 rounded-2xl border border-[var(--primary)]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
                        >
                            <button
                                onClick={() => setSelectedModel(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/20">
                                    <selectedModel.icon size={32} className="text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedModel.title}</h2>
                                    <p className="text-sm text-[var(--primary)]">{selectedModel.specs}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {selectedModel.desc} This model is pre-trained and ready for deployment via Docker container or API endpoint. It comes with full documentation and support for custom fine-tuning on your specific dataset.
                            </p>

                            <div className="space-y-3 mb-8">
                                <h4 className="font-semibold text-white border-b border-white/10 pb-2">Key Features</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {selectedModel.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={`https://wa.me/919876543210?text=I'm%20interested%20in%20the%20${encodeURIComponent(selectedModel.title)}%20model.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 rounded-lg bg-[var(--primary)] text-black font-bold hover:bg-[var(--primary)]/90 transition-all text-center flex items-center justify-center gap-2"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="/brochure.pdf" // Placeholder link
                                    download={`${selectedModel.title.toLowerCase().replace(/\s+/g, '-')}-docs.pdf`}
                                    className="flex-1 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-semibold text-center flex items-center justify-center"
                                >
                                    View Documentation
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

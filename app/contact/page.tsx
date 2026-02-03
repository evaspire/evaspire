"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Info */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Let&apos;s Build the <span className="text-[var(--primary)] neon-text">Future</span> Together
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Ready to integrate AI into your business? Book a free consultation or drop us a message.
                    </p>

                    <div className="space-y-6 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Call Us</p>
                                <p className="text-xl font-bold">+91 8525000360</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Us</p>
                                <p className="text-xl font-bold">contact@evaspire.in</p>
                            </div>
                        </div>

                        {/* WhatsApp Button - Below Contact Info */}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/918525000360"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#128C7E] transition-all shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12.01 0.85c-6.18 0-11.2 5.02-11.2 11.2 0 1.97 0.51 3.86 1.48 5.54l-1.57 5.76 5.9-1.55c1.62 0.88 3.45 1.34 5.39 1.34 6.18 0 11.2-5.02 11.2-11.2 0-6.18-5.02-11.09-11.2-11.09zM12.01 21.08c-1.66 0-3.29-0.45-4.73-1.3l-0.34-0.2-3.51 0.92 0.94-3.41-0.22-0.35c-0.96-1.55-1.46-3.32-1.46-5.14 0-5.27 4.29-9.55 9.32-9.55 5.03 0 9.32 4.28 9.32 9.55s-4.29 9.48-9.32 9.48zM17.11 15.65c-0.28-0.14-1.65-0.81-1.91-0.91-0.26-0.09-0.45-0.14-0.64 0.14-0.19 0.28-0.73 0.91-0.89 1.09-0.16 0.19-0.33 0.21-0.61 0.07-0.28-0.14-1.18-0.43-2.25-1.39-0.83-0.74-1.39-1.66-1.55-1.94-0.16-0.28-0.02-0.43 0.12-0.57 0.13-0.13 0.28-0.33 0.42-0.5 0.14-0.16 0.19-0.28 0.28-0.45 0.09-0.19 0.05-0.35-0.02-0.49-0.07-0.14-0.64-1.54-0.87-2.11-0.23-0.56-0.46-0.48-0.64-0.49-0.17-0.01-0.36-0.01-0.56-0.01-0.19 0-0.5 0.07-0.76 0.35-0.26 0.28-0.99 0.96-0.99 2.35 0 1.39 1.01 2.73 1.15 2.92 0.14 0.19 1.99 3.04 4.82 4.26 0.67 0.29 1.19 0.46 1.6 0.59 0.67 0.22 1.28 0.19 1.77 0.11 0.54-0.08 1.65-0.67 1.88-1.32 0.23-0.65 0.23-1.21 0.16-1.32-0.07-0.11-0.26-0.19-0.54-0.33z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 p-8 rounded-2xl border border-white/10"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--primary)] outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--primary)] outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Subject</label>
                            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--primary)] outline-none transition-colors text-gray-300">
                                <option>General Inquiry</option>
                                <option>AI Solutions</option>
                                <option>SaaS Product</option>
                                <option>Final Year Project</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--primary)] outline-none transition-colors h-32 resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[var(--primary)] text-black font-bold rounded-lg hover:bg-[var(--primary)]/90 transition-all flex items-center justify-center gap-2">
                            <Send size={20} /> Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

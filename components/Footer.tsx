import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-3xl font-bold tracking-tighter">
                            <span className="text-white">EVA</span>
                            <span className="text-[var(--primary)] neon-text">SPIRE</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building Industry-Ready AI Solutions. Empowering startups and enterprises with cutting-edge Computer Vision and Generative AI technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Platform</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/prebuilt-models" className="hover:text-[var(--primary)] transition-colors">Prebuilt Models</Link></li>
                            <li><Link href="/solutions" className="hover:text-[var(--primary)] transition-colors">Solutions</Link></li>
                            <li><Link href="/industries" className="hover:text-[var(--primary)] transition-colors">Industries</Link></li>
                            <li><Link href="/ai-ad-generation" className="hover:text-[var(--primary)] transition-colors">AI Ad Generator</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/final-year-projects" className="hover:text-[var(--primary)] transition-colors">Final Year Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-400">
                            <a href="mailto:contact@evaspire.in" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                                <Mail size={16} /> contact@evaspire.in
                            </a>
                            <a href="tel:+918525000360" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                                <Phone size={16} /> +91 8525000360
                            </a>
                            <div className="flex items-center gap-4 pt-2">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} EVASPIRE. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

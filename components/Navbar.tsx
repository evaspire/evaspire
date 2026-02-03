"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/helper/ThemeToggle";
import { Logo } from "@/components/Logo";
import logoimg from "@/assets/logo.png";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Prebuilt Models", href: "/prebuilt-models" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "AI Ad Generation", href: "/ai-ad-generation" },
    { name: "Final Year Projects", href: "/final-year-projects" },
    { name: "Company", href: "/company" },
    { name: "Careers", href: "/careers" },
];

export function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass-nav py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="hover:opacity-80  transition-opacity">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-500 hover:text-[var(--primary)] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full bg-[var(--primary)] text-[var(--background)] font-semibold hover:bg-[var(--primary)]/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                        Free Consultation
                    </Link>
                    <ThemeToggle />
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden text-white hover:text-[var(--primary)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/10"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-gray-300 hover:text-[var(--primary)]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center px-4 py-3 rounded bg-[var(--primary)] text-black font-bold"
                            >
                                Free Consultation
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

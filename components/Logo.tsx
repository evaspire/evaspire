"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={cn("relative flex items-center gap-2", className)}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-transparent" />
                <div className="w-24 h-8 md:w-32 md:h-10 bg-transparent" />
            </div>
        );
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    // Filter logic: light.png is optimised for Light Mode (Black + Yellow).
    // In Dark Mode, we invert it (Black->White, Yellow->Blue) then rotate hue (Blue->Yellow) to get White + Yellow.
    const logoFilter = isDark ? "invert hue-rotate-180 brightness-110 saturate-150" : "";

    return (
        <div className={cn("relative flex items-center gap-2 select-none", className)}>
            {/* Icon - Processed to be Small */}


            {/* Text - Big & Dark Mode Only */}
            {/* <span className="hidden dark:block font-[family-name:var(--font-poppins)] text-3xl md:text-5xl font-light tracking-wide text-white lowercase">
                evaspire
            </span> */}

            {mounted && (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                >
                    {isDark ? (
                        <span className="font-[family-name:var(--font-poppins)] text-2xl md:text-4xl font-light tracking-wide text-white lowercase">
                            ev
                            <motion.span
                                animate={{
                                    textShadow: ["0 0 0px #eab308", "0 0 10px #eab308", "0 0 0px #eab308"],
                                    opacity: [1, 0.8, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="text-yellow-500 inline-block"
                            >
                                a
                            </motion.span>
                            spire
                        </span>
                    ) : (
                        <span className="font-[family-name:var(--font-poppins)] text-2xl md:text-4xl font-light tracking-wide text-black lowercase">
                            ev
                            <motion.span
                                animate={{
                                    scale: [1, 1.05, 1],
                                    color: ["#eab308", "#ca8a04", "#eab308"]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="text-yellow-500 inline-block"
                            >
                                a
                            </motion.span>
                            spire
                        </span>
                    )}
                </motion.div>
            )}

        </div>
    );
}




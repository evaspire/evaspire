import { Share2, Users, BrainCircuit, Building2 } from "lucide-react";

const stats = [
    { label: "AI Projects Delivered", value: "150+", icon: Share2 },
    { label: "Happy Clients", value: "20+", icon: Users },
    { label: "Proprietary AI Models", value: "30+", icon: BrainCircuit },
    { label: "Industries Served", value: "12+", icon: Building2 },
];

export function TrustStats() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon size={24} className="text-[var(--primary)]" />
                            </div>
                            <h3 className="text-4xl font-bold text-white tracking-tighter">{stat.value}</h3>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

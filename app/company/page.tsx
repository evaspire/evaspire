import { TrustStats } from "@/components/TrustStats";

export default function Company() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-[var(--primary)] neon-text">EVASPIRE</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    EVASPIRE is a leading AI Development Company committed to automating growth with excellence.
                    We bridge the gap between cutting-edge research and industry-ready solutions.
                </p>
            </div>
            <TrustStats />
        </div>
    );
}

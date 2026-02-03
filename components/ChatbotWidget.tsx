"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Sparkles, User, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "bot";
    text: string;
}

// Decision Tree Logic
const chatFlow: any = {
    start: {
        text: "👋 Hi, I’m Eva. What are you looking for today?",
        options: [
            { label: "College Project", next: "college_project" },
            { label: "SaaS Product Build", next: "saas_build_type" },
            { label: "Industry Level Project", next: "industry_domain" },
            { label: "AI Solution", next: "ai_solution_type" }
        ]
    },
    // --- College Project Branch ---
    college_project: {
        text: "Great! Are you looking for a Mini Project or a Major Project?",
        options: [
            { label: "Mini Project", next: "mini_project_content" },
            { label: "Major Project", next: "major_project_domain" }
        ]
    },
    major_project_domain: {
        text: "Which domain are you interested in?",
        options: [
            { label: "Machine Learning (ML)", next: "ml_content" },
            { label: "Deep Learning (DL)", next: "dl_domain" }
        ]
    },
    dl_domain: {
        text: "Deep Learning is a great choice! Focus area?",
        options: [
            { label: "Image Processing", next: "image_processing_content" },
            { label: "NLP (Natural Language Processing)", next: "nlp_content" }
        ]
    },

    // --- SaaS Build Branch ---
    saas_build_type: {
        text: "Building a SaaS product is exciting! What stage are you at?",
        options: [
            { label: "MVP (Minimum Viable Product)", next: "saas_mvp_content" },
            { label: "Full Scale Application", next: "saas_full_content" },
            { label: "Maintenance & Support", next: "saas_maintenance_content" }
        ]
    },

    // --- Industry Level Branch ---
    industry_domain: {
        text: "We specialize in enterprise solutions. Which industry is this for?",
        options: [
            { label: "Healthcare", next: "industry_healthcare" },
            { label: "Finance / Fintech", next: "industry_finance" },
            { label: "E-Commerce / Retail", next: "industry_ecommerce" },
            { label: "Manufacturing", next: "industry_manufacturing" }
        ]
    },

    // --- AI Solution Branch ---
    ai_solution_type: {
        text: "AI can transform operations. What type of solution do you need?",
        options: [
            { label: "Chatbot / Virtual Assistant", next: "ai_chatbot_content" },
            { label: "Predictive Analytics", next: "ai_predictive_content" },
            { label: "Computer Vision", next: "ai_vision_content" },
            { label: "Generative AI / LLMs", next: "ai_genai_content" }
        ]
    },

    // --- Content Nodes (Endpoints) ---
    mini_project_content: {
        text: "🎓 **Mini Project Support**\nWe provide ready-to-deploy mini projects with documentation.\n\n• Python/Web Based\n• Source Code Included\n• Viva Support\n\nInterested? Click below to chat on WhatsApp.",
        options: [],
        action: "whatsapp"
    },
    ml_content: {
        text: "🤖 **Machine Learning Projects**\nAdvanced ML algorithms for predictive modeling and analysis.\n\n• Custom Datasets\n• IEEE Base Paper Implementation\n• Full Report Support\n\nLet's discuss your requirements.",
        options: [],
        action: "whatsapp"
    },
    image_processing_content: {
        text: "👁️ **Image Processing (IEEE)**\nState-of-the-art Computer Vision projects.\n\n• Object Detection, Segmentation, Face Rec\n• Latest YOLO/CNN Models\n• IEEE Paper Implementation\n\nGet the complete project kit now.",
        options: [],
        action: "whatsapp"
    },
    nlp_content: {
        text: "🗣️ **NLP Projects (IEEE)**\nCutting-edge Language Models and Text Analysis.\n\n• Chatbots, Sentiment Analysis, Summarization\n• Transformers/BERT/LLM integrations\n• IEEE Paper Support\n\nStart your NLP journey with us.",
        options: [],
        action: "whatsapp"
    },
    saas_mvp_content: {
        text: "🚀 **SaaS MVP Development**\nQuickly validate your idea with a functional prototype.\n\n• Core Feature Implementation\n• Rapid Development (2-4 Weeks)\n• Scalable Architecture from Day 1\n\nLet's verify your idea.",
        options: [],
        action: "whatsapp"
    },
    saas_full_content: {
        text: "🏢 **Full Scale SaaS Platform**\nEnd-to-end engineered production system.\n\n• React/Next.js + Python/Node Backend\n• Multi-tenant Architecture\n• Stripe/Payment Integration\n• Advanced Admin Dashboards\n\nGet a quote for your platform.",
        options: [],
        action: "whatsapp"
    },
    saas_maintenance_content: {
        text: "🔧 **Maintenance & Support**\nKeep your platform running smoothly.\n\n• Bug Fixes & Performance Tuning\n• Feature Additions\n• Server Monitoring\n\nTalk to our support team.",
        options: [],
        action: "whatsapp"
    },
    industry_healthcare: {
        text: "🏥 **Healthcare AI Solutions**\nHIPAA compliant secure solutions.\n\n• Patient Data Analytics\n• Disease Prediction Models\n• Medical Image Analysis\n\nPartner with us.",
        options: [],
        action: "whatsapp"
    },
    industry_finance: {
        text: "💰 **Fintech Solutions**\nSecure and fast financial technology.\n\n• Fraud Detection Systems\n• Algorithmic Trading Bots\n• Risk Assessment Models\n\nSecure your financial infrastructure.",
        options: [],
        action: "whatsapp"
    },
    industry_ecommerce: {
        text: "🛒 **E-Commerce Growth**\nBoost sales with AI.\n\n• Recommendation Engines\n• Customer Churn Prediction\n• Dynamic Pricing Models\n\nOptimize your store.",
        options: [],
        action: "whatsapp"
    },
    industry_manufacturing: {
        text: "🏭 **Smart Manufacturing**\nIndustry 4.0 solutions.\n\n• Predictive Maintenance\n• Quality Control Vision Systems\n• Supply Chain Optimization\n\nModernize your factory.",
        options: [],
        action: "whatsapp"
    },
    ai_chatbot_content: {
        text: "💬 **Intelligent Chatbots**\n24/7 Customer support automation.\n\n• RAG (Retrieval Augmented Generation)\n• Multi-platform Support (Web/WhatsApp)\n• Custom Knowledge Base\n\nAutomate your support.",
        options: [],
        action: "whatsapp"
    },
    ai_predictive_content: {
        text: "📈 **Predictive Analytics**\nForest the future with data.\n\n• Sales Forecasting\n• Trend Analysis\n• Custom Regression Models\n\nMake data-driven decisions.",
        options: [],
        action: "whatsapp"
    },
    ai_vision_content: {
        text: "👁️ **Computer Vision**\nAutomate visual tasks.\n\n• Facial Recognition\n• Quality Inspection\n• Surveillance Analysis\n\nSee the potential of AI.",
        options: [],
        action: "whatsapp"
    },
    ai_genai_content: {
        text: "✨ **Generative AI**\nCreate content and code.\n\n• Custom LLM Fine-tuning\n• Content Generation Tools\n• Code Assistants\n\nLeverage the power of GenAI.",
        options: [],
        action: "whatsapp"
    }
};

export function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "intro", role: "bot", text: chatFlow["start"].text }
    ]);
    const [currentStep, setCurrentStep] = useState("start");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleChoice = (option: any) => {
        // User Message
        setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", text: option.label }]);
        setIsTyping(true);
        setCurrentStep("typing"); // Lock interactions

        setTimeout(() => {
            const nextStepId = option.next;
            const nextStepData = chatFlow[nextStepId];

            if (nextStepData) {
                setMessages(prev => [...prev, { id: Date.now().toString(), role: "bot", text: nextStepData.text }]);
                setCurrentStep(nextStepId);
            }
            setIsTyping(false);
        }, 800);
    };

    const resetChat = () => {
        setMessages([{ id: "intro", role: "bot", text: chatFlow["start"].text }]);
        setCurrentStep("start");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[380px] max-w-[90vw] h-[600px] max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl"
                    >
                        {/* Modern Header */}
                        <div className="p-5 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg border-2 border-white/20">
                                        <Sparkles size={20} className="text-white fill-white" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-black rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white dark:text-black">Eva AI</h3>
                                    <p className="text-xs text-gray-300 dark:text-gray-600 font-medium">Always Active</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={resetChat}
                                    className="p-2 text-gray-400 hover:text-white dark:hover:text-black transition-colors rounded-full hover:bg-white/10 dark:hover:bg-black/5"
                                    title="Reset Chat"
                                >
                                    <MessageCircle size={18} className="rotate-12" />
                                </button>
                                <button
                                    onClick={toggleChat}
                                    className="p-2 text-gray-400 hover:text-white dark:hover:text-black transition-colors rounded-full hover:bg-white/10 dark:hover:bg-black/5"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={cn(
                                        "flex gap-3",
                                        msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                                        msg.role === "user" ? "bg-gray-200 dark:bg-gray-800" : "bg-gradient-to-tr from-[#FFD700] to-[#FFA500]"
                                    )}>
                                        {msg.role === "user" ? <User size={14} className="text-gray-600 dark:text-gray-300" /> : <Sparkles size={14} className="text-white fill-white" />}
                                    </div>

                                    <div className={cn(
                                        "p-3.5 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm",
                                        msg.role === "user"
                                            ? "bg-black text-white dark:bg-white dark:text-black rounded-tr-sm"
                                            : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-tl-sm"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-sm">
                                        <Sparkles size={14} className="text-white fill-white" />
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Choices / Actions */}
                        <div className="p-4 bg-gray-50/50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                {currentStep !== "typing" && chatFlow[currentStep]?.options.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="grid grid-cols-1 gap-2"
                                    >
                                        {chatFlow[currentStep].options.map((opt: any, idx: number) => (
                                            <motion.button
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                key={idx}
                                                onClick={() => handleChoice(opt)}
                                                className="group relative flex items-center justify-between w-full p-4 text-sm font-semibold text-left 
                                                bg-white dark:bg-zinc-900/50 
                                                border border-gray-100 dark:border-white/10 
                                                rounded-2xl
                                                hover:border-orange-400 dark:hover:border-yellow-500/50 
                                                hover:bg-orange-50/50 dark:hover:bg-white/5
                                                hover:shadow-[0_4px_20px_-5px_rgba(255,165,0,0.15)]
                                                transition-all duration-300"
                                            >
                                                <span className="relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-orange-700 dark:group-hover:text-yellow-400 transition-colors">
                                                    {opt.label}
                                                </span>

                                                <div className="relative z-10 w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-yellow-500/20 transition-colors border border-gray-100 dark:border-white/5 group-hover:border-orange-200 dark:group-hover:border-yellow-500/30">
                                                    <ChevronLeft size={16} className="rotate-180 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}

                                {currentStep !== "typing" && (chatFlow[currentStep]?.action === "whatsapp" || chatFlow[currentStep]?.options.length === 0) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mt-2"
                                    >
                                        <a
                                            href="https://wa.me/918525000360"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex items-center justify-center gap-2 w-full p-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                            <MessageCircle size={20} />
                                            <span>Chat via WhatsApp</span>
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mini Popup Prompt */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        className="bg-white dark:bg-zinc-900 text-black dark:text-white px-5 py-2.5 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 text-sm font-semibold flex items-center gap-2 mr-1 mb-2 relative"
                    >
                        <span>Chat with Eva AI</span>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        {/* Triangle pointer */}
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-zinc-900 rotate-45 border-b border-r border-black/5 dark:border-white/10"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modern Toggle Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 rounded-2xl bg-black dark:bg-white text-white dark:text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 group overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative"
                        >
                            <Sparkles size={32} strokeWidth={1.5} className="fill-white/20 dark:fill-black/20" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black dark:border-white"></span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

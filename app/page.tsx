"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Globe, MessageSquare, Linkedin, Instagram, ArrowRight, Languages } from "lucide-react";

const translations = {
    en: {
        companyName: "AMS IT Services",
        tagline: "Reliable Tech Solutions",
        description: "Empowering your business with seamless IT support and innovative digital strategies.",
        announcement: "Ready to dominate the web? 🚀 Unlock 100+ premium templates to launch, grow, and scale your business to new heights!",
        callNow: "Call for Support",
        email: "Send an Email",
        website: "Visit Website",
        footer: "© 2026 AMS IT Services Group",
    },
    es: {
        companyName: "AMS IT Services",
        tagline: "Soluciones Tecnológicas Confiables",
        description: "Potenciando su negocio con soporte de TI fluido y estrategias digitales innovadoras.",
        announcement: "¿Listo para dominar la web? 🚀 ¡Desbloquea más de 100 plantillas premium para lanzar y escalar tu negocio hoy mismo!",
        callNow: "Llamar para soporte",
        email: "Enviar un correo",
        website: "Visitar sitio web",
        footer: "© 2026 Grupo AMS IT Services",
    }
};

export default function Home() {
    const [lang, setLang] = useState<"en" | "es">("en");
    const t = translations[lang];

    const toggleLang = () => setLang(prev => prev === "en" ? "es" : "en");

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 selection:bg-sky-500/30">
            <div className="w-full max-w-[480px] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
                {/* Language Toggle Fixed to Top Right of card */}
                <div className="flex justify-end mb-4 pr-4">
                    <button
                        onClick={toggleLang}
                        className="glass-button flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all border border-white/10"
                    >
                        <Languages className="w-3.5 h-3.5 text-sky-400" />
                        {lang.toUpperCase()}
                    </button>
                </div>

                <article className="glass-card rounded-[40px] overflow-hidden group relative">
                    {/* Header with floating effect */}
                    <header className="p-10 pb-6 text-center">
                        <div className="mx-auto w-28 h-28 mb-6 p-1 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full shadow-2xl relative">
                            <div className="absolute inset-0 rounded-full animate-pulse bg-sky-400/20 blur-xl" />
                            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden relative z-10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/logo.jpg" alt="AMS IT Services Logo" className="w-full h-full object-contain scale-110 transition-transform duration-700 group-hover:scale-125" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                            {t.companyName}
                        </h1>
                        <div className="h-1 w-12 bg-sky-500 mx-auto rounded-full mb-4 opacity-70" />
                    </header>

                    {/* Announcement Banner */}
                    <div className="bg-sky-500/10 border-y border-white/5 py-5 px-8 text-center relative overflow-hidden group/ann">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/5 to-transparent -translate-x-full group-hover/ann:translate-x-full transition-transform duration-1000" />

                        {/* Catchy Badge */}
                        <div className="absolute top-0 right-0">
                            <div className="bg-sky-500 text-[10px] font-black px-3 py-1 rounded-bl-xl shadow-lg animate-pulse tracking-tighter">
                                {lang === 'en' ? 'LIMITED' : 'LIMITADO'}
                            </div>
                        </div>

                        <p className="text-sky-300 text-sm font-semibold leading-relaxed relative z-10">
                            {t.announcement.split('?').map((part, i) => (
                                <span key={i}>
                                    {i === 0 ? (
                                        <span className="block text-white text-lg font-black mb-1 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent animate-gradient-x">
                                            {part}?
                                        </span>
                                    ) : (
                                        <span className="opacity-90 italic">
                                            {part}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Visual Divider / Hero Element */}
                    <div className="relative h-2 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent animate-shimmer scale-x-150" />
                    </div>

                    {/* Content Area */}
                    <div className="p-10 pt-8 pb-14 text-center">
                        <h2 className="text-lg font-medium text-sky-100 mb-3 tracking-wide">
                            {t.tagline}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-10 px-6 font-light">
                            {t.description}
                        </p>

                        <nav className="flex flex-col gap-4">
                            <Link
                                href="tel:901-415-0779"
                                className="glass-button flex items-center justify-between px-6 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium group/btn"
                            >
                                <div className="flex items-center">
                                    <div className="p-2 bg-sky-500/20 rounded-lg mr-4 group-hover/btn:bg-sky-500/30 transition-colors">
                                        <Phone className="w-5 h-5 text-sky-400" />
                                    </div>
                                    <span>{t.callNow}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="mailto:mudassir@amsitservices.com"
                                className="glass-button flex items-center justify-between px-6 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium group/btn"
                            >
                                <div className="flex items-center">
                                    <div className="p-2 bg-indigo-500/20 rounded-lg mr-4 group-hover/btn:bg-indigo-500/30 transition-colors">
                                        <Mail className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span>{t.email}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="https://www.amsitservices.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button flex items-center justify-between px-6 py-4.5 rounded-2xl bg-sky-500 text-white font-semibold shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-sky-400 group/btn"
                            >
                                <div className="flex items-center">
                                    <div className="p-2 bg-white/20 rounded-lg mr-4 group-hover/btn:scale-110 transition-transform">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <span>{t.website}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/70 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </nav>

                        {/* Social Media Links */}
                        <div className="mt-12 flex items-center justify-center gap-6">
                            <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-sky-400 transition-all text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-400 transition-all text-slate-400">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/9014150779" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-green-400 transition-all text-slate-400">
                                <MessageSquare className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Footer simple copy */}
                <footer className="mt-8 text-center">
                    <p className="text-slate-500 text-xs font-light tracking-widest uppercase">
                        {t.footer}
                    </p>
                </footer>
            </div>
        </main>
    );
}



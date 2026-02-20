import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24">
            <div className="w-full max-width-[440px] animate-in fade-in slide-in-from-bottom-5 duration-1000">
                <article className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                    {/* Header */}
                    <header className="p-8 pb-5 text-center">
                        <div className="mx-auto w-24 h-24 mb-4 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.jpg" alt="AMS IT Services Logo" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                            AMS IT Services
                        </h1>
                    </header>

                    {/* Hero Section */}
                    <section className="relative h-40 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                            alt="IT Services Pattern"
                            className="w-full h-full object-cover grayscale opacity-80"
                        />
                    </section>

                    {/* Content Area */}
                    <div className="p-8 pt-6 pb-12 text-center">
                        <h2 className="text-xl font-semibold text-slate-700 mb-2">
                            Your Business, Our Support
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 px-4">
                            Reliable IT solutions designed to keep your business running smoothly.
                        </p>

                        <nav className="flex flex-col gap-3">
                            <Link
                                href="tel:901-415-0779"
                                className="flex items-center justify-center p-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95 hover:scale-[1.02] hover:shadow-lg border border-white/40 bg-gradient-to-r from-orange-400 to-pink-400 text-slate-900 group"
                            >
                                <Phone className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                                Call Now
                            </Link>

                            <Link
                                href="mailto:mudassir@amsitservices.com"
                                className="flex items-center justify-center p-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95 hover:scale-[1.02] hover:shadow-lg border border-white/40 bg-gradient-to-r from-sky-300 to-blue-400 text-slate-900 group"
                            >
                                <Mail className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                                Email
                            </Link>

                            <Link
                                href="https://in.amsitservices.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95 hover:scale-[1.02] hover:shadow-lg border border-white/40 bg-gradient-to-r from-lime-300 to-green-400 text-slate-900 group"
                            >
                                <Globe className="w-4 h-4 mr-2 transition-transform group-hover:spin-slow" />
                                Website
                            </Link>
                        </nav>
                    </div>
                </article>
            </div>
        </main>
    );
}


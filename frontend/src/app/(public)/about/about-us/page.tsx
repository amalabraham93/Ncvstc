import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | NCVSTC',
    description: 'Learn about NCVSTC, an autonomous body under MCA, Govt of India.',
};

export default function AboutUsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#0F2347] relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(15,123,108,0.15)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                        Established 2006 · ISO Certified
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        About <span className="text-[#13A090]">Us</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl">
                        Statutory Autonomous Body · Ministry of Corporate Affairs · Government of India
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Introduction
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6 leading-tight">
                            Navigating Career for <br />
                            <span className="text-[#E8920A]">Vocational Skill Technology Council</span>
                        </h2>
                        <div className="prose prose-lg text-[#4A5568]">
                            <p className="mb-4">
                                <strong className="text-[#0F2347]">NCVSTC</strong> Vocational Education Council works towards creating a skilled, employable, and self-reliant generation through quality vocational education and professional development initiatives.
                            </p>
                            <p className="mb-4">
                                The council supports skill enhancement, entrepreneurship, and employment-focused training programmes aligned with evolving industry requirements. Through modern teaching methodologies and technology-enabled learning, NCVSTC ensures students gain practical knowledge, professional competence, and career readiness.
                            </p>
                            <p>
                                Our certification and verification systems are designed to support educational progression, professional recognition, and employment opportunities in private sectors, multinational companies, industries, and international employment environments.
                            </p>
                        </div>
                    </div>

                    {/* Recognition Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { number: '25+', label: 'Years of Excellence', color: 'from-[#0F2347] to-[#1B3A6B]' },
                            { number: '100+', label: 'Courses Offered', color: 'from-[#0F7B6C] to-[#13A090]' },
                            { number: '500+', label: 'Study Centers', color: 'from-[#1B3A6B] to-[#254F8F]' },
                            { number: '50K+', label: 'Students Trained', color: 'from-[#E8920A] to-[#C47A08]' },
                        ].map((stat, i) => (
                            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg`}>
                                <div className="font-serif text-3xl font-bold mb-1">{stat.number}</div>
                                <div className="text-xs uppercase tracking-wider opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

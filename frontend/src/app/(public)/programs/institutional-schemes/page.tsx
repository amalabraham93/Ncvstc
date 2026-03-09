import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Institutional Development Schemes | NCVSTC',
};

export default function InstitutionalSchemesPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="w-16 h-16 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                        <span className="text-3xl">🏛️</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Institutional <span className="text-[#13A090]">Development Schemes</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-3xl p-8 md:p-14 shadow-sm">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-6">Building Robust Educational Infrastructure</h2>
                        <p className="text-[#4A5568] text-lg">
                            NCVSTC focuses on fostering excellence across all affiliated vocational training centers through structured institutional development protocols. We aim to ensure quality assurance, sustainable practices, and the generation of globally competitive human capital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 border border-[#DDE3F0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#E8920A] uppercase tracking-widest text-xs mb-4">Our Mission</h3>
                            <p className="text-[#0F2347] font-medium leading-relaxed">
                                To establish strict quality assurance frameworks, provide global accreditation standards, and nurture highly competitive human capital across our institutional network.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 border border-[#DDE3F0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#0F7B6C] uppercase tracking-widest text-xs mb-4">Our Vision</h3>
                            <p className="text-[#0F2347] font-medium leading-relaxed">
                                To create sustainable and universally meaningful employment opportunities for everyone through strong, well-equipped training institutions.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-white rounded-2xl p-8 border border-[#DDE3F0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#1B3A6B] uppercase tracking-widest text-xs mb-4">Core Values</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['Integrity', 'Teamwork', 'Service', 'Creativity', 'Learning', 'Excellence', 'Accountability', 'Respect'].map((val, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#EEF2FA] text-[#1B3A6B] text-xs font-bold rounded-full">{val}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

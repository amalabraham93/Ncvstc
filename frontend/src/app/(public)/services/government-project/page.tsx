import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Government Projects | NCVSTC',
};

export default function GovernmentProjectPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                        Government Initiative
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Government <span className="text-[#E8920A]">Projects</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Collaborating with government bodies to drive skill development across India
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-[#0F2347] border border-[#DDE3F0] rounded-3xl p-8 md:p-14 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="w-20 h-20 bg-[rgba(232,146,10,0.2)] rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-4xl">🏛️</span>
                            </div>
                            <h3 className="font-serif text-3xl font-bold text-white mb-6">Skill Development Initiative Scheme</h3>
                            <p className="text-white/70 leading-relaxed mb-8 text-lg">
                                NCVSTC actively participates in government-led skill development projects, partnering with various ministries to implement vocational training programs across the nation. Our projects focus on empowering marginalized communities and creating employment opportunities through targeted skill training.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {['MSME', 'DGT', 'Ministry of Labour', 'NITI Aayog'].map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-inner">
                            <h4 className="text-white font-bold mb-6 text-xl border-b border-white/10 pb-4">Current Active Projects</h4>
                            <ul className="space-y-4">
                                {[
                                    'Rural Skill Development Program',
                                    'Women Empowerment through Vocational Training',
                                    'Youth Entrepreneurship Development',
                                    'Apprenticeship Training (NCVT MIS)'
                                ].map((project, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/90 text-md">
                                        <div className="w-8 h-8 rounded-full bg-[#E8920A]/20 flex items-center justify-center shrink-0">
                                            <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                        </div>
                                        {project}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <span className="text-white/40 text-sm italic">[ Government Project Image Placeholder ]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

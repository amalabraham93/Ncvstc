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
                            <h3 className="font-serif text-3xl font-bold text-white mb-6">Skill Development Initiative Programs</h3>
                            <p className="text-white/70 leading-relaxed mb-4 text-lg">
                                NCVSTC actively collaborates with various Government of India ministries, departments, and national skill missions to implement vocational education, employment generation, and entrepreneurship development programmes across the country.
                            </p>
                            <p className="text-white/70 leading-relaxed mb-8 text-lg">
                                Our initiatives are focused on empowering youth, women, rural communities, minorities, and economically weaker sections through industry-oriented skill training and livelihood opportunities.
                            </p>

                            <h4 className="text-white font-bold mb-4 text-xl">Associated Ministries & National Bodies</h4>
                            <div className="flex flex-wrap gap-3 mt-4 mb-8">
                                {['Ministry of Skill Development & Entrepreneurship (MSDE)', 'Ministry of MSME', 'Directorate General of Training (DGT)', 'Ministry of Labour & Employment', 'NITI Aayog'].map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <h4 className="text-white font-bold mb-4 text-xl">Our Objective</h4>
                            <p className="text-white/70 leading-relaxed mb-4 text-lg">
                                To create a skilled, employable, and self-reliant workforce by delivering quality vocational education, practical training, certification, and placement support aligned with national skill development goals.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-inner">
                            <h4 className="text-white font-bold mb-6 text-xl border-b border-white/10 pb-4">Major Skill Development Projects</h4>
                            <ul className="space-y-4">
                                {[
                                    'DDU-GKY – Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
                                    'PMKVY – Pradhan Mantri Kaushal Vikas Yojana',
                                    'NULM – National Urban Livelihoods Mission',
                                    'Rural Skill Development Programmes',
                                    'Women Empowerment through Vocational Training',
                                    'Youth Entrepreneurship Development Initiatives',
                                    'Apprenticeship Training Programmes (NCVT MIS)',
                                    'Industry-Integrated Placement Linked Training'
                                ].map((project, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/90 text-md leading-snug">
                                        <div className="w-8 h-8 rounded-full bg-[#E8920A]/20 flex items-center justify-center shrink-0">
                                            <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                        </div>
                                        {project}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

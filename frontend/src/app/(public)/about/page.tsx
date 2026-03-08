import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About NCVSTC | Vocational Education Council',
    description: 'Learn about NCVSTC, an autonomous body under MCA, Govt of India.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section for About */}
            <section className="bg-[#0F2347] relative py-20 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,123,108,0.2),transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">About NCVSTC</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Empowering youth through skill development, vocational training, and quality assurance systems across India.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Our Legacy
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6 leading-tight">
                            A Statutory Autonomous Body <br /> Dedicated to <span className="text-[#E8920A]">Vocational Excellence</span>
                        </h2>
                        <div className="prose prose-lg text-[#4A5568] leading-relaxed">
                            <p className="mb-6">
                                NCVSTC (Navigating Career for Vocational Skill Technology Council) is a specialized non-governmental organization and autonomous body registered under the Ministry of Corporate Affairs (Section 8), Government of India.
                            </p>
                            <p className="mb-6">
                                Established under the guiding principles of Article 29 & 30(1) of the Constitution of India, we operate with a mandate to democratize education. Our focus is squarely on providing cutting-edge vocational training, skill development initiatives, and technical education in non-formal modes, including Online and Open Distance Learning.
                            </p>
                            <p>
                                As an ISO 9001:2015 certified organization, we act as a catalyst for quality assurance in vocational education, offering affiliation, accreditation, and rigorous train-the-trainer academies to ensure our youth are industry-ready.
                            </p>
                        </div>

                        <div className="mt-10 p-6 bg-[#FAFBFF] border-l-4 border-[#0F7B6C] rounded-r-lg">
                            <h4 className="font-serif text-xl font-bold text-[#1B3A6B] mb-3">Our Core Mission</h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                                To eradicate unemployment by providing accessible, affordable, and high-quality vocational education to the decentralized and marginalized sections of society, equipping them with practical skills for self-employment and industrial readiness.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-2xl p-8 lg:p-12 shadow-lg">
                        <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-6">Accreditations & Recognitions</h3>

                        <ul className="space-y-6">
                            {[
                                {
                                    title: 'Ministry of Corporate Affairs',
                                    desc: 'Incorporated under Sec. 8 of the MCA Act, Govt. of India.'
                                },
                                {
                                    title: 'NITI Aayog',
                                    desc: 'Registered under the Planning Commission (NGO Darpan).'
                                },
                                {
                                    title: 'Ministry of MSME',
                                    desc: 'Recognized under the Micro, Small & Medium Enterprises Act, 2006.'
                                },
                                {
                                    title: 'Directorate General of Training (DGT)',
                                    desc: 'Aligned with Skill Development Initiative Schemes (SDIS).'
                                },
                                {
                                    title: 'UNESCO-UNEVOC',
                                    desc: 'Internationally accredited vocational education network member.'
                                },
                                {
                                    title: 'Legal Precedent (AIR 1993 SC-2178)',
                                    desc: 'Certificates hold legal validity for employment across sectors.'
                                }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#E6F5F3] text-[#0F7B6C] flex items-center justify-center shrink-0 mt-1 pb-0.5">
                                        ✓
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-[#1B3A6B] text-sm md:text-base mb-1">{item.title}</h5>
                                        <p className="text-sm text-[#718096]">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}

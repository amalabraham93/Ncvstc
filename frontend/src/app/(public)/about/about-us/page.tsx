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
                                <strong className="text-[#0F2347]">NCVSTC</strong> is a Statutory Autonomous Body, Recognized by Skill Development Initiative Scheme, Ministry of Skill Development & Entrepreneurship Government of India. Incorporated with Ministry of Micro Small & Medium Enterprises, Government of India.
                            </p>
                            <p className="mb-4">
                                Set up by NCVSTC Vocational Education Council is a non-profit company established by the Ministry of Corporate Affairs, Government of India under Section 25 of the Companies Act, 1956 (corresponding to Section 8 of the Companies Act, 2013). We are an ISO 2009-2015 Certified Council, recognized by Ministry of Labour and Employment, Government of India, with accreditation by IAO and UNESCO-UNEVOC International Centre.
                            </p>
                            <p>
                                Our prime vision and objective is to promote and develop education for minority communities who are unable to get education due to financial constraints and remote locations.
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

            {/* Indian Education System Section */}
            <section className="bg-[#FAFBFF] py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                                <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                                Context
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6">
                                Indian Education <span className="text-[#E8920A]">System</span>
                            </h2>
                            <p className="text-[#4A5568] mb-4">
                                Education is the founding stone of a country's economy. A country that fails to provide its citizens the right to education lags behind in every way.
                            </p>
                            <p className="text-[#4A5568] mb-4">
                                The history of Indian education has its roots in the ancient ages where they followed the Gurukul system – a system where the students resided in the house of their teacher until the teacher felt that he had imparted all that he could. The subjects taught varied from Sanskrit to Scriptures to Mathematics to Metaphysics.
                            </p>
                            <p className="text-[#4A5568]">
                                However, this system was changed during the Colonial era when the British set up schools that followed a curriculum confined to subjects such as Mathematics, Science etc. While the ancient system included more interaction with nature, the modern system was more Classroom oriented.
                            </p>
                        </div>

                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8">
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-6">Challenges & Reforms</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                                    <p className="text-sm text-[#4A5568]">In 2014, India's global education ranking slipped to 93, calling for immediate reforms.</p>
                                </div>

                                <h4 className="font-bold text-[#0F2347] mt-4">Reasons for students opting abroad:</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Lack of top-quality programmes offered by Indian colleges",
                                        "Poor quality of teachers - teaching not seen as lucrative career",
                                        "Outdated syllabus taught in most colleges",
                                        "Lack of state-of-art infrastructure"
                                    ].map((reason, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-[#4A5568]">
                                            <span className="text-red-500">•</span>
                                            {reason}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 p-4 bg-[#0F2347] text-white rounded-lg">
                                    <p className="text-sm italic">
                                        "Focus should be on Skill-based Education: Give a man a fish and you feed him one day, teach him how to catch fishes and you feed him for a lifetime"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

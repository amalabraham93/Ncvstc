'use client';

import Link from 'next/link';

export default function HomePrograms() {
    const programs = [
        {
            title: 'Teacher Training Education',
            img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
            desc: 'Empowering educators with modern pedagogies, classroom management, and child psychology. Programs range from Early Childhood to Advanced Higher Education methodologies.'
        },
        {
            title: 'Computer & IT Skills',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
            desc: 'Industry-aligned tech education covering Software Development, Networking, Data Science, Cyber Security, and basic IT literacy for the digital age workforce.'
        },
        {
            title: 'Health & Paramedical Science',
            img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
            desc: 'Critical allied healthcare training including Medical Lab Technology, Radiology, Nursing Assistants, and Hospital Administration to support global medical infrastructure.'
        },
        {
            title: 'Vocational Engineering',
            img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
            desc: 'Practical, hands-on engineering programs in Civil, Mechanical, Electrical, and Automobile sectors focusing on industry-ready technical competencies.'
        },
        {
            title: 'Agriculture & Veterinary',
            img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
            desc: 'Sustainable farming techniques, modern agribusiness management, and veterinary assistant programs to boost rural economy and food security.'
        },
        {
            title: 'Hotel Management & Tourism',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
            desc: 'Comprehensive hospitality training covering Culinary Arts, F&B Service, Front Office, and Travel & Tourism operations for the booming hospitality sector.'
        }
    ];

    return (
        <section id="programs" className="py-16 md:py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0F7B6C] mb-3">
                        <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
                        Explore Offerings
                        <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
                    </div>
                    <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#0F2347] mb-4 leading-tight">
                        Academic <span className="font-normal text-[#13A090]">Sectors</span>
                    </h2>
                    <p className="text-[#4A5568] leading-relaxed">
                        Discover our diverse range of vocational and skill development programs, designed in alignment with industry standards to ensure global employability and entrepreneurial success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, i) => (
                        <div key={i} className="group bg-white rounded-xl overflow-hidden border border-[#DDE3F0] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,58,107,0.14)] hover:-translate-y-1">
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img
                                    src={program.img}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 relative">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md absolute -top-5 right-6 border border-[#EEF2FA] text-[#0F7B6C] transition-colors group-hover:bg-[#E8920A] group-hover:text-white">
                                    ↗
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3 group-hover:text-[#13A090] transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-sm text-[#718096] leading-relaxed mb-5 line-clamp-3">
                                    {program.desc}
                                </p>
                                <Link href="/programs" className="inline-flex items-center font-bold text-xs uppercase tracking-wider text-[#0F2347] group-hover:text-[#E8920A] transition-colors">
                                    View Courses <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-[#1B3A6B] border border-[#1B3A6B] rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-[#1B3A6B] hover:text-white group">
                        Browse All 50+ Programs
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

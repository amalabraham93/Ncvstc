import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Courses & Programs | NCVSTC',
    description: 'Explore the 50+ vocational courses and skill development disciplines offered by NCVSTC.',
};

export default function ProgramsPage() {
    const programs = [
        {
            sector: 'Teacher Training Education',
            img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
            courses: [
                'Nursery Teacher Training (NTT)',
                'Primary Teacher Training (PTT)',
                'Early Childhood Care Education (ECCE)',
                'Anganwadi Worker Training',
                'Montessori Teacher Training (MTT)'
            ]
        },
        {
            sector: 'Health & Paramedical',
            img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
            courses: [
                'Diploma in Medical Lab Technology (DMLT)',
                'Diploma in X-Ray & Radiology',
                'Nursing Assistant Training',
                'Physiotherapy Assistant',
                'Hospital Management'
            ]
        },
        {
            sector: 'Computer & IT Skills',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
            courses: [
                'Post Graduate Diploma in Computer Applications (PGDCA)',
                'Diploma in Financial Accounting (Tally)',
                'Hardware & Networking Engineering',
                'Web Designing & Development',
                'Data Entry Operations'
            ]
        },
        {
            sector: 'Technical & Vocational Engineering',
            img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
            courses: [
                'Electrician & Wireman Training',
                'A/C & Refrigeration Mechanic',
                'Plumber & Pipe Fitting',
                'Welder (Gas & Electric)',
                'Automobile Mechanic'
            ]
        },
        {
            sector: 'Design & Aesthetics',
            img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80',
            courses: [
                'Fashion Designing & Tailoring',
                'Beauty Parlour & Makeup Arts',
                'Interior Designing',
                'Textile Design',
                'Jewellery Designing'
            ]
        },
        {
            sector: 'Agriculture & Veterinary',
            img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
            courses: [
                'Diploma in Agriculture Science',
                'Veterinary Assistant Training',
                'Dairy Farming & Management',
                'Horticulture & Nursery Management',
                'Organic Farming'
            ]
        }
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            {/* Hero Section for Programs */}
            <section className="bg-[#0F2347] relative py-16 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,146,10,0.15),transparent_60%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Academic Programs & Sectors</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Industry-aligned vocational and skill development courses designed to nurture global employability.
                    </p>
                </div>
            </section>

            {/* Programs Listing */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {programs.map((prog, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#DDE3F0] shadow-sm hover:shadow-[0_12px_40px_rgba(27,58,107,0.1)] transition-all group">
                            <div className="h-44 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img
                                    src={prog.img}
                                    alt={prog.sector}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="bg-[#1B3A6B]/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                                        Sector
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-4 group-hover:text-[#0F7B6C] transition-colors">
                                    {prog.sector}
                                </h3>

                                <ul className="space-y-3 mb-6">
                                    {prog.courses.map((course, idx) => (
                                        <li key={idx} className="flex gap-3 items-start text-[0.85rem] text-[#4A5568]">
                                            <span className="text-[#E8920A] text-[0.6rem] mt-1.5">◆</span>
                                            <span className="leading-snug">{course}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-[#EEF2FA]">
                                    <Link href="/register" className="inline-flex items-center gap-2 text-[#0F7B6C] text-sm font-bold hover:text-[#E8920A] transition-colors">
                                        Enroll in Sector <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vocational Education Initiatives (Committees & Standards) */}
                <div className="mt-16 mb-16">
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#DDE3F0] shadow-sm hover:shadow-[0_12px_40px_rgba(27,58,107,0.08)] transition-all flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#EEF4FF] rounded-full blur-3xl -z-0"></div>
                        <div className="relative z-10 md:max-w-xl">
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#E8920A] mb-3">
                                <div className="w-6 h-0.5 bg-[#E8920A]"></div>
                                Standards & Guidelines
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347] mb-4">
                                Vocational Education Initiatives
                            </h3>
                            <p className="text-[#4A5568] leading-relaxed mb-0">
                                Discover our statutory and non-statutory framework mapping, including Internal Complaint Committees, Anti-Ragging measures, and community college development policies.
                            </p>
                        </div>
                        <div className="relative z-10 shrink-0 w-full md:w-auto">
                            <Link href="/committees" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B3A6B] text-white rounded-lg font-bold text-sm tracking-wide shadow-md hover:bg-[#254F8F] transition-all hover:-translate-y-0.5">
                                View Committees & Initiatives <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA Bar */}
                <div className="bg-gradient-to-r from-[#1B3A6B] to-[#254F8F] rounded-2xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#E8920A]/20 rounded-full blur-2xl"></div>

                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                        Cant find what you are looking for?
                    </h3>
                    <p className="text-white/80 max-w-xl mx-auto mb-8 relative z-10">
                        We offer more than 50+ specialized vocational courses across multiple disciplines. Download our complete prospectus or speak to an academic counselor.
                    </p>
                    <div className="flex flex-wrapjustify-center gap-4 relative z-10">
                        <button className="px-6 py-3 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-md hover:bg-[#C47A08]">
                            Download Prospectus
                        </button>
                        <Link href="/contact" className="px-6 py-3 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-white/20">
                            Contact Counselor
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Vocational Initiatives | NCVSTC',
};

export default function VocationalInitiativesPage() {
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
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(15,123,108,0.15)_0%,transparent_70%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Vocational <span className="text-[#13A090]">Initiatives</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                        <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                        Course Catalog
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                        Vocational <span className="text-[#E8920A]">Sectors</span>
                    </h2>
                    <p className="text-[#4A5568] max-w-2xl mx-auto mt-4">Exploring 50+ specialized vocational training areas designed for practical application and immediate employability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((prog, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#DDE3F0] shadow-sm hover:shadow-[0_12px_40px_rgba(27,58,107,0.1)] transition-all group">
                            <div className="h-44 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
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
                                            <span>{course}</span>
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
            </section>
        </div>
    );
}

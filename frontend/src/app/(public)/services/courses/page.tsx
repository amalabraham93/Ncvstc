import { Metadata } from 'next';
import Link from 'next/link';
import CourseCatalog from './CourseCatalog';

export const metadata: Metadata = {
    title: 'Offered Courses & Skill Sectors | NCVSTC',
    description: 'Explore NCVSTC specialized training sectors with certified subcourses, course duration, minimum qualifications, and syllabi.',
};

export default function CoursesServicesPage() {
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
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--color-navy-dark)', position: 'relative', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                        Courses & <span style={{ color: 'var(--color-teal-light)' }}>Services</span>
                    </h1>
                </div>
            </section>

            <section style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '1280px', margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem' }} className="lg:px-8">
                {/* CORE SERVICES SECTION */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-teal mb-4">
                        <div className="w-6 h-0.5 bg-teal"></div>
                        What We Offer
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark">
                        Core <span className="text-amber">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((prog, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-[0_12px_40px_rgba(27,58,107,0.1)] transition-all group">
                            <div className="h-44 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
                                <img
                                    src={prog.img}
                                    alt={prog.sector}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="bg-navy/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                                        Sector
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-navy-dark mb-4 group-hover:text-teal transition-colors">
                                    {prog.sector}
                                </h3>

                                <ul className="space-y-3 mb-6">
                                    {prog.courses.map((course, idx) => (
                                        <li key={idx} className="flex gap-3 items-start text-[0.85rem] text-gray-600">
                                            <span className="text-amber text-[0.6rem] mt-1.5">◆</span>
                                            <span>{course}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-gray-100">
                                    <Link href="/register" className="inline-flex items-center gap-2 text-teal text-sm font-bold hover:text-amber transition-colors">
                                        Enroll in Sector <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* New section imported from CourseCatalog */}
            <CourseCatalog />

        </div>
    );
}

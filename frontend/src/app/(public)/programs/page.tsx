import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Courses & Programs | NCVSTC',
    description: 'Explore 50+ vocational courses, student development schemes, statutory committees, and skill development initiatives by NCVSTC.',
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
            {/* Hero Section */}
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(15,123,108,0.15)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                        50+ Vocational Courses
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                       Programs & <span className="text-[#13A090]">Government Initiatives</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Industry-aligned vocational courses, student development schemes, and comprehensive skill development initiatives.
                    </p>
                </div>
            </section>

            {/* Constitutional & Legal Framework */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[rgba(232,146,10,0.1)] rounded-full blur-3xl"></div>
                    
                    <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                        Constitutional Framework
                    </div>
                    
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Legal & Constitutional Validity</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-white/80 leading-relaxed">
                                NCVSTC Vocational Education Council is established for development of education under the guidelines of National Education Policy 1986 and Programme of Action 1992, Govt. of India respectively.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                It has been constituted to regulate non-formal Primary, Middle, Matriculation (10th), Senior Secondary (12th) education and vocational courses (Under Self Employment Education Scheme) in India.
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                                <p className="text-sm text-white/90 font-semibold mb-2">Constitutional Rights:</p>
                                <ul className="space-y-2 text-sm text-white/70">
                                    <li>• Article 19(1)(G) - Right to practice any profession</li>
                                    <li>• Article 29 & 30 - Cultural and educational rights</li>
                                    <li>• Human Rights Protection Act 1993</li>
                                    <li>• AIR 1993 SC-2178 (J.P. Unnikrishnan Case)</li>
                                    <li>• T.M.A. Pai Foundation Vs. State of Karnataka (2003)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-[#E8920A] mb-4">Government Recognition</h3>
                            <div className="border-l-2 border-[#E8920A] pl-4 mb-6">
                                <p className="text-sm text-white/80 italic">
                                    "According to Ministry of Home Affairs Government of India Notification No. 26/4/52 C.C. Dated 20/09/52 issued in consultation with UPSC, degrees/diplomas awarded by Boards/Universities incorporated by Act of Central or State Legislature are recognized automatically for employment."
                                </p>
                                <p className="text-xs text-white/50 mt-2">— Harish Chandra, Under Secretary, Govt. of India</p>
                            </div>
                            
                            <div className="mt-4 p-3 bg-[rgba(232,146,10,0.15)] rounded-lg">
                                <p className="text-sm text-white/90">
                                    <span className="font-bold text-[#E8920A]">Note:</span> Being a NON-UGC Programme, certificates are not recommended for PSC/UPSC but widely accepted in PSUs, MNCs, and Private Sector with official verification.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-10 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: '🎯', title: 'Education, Health & Character', sub: 'Our Motto' },
                        { icon: '🌍', title: 'Doorstep Learning', sub: 'Democratizing Education' },
                        { icon: '📅', title: 'Flexible Duration', sub: 'Place & Time Flexibility' },
                        { icon: '💼', title: 'Self-Employment', sub: 'Cost Effective Programs' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-[#DDE3F0] rounded-lg p-4 text-center hover:shadow-md transition-all">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="text-xs font-bold text-[#0F2347]">{item.title}</div>
                            <div className="text-[0.6rem] text-[#718096]">{item.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                        <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                        Course Catalog
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                        Vocational <span className="text-[#E8920A]">Sectors</span>
                    </h2>
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

            {/* Examination & Certification */}
            <section className="bg-white py-16 border-y border-[#DDE3F0]">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                                <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                                Assessment
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-4">
                                Examination & <span className="text-[#E8920A]">Certification</span>
                            </h2>
                        </div>
                        
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-5">
                                <h3 className="font-bold text-[#0F2347] mb-3 flex items-center gap-2">
                                    <span className="text-[#E8920A] text-lg">📝</span> Examination
                                </h3>
                                <p className="text-sm text-[#4A5568]">
                                    Final examinations held at end of academic year session in March/April. Supplementary exams in September/October. Minimum 50% marks required in each paper as per rule 3b-9.
                                </p>
                            </div>
                            
                            <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-5">
                                <h3 className="font-bold text-[#0F2347] mb-3 flex items-center gap-2">
                                    <span className="text-[#E8920A] text-lg">🎓</span> Certification
                                </h3>
                                <p className="text-sm text-[#4A5568]">
                                    Successful students awarded Diploma/Degree Certificate by NCVSTC Vocational Educational Council as per rule 3b-9. Certificates attested by Foreign Embassies.
                                </p>
                            </div>
                            
                            <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-5">
                                <h3 className="font-bold text-[#0F2347] mb-3 flex items-center gap-2">
                                    <span className="text-[#E8920A] text-lg">🌐</span> Medium
                                </h3>
                                <p className="text-sm text-[#4A5568]">
                                    Regional/State Language medium. Question papers in English/Hindi. Answers accepted in English/Hindi or state language if mentioned in examination form.
                                </p>
                            </div>
                            
                            <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-5">
                                <h3 className="font-bold text-[#0F2347] mb-3 flex items-center gap-2">
                                    <span className="text-[#E8920A] text-lg">👥</span> Age & Sex
                                </h3>
                                <p className="text-sm text-[#4A5568]">
                                    No restriction of age, caste, sex, region, or country under skill development and distance education programmes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Institutional & Staff Development */}
            <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Student Development */}
                    <div className="bg-white border border-[#DDE3F0] rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#E6F5F3] rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">👨‍🎓</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3">Student Development Schemes</h3>
                        <ul className="space-y-2 text-sm text-[#4A5568]">
                            <li className="flex gap-2">• Individualized study flexibility</li>
                            <li className="flex gap-2">• Student support network</li>
                            <li className="flex gap-2">• Cost-effective self-employment programs</li>
                            <li className="flex gap-2">• Access regardless of formal qualifications</li>
                        </ul>
                    </div>
                    
                    {/* Institutional Development */}
                    <div className="bg-white border border-[#DDE3F0] rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#FEF5E6] rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🏛️</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3">Institutional Development</h3>
                        <div className="space-y-2 text-sm text-[#4A5568]">
                            <p><span className="font-bold text-[#0F2347]">Mission:</span> Quality assurance, accreditation, and globally competitive human capital</p>
                            <p><span className="font-bold text-[#0F2347]">Vision:</span> Sustainable and meaningful employment for everyone</p>
                            <p><span className="font-bold text-[#0F2347]">Values:</span> Integrity, Teamwork, Service, Creativity, Learning, Excellence, Accountability, Respect</p>
                        </div>
                    </div>
                    
                    {/* Staff Development */}
                    <div className="bg-white border border-[#DDE3F0] rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#E6F5F3] rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">👩‍🏫</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3">Staff Development Schemes</h3>
                        <p className="text-sm text-[#4A5568] mb-3">Training and improvement of teachers, professionals, and mentors in vocational education framework.</p>
                        <ul className="space-y-1 text-sm text-[#4A5568]">
                            <li className="flex gap-2">• Professional support and counselling</li>
                            <li className="flex gap-2">• Modern methodical training</li>
                            <li className="flex gap-2">• Train-the-trainer academies</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Statutory Committees Section */}
            <section className="bg-[#FAFBFF] py-16">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Governance
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                            Statutory <span className="text-[#E8920A]">Committees</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column - Statutory Committees */}
                        <div className="space-y-4">
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-4 border-b-2 border-[#0F7B6C] pb-2 inline-block">Statutory Committees</h3>
                            
                            {/* Anti-Ragging Committee */}
                            <div className="bg-white border border-[#DDE3F0] rounded-xl p-5 hover:shadow-md transition-all">
                                <h4 className="font-bold text-[#0F2347] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                    Anti-Ragging Committee
                                </h4>
                                <p className="text-xs text-[#718096] mt-1">Prevention and prohibition of ragging in Skill/Vocational Institutions</p>
                                <p className="text-xs text-[#4A5568] mt-2">Headed by Head of Institution with representatives from civil administration, police, media, faculty, parents, and students.</p>
                            </div>
                            
                            {/* Anti-Ragging Squad */}
                            <div className="bg-white border border-[#DDE3F0] rounded-xl p-5 hover:shadow-md transition-all">
                                <h4 className="font-bold text-[#0F2347] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                    Anti-Ragging Squad
                                </h4>
                                <p className="text-xs text-[#4A5568] mt-1">Smaller body for maintaining vigil, oversight and patrolling functions, remaining mobile and alert at all times.</p>
                            </div>
                            
                            {/* Grievance Redressal Committee */}
                            <div className="bg-white border border-[#DDE3F0] rounded-xl p-5 hover:shadow-md transition-all">
                                <h4 className="font-bold text-[#0F2347] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                    Grievance Redressal Committee
                                </h4>
                                <p className="text-xs text-[#4A5568] mt-1">Ensuring transparency in admissions and providing mechanism for redressal of student grievances.</p>
                            </div>
                            
                            {/* Internal Complaint Committee (ICC) */}
                            <div className="bg-white border border-[#DDE3F0] rounded-xl p-5 hover:shadow-md transition-all">
                                <h4 className="font-bold text-[#0F2347] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                    Internal Complaint Committee (ICC)
                                </h4>
                                <p className="text-xs text-[#4A5568] mt-1">As per Sexual Harassment of Women at Workplace Act, 2013. Zero tolerance policy with training programs.</p>
                            </div>
                            
                            {/* Committee for SC/ST */}
                            <div className="bg-white border border-[#DDE3F0] rounded-xl p-5 hover:shadow-md transition-all">
                                <h4 className="font-bold text-[#0F2347] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#E8920A] rounded-full"></span>
                                    Committee for SC/ST
                                </h4>
                                <p className="text-xs text-[#4A5568] mt-1">As per SC/ST (Prevention of Atrocities) Act, 1989. Remedial coaching and optimal utilization of government schemes.</p>
                            </div>
                        </div>
                        
                        {/* Right Column - Other Committees */}
                        <div className="space-y-4">
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-4 border-b-2 border-[#E8920A] pb-2 inline-block">Other Statutory Committees</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'Governing Council', desc: 'Overall governance and policy direction' },
                                    { name: 'Finance Committee', desc: 'Financial requirements and audit oversight' },
                                    { name: 'Purchase Committee', desc: 'Monitoring purchase activities' },
                                    { name: 'Welfare Committee', desc: 'Academic and welfare activities for students/staff' },
                                    { name: 'Mentoring / Counselling Cell', desc: 'Time management, stress management, peer pressure counseling' },
                                    { name: 'Women Empowerment Cell', desc: 'Empowering women students and staff' },
                                ].map((committee, i) => (
                                    <div key={i} className="bg-white border border-[#DDE3F0] rounded-lg p-4">
                                        <h4 className="font-bold text-[#0F2347] text-sm">{committee.name}</h4>
                                        <p className="text-xs text-[#718096] mt-1">{committee.desc}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-4 mt-6 border-b-2 border-[#0F7B6C] pb-2 inline-block">Non-Statutory Committees</h3>
                            
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    'External Relations', 'R&D Activities', 'Student Extra Curricular', 
                                    'Hostel Committee', 'Library Advisory', 'Academic Audit',
                                    'Examination Committee', 'Admission Committee'
                                ].map((committee, i) => (
                                    <div key={i} className="bg-white border border-[#DDE3F0] rounded-lg p-3 text-center">
                                        <span className="text-xs font-medium text-[#0F2347]">{committee}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community College & Skill Development Initiatives */}
            <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Community College */}
                    <div className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-2xl p-8 text-white">
                        <div className="w-14 h-14 bg-[rgba(232,146,10,0.2)] rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🏘️</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-4">Community College Initiatives</h3>
                        <p className="text-white/80 text-sm mb-4">
                            Regulating non-formal Primary, Middle, Matriculation (10th), Senior Secondary (12th) education and vocational courses under Self Employment Education Scheme across India.
                        </p>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li className="flex gap-2">• Democratizing higher education to doorsteps</li>
                            <li className="flex gap-2">• Quality access irrespective of age, region, qualifications</li>
                            <li className="flex gap-2">• Need-based academic programs with vocational orientation</li>
                        </ul>
                    </div>
                    
                    {/* Skill Development */}
                    <div className="bg-gradient-to-br from-[#E8920A] to-[#C47A08] rounded-2xl p-8 text-white">
                        <div className="w-14 h-14 bg-[rgba(255,255,255,0.2)] rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">⚙️</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-4">Skill Development Initiatives</h3>
                        <p className="text-white/90 text-sm mb-4">
                            Comprehensive, flexible and responsive Vocational Training System with increased access to formal and non-formal vocational training programmes.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                <div className="text-xl font-bold">50+</div>
                                <div className="text-[0.6rem] uppercase">Courses</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                <div className="text-xl font-bold">25+</div>
                                <div className="text-[0.6rem] uppercase">States</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules & Regulations */}
            <section className="bg-white py-16 border-y border-[#DDE3F0]">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Guidelines
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                            Rules & <span className="text-[#E8920A]">Regulations</span>
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            'Check information before admission - no responsibility after',
                            'Fees once paid not refundable',
                            'Students must abide by rules and directions',
                            'Rule changes acceptable to student',
                            'Non-formal self-employment program - no job guarantee',
                            'Bogus documents result in automatic cancellation',
                            'Late fee = admission cancellation',
                            'Lost study materials - institute not responsible',
                            'Disputes resolved through Arbitration Act 1940'
                        ].map((rule, i) => (
                            <div key={i} className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-lg p-4 flex gap-3">
                                <span className="text-[#E8920A] font-bold text-sm">{i+1}.</span>
                                <span className="text-xs text-[#4A5568]">{rule}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] py-16">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your <span className="text-[#E8920A]">Vocational Journey?</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        Join thousands of students who have transformed their careers through NCVSTC's vocational training programs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            href="/register" 
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-[#C47A08] hover:-translate-y-0.5"
                        >
                            Apply Now for 2026–27 →
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-white/20"
                        >
                            Contact Counselor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
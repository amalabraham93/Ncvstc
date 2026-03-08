// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'About NCVSTC | Vocational Education Council',
//     description: 'Learn about NCVSTC, an autonomous body under MCA, Govt of India.',
// };

// export default function AboutPage() {
//     return (
//         <div className="bg-white">
//             {/* Hero Section for About */}
//             <section className="bg-[#0F2347] relative py-20 px-4">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,123,108,0.2),transparent_50%)]"></div>
//                 <div className="max-w-[1280px] mx-auto text-center relative z-10">
//                     <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">About NCVSTC</h1>
//                     <p className="text-white/70 max-w-2xl mx-auto text-lg">
//                         Empowering youth through skill development, vocational training, and quality assurance systems across India.
//                     </p>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//                     <div>
//                         <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
//                             <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
//                             Our Legacy
//                         </div>
//                         <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6 leading-tight">
//                             A Statutory Autonomous Body <br /> Dedicated to <span className="text-[#E8920A]">Vocational Excellence</span>
//                         </h2>
//                         <div className="prose prose-lg text-[#4A5568] leading-relaxed">
//                             <p className="mb-6">
//                                 NCVSTC (Navigating Career for Vocational Skill Technology Council) is a specialized non-governmental organization and autonomous body registered under the Ministry of Corporate Affairs (Section 8), Government of India.
//                             </p>
//                             <p className="mb-6">
//                                 Established under the guiding principles of Article 29 & 30(1) of the Constitution of India, we operate with a mandate to democratize education. Our focus is squarely on providing cutting-edge vocational training, skill development initiatives, and technical education in non-formal modes, including Online and Open Distance Learning.
//                             </p>
//                             <p>
//                                 As an ISO 9001:2015 certified organization, we act as a catalyst for quality assurance in vocational education, offering affiliation, accreditation, and rigorous train-the-trainer academies to ensure our youth are industry-ready.
//                             </p>
//                         </div>

//                         <div className="mt-10 p-6 bg-[#FAFBFF] border-l-4 border-[#0F7B6C] rounded-r-lg">
//                             <h4 className="font-serif text-xl font-bold text-[#1B3A6B] mb-3">Our Core Mission</h4>
//                             <p className="text-[#4A5568] text-sm leading-relaxed">
//                                 To eradicate unemployment by providing accessible, affordable, and high-quality vocational education to the decentralized and marginalized sections of society, equipping them with practical skills for self-employment and industrial readiness.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-2xl p-8 lg:p-12 shadow-lg">
//                         <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-6">Accreditations & Recognitions</h3>

//                         <ul className="space-y-6">
//                             {[
//                                 {
//                                     title: 'Ministry of Corporate Affairs',
//                                     desc: 'Incorporated under Sec. 8 of the MCA Act, Govt. of India.'
//                                 },
//                                 {
//                                     title: 'NITI Aayog',
//                                     desc: 'Registered under the Planning Commission (NGO Darpan).'
//                                 },
//                                 {
//                                     title: 'Ministry of MSME',
//                                     desc: 'Recognized under the Micro, Small & Medium Enterprises Act, 2006.'
//                                 },
//                                 {
//                                     title: 'Directorate General of Training (DGT)',
//                                     desc: 'Aligned with Skill Development Initiative Schemes (SDIS).'
//                                 },
//                                 {
//                                     title: 'UNESCO-UNEVOC',
//                                     desc: 'Internationally accredited vocational education network member.'
//                                 },
//                                 {
//                                     title: 'Legal Precedent (AIR 1993 SC-2178)',
//                                     desc: 'Certificates hold legal validity for employment across sectors.'
//                                 }
//                             ].map((item, i) => (
//                                 <li key={i} className="flex gap-4 items-start">
//                                     <div className="w-6 h-6 rounded-full bg-[#E6F5F3] text-[#0F7B6C] flex items-center justify-center shrink-0 mt-1 pb-0.5">
//                                         ✓
//                                     </div>
//                                     <div>
//                                         <h5 className="font-bold text-[#1B3A6B] text-sm md:text-base mb-1">{item.title}</h5>
//                                         <p className="text-sm text-[#718096]">{item.desc}</p>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// }

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About NCVSTC | Vocational Education Council',
    description: 'Learn about NCVSTC, an autonomous body under MCA, Govt of India.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#0F2347] relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(15,123,108,0.15)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(232,146,10,0.1)_0%,transparent_70%)] rounded-full"></div>
                
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                        Established 2006 · ISO Certified
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        About <span className="text-[#13A090]">NCVSTC</span>
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

            {/* Mission & Vision */}
            <section className="bg-[#FAFBFF] py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Our Direction
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                            Vision & <span className="text-[#E8920A]">Mission</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-[#E6F5F3] rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl">👁️</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-6">Our Vision</h3>
                            <ul className="space-y-4">
                                {[
                                    "Studying development trends in the labour market and preparation of occupation profiles",
                                    "Development of methodologies and modern, module-based education programmes",
                                    "Monitoring education programmes and evaluation of final examinations",
                                    "Training and improvement of teachers and mentors in vocational education",
                                    "Stimulation and coordination of innovation projects in vocational schools",
                                    "Development of modern education tools and technology",
                                    "Participation in professional organisations networks",
                                    "Promotion and encouragement of vocational education"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-[#0F7B6C] font-bold">•</span>
                                        <span className="text-sm text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-[#FEF5E6] rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-6">Our Mission</h3>
                            <ul className="space-y-4">
                                {[
                                    "To develop strategic and simplified texts in formal and informal education",
                                    "To become the reference point for International and National Networks",
                                    "To establish educational and consulting centre for educators based on lifelong learning",
                                    "To establish a national centre for acknowledging informal knowledge",
                                    "To assure quality in vocational and technical education for student development",
                                    "To establish a network designed to develop and promote vocational education"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-[#E8920A] font-bold">•</span>
                                        <span className="text-sm text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organization Chart Placeholder */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                        <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                        Structure
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-4">
                        Organization <span className="text-[#E8920A]">Chart</span>
                    </h2>
                </div>
                <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-2xl p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-[#0F2347] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl text-white">🏢</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-3">Organizational Structure</h3>
                        <p className="text-[#718096] mb-6">Hierarchical representation of NCVSTC's management and operational framework</p>
                        <div className="bg-[#F0F4FF] p-8 rounded-xl border-2 border-dashed border-[#0F7B6C]">
                            <span className="text-[#0F7B6C] font-medium">[ Organization Chart Image Placeholder ]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branches Section */}
            <section className="bg-[#FAFBFF] py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Network
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-4">
                            Our <span className="text-[#E8920A]">Offices</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* SPO */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-[#0F2347] rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] text-center mb-3">State Programme Office</h3>
                            <p className="text-sm text-[#718096] text-center">(SPO)</p>
                            <div className="mt-4 p-3 bg-[#F5F7FA] rounded-lg text-center text-sm text-[#4A5568]">
                                [ SPO Image Placeholder ]
                            </div>
                        </div>

                        {/* DRO */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-[#0F7B6C] rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] text-center mb-3">District Regional Office</h3>
                            <p className="text-sm text-[#718096] text-center">(DRO)</p>
                            <div className="mt-4 p-3 bg-[#F5F7FA] rounded-lg text-center text-sm text-[#4A5568]">
                                [ DRO Image Placeholder ]
                            </div>
                        </div>

                        {/* Zonal */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-[#E8920A] rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] text-center mb-3">Zonal Offices</h3>
                            <p className="text-sm text-[#718096] text-center">Regional Presence</p>
                            <div className="mt-4 p-3 bg-[#F5F7FA] rounded-lg text-center text-sm text-[#4A5568]">
                                [ Zonal Offices Image Placeholder ]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[rgba(232,146,10,0.1)] rounded-full"></div>
                    <div className="absolute left-10 top-10 w-32 h-32 bg-[rgba(15,123,108,0.1)] rounded-full"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                            <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                            Director's Message
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2">
                                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                                    "It gives me great pleasure to welcome you to Navigating Career for Vocational Skill Technology Council.
                                </p>
                                <div className="space-y-4 text-white/70">
                                    <p>
                                        India is a resource of massive manpower and for the development of our country using this resource, NCVSTC leads the race by taking a proactive step to converge a wave of skill development in India by giving recognized certified training with present market relevant skills. The advantage of skill development wherein the implementation of such schemes will make a strong impact in empowering socio-economic status, mitigate poverty, reduce social challenges, and economic inclusion.
                                    </p>
                                    <p>
                                        Candidate joining these vocational courses will get an idea to find and sculpt their hidden inner talent, which will make their responsible character recognized in the society and will make them stand on their own feet and altogether will increase the work force of our country by making the livelihood of the millions of Indians.
                                    </p>
                                    <p>
                                        NCVSTC aims to catalyze skilling initiatives that can have a good impact in the economy and skill development. The quality team at NCVSTC focuses on enabling standardized structure to enhance the skill development across the country. All skill training programs adheres to the National Standards. To assure consistency and quality of skilling across the training initiatives for various jobs across the country, NCVSTC coordinates and leads many VTCs. NCVSTC evaluate the performance of skill development programs in different VTCs, to foster excellence and build effectiveness in training which enables the trainees to make informed choices regarding Training Centers.
                                    </p>
                                    <p>
                                        I would like to congratulate the candidates who had joined NCVSTC courses and those who have made a positive decision to join. Along with improvising the education, we have also worked on the entire process, starting from admission till getting the certificate. I encourage the students to get enrolled in different courses, and also get participated in various events organized by NCVSTC at regular intervals. NCVSTC will provide quality training and will play a vital role in professional skills development."
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <p className="font-serif text-xl font-bold text-white">— Director</p>
                                    <p className="text-white/50 text-sm">NCVSTC Vocational Education Council</p>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-1">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <div className="w-24 h-24 bg-[rgba(232,146,10,0.2)] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-5xl">👤</span>
                                    </div>
                                    <h4 className="text-center font-bold text-white">Director's Office</h4>
                                    <p className="text-center text-white/50 text-sm mt-2">[ Director Image Placeholder ]</p>
                                </div>
                            </div>
                        </div>
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

            {/* Footer CTA */}
            <section className="bg-[#0F2347] py-16">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Join India's <span className="text-[#E8920A]">Skill Development</span> Movement
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        Be part of NCVSTC's mission to skill India's youth and create employment opportunities through quality vocational education.
                    </p>
                    <Link 
                        href="/register" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-[#C47A08] hover:-translate-y-0.5"
                    >
                        Apply for 2026–27 →
                    </Link>
                </div>
            </section>
        </div>
    );
}

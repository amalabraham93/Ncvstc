// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Services & Operations | NCVSTC',
//     description: 'Explore NCVSTC services including affiliation, accreditation, and centralized examination processes.',
// };

// export default function ServicesPage() {
//     return (
//         <div className="bg-white min-h-screen">
//             {/* Hero Section */}
//             <section className="bg-[#0F2347] relative py-16 px-4">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,123,108,0.2),transparent_70%)]"></div>
//                 <div className="max-w-[1280px] mx-auto text-center relative z-10">
//                     <h1 className="font-serif text-4xl font-bold text-white mb-4">Our Services</h1>
//                     <p className="text-white/70 max-w-2xl mx-auto text-lg">
//                         Delivering quality assurance, centralized examinations, and robust training frameworks for our vast network of institutions.
//                     </p>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//                     {[
//                         {
//                             icon: '🏢',
//                             title: 'Affiliation & Accreditation',
//                             desc: 'We grant affiliation to independent educational institutions, empowering them to operate as authorized Vocational Training Centers (VTC). Our accreditation process ensures strict adherence to national and international quality standards (ISO 9001:2015).'
//                         },
//                         {
//                             icon: '📝',
//                             title: 'Curriculum Design',
//                             desc: 'The Academic Council at NCVSTC continuously researches industry trends to design curriculums that bridge the skill gap. We provide comprehensive syllabi, study materials, and practical assignment frameworks.'
//                         },
//                         {
//                             icon: '🎓',
//                             title: 'Train The Trainer',
//                             desc: 'Our Zonal & Regional offices conduct regular workshops and pedagogy training sessions for instructors at affiliated VTCs, ensuring the teaching methodologies are modern, engaging, and highly effective.'
//                         },
//                         {
//                             icon: '📊',
//                             title: 'Centralized Examinations',
//                             desc: 'We conduct secure, centralized examinations across all associated centers in India. This maintains a uniform standard of evaluation, ensuring that every NCVSTC certificate holds immense credibility in the employment sector.'
//                         },
//                         {
//                             icon: '🔍',
//                             title: 'Verification Services',
//                             desc: 'Employers and government bodies can utilize our robust online verification portal to instantly validate student certificates, marks, and graduation status, eliminating credential fraud.'
//                         },
//                         {
//                             icon: '🤝',
//                             title: 'Placement Assistance',
//                             desc: 'Through our vast network of industry partners and MSME affiliations, we actively facilitate placement drives, job fairs, and apprenticeship opportunities (NCVT MIS) for our successful candidates.'
//                         }
//                     ].map((service, i) => (
//                         <div key={i} className="p-8 rounded-xl bg-[#FAFBFF] border border-[#EEF2FA] transition-all hover:border-[#13A090] hover:shadow-md group">
//                             <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm mb-6 border border-[#DDE3F0] group-hover:scale-110 transition-transform">
//                                 {service.icon}
//                             </div>
//                             <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3">
//                                 {service.title}
//                             </h3>
//                             <p className="text-[#4A5568] text-sm leading-relaxed">
//                                 {service.desc}
//                             </p>
//                         </div>
//                     ))}

//                 </div>

//             </section>
//         </div>
//     );
// }



import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Services & Operations | NCVSTC',
    description: 'Explore NCVSTC services including affiliation, accreditation, government projects, career placement, and centralized examination processes.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(15,123,108,0.15)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(232,146,10,0.1)_0%,transparent_70%)] rounded-full"></div>
                
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Delivering quality assurance, centralized examinations, government projects, and robust training frameworks for our vast network of institutions.
                    </p>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                        <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                        What We Offer
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                        Core <span className="text-[#E8920A]">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: '🏢',
                            title: 'Affiliation & Accreditation',
                            desc: 'We grant affiliation to independent educational institutions, empowering them to operate as authorized Vocational Training Centers (VTC). Our accreditation process ensures strict adherence to national and international quality standards (ISO 9001:2015).'
                        },
                        {
                            icon: '📝',
                            title: 'Curriculum Design',
                            desc: 'The Academic Council at NCVSTC continuously researches industry trends to design curriculums that bridge the skill gap. We provide comprehensive syllabi, study materials, and practical assignment frameworks.'
                        },
                        {
                            icon: '🎓',
                            title: 'Train The Trainer',
                            desc: 'Our Zonal & Regional offices conduct regular workshops and pedagogy training sessions for instructors at affiliated VTCs, ensuring teaching methodologies are modern, engaging, and highly effective.'
                        },
                        {
                            icon: '📊',
                            title: 'Centralized Examinations',
                            desc: 'We conduct secure, centralized examinations across all associated centers in India. This maintains a uniform standard of evaluation, ensuring that every NCVSTC certificate holds immense credibility in the employment sector.'
                        },
                        {
                            icon: '🔍',
                            title: 'Verification Services',
                            desc: 'Employers and government bodies can utilize our robust online verification portal to instantly validate student certificates, marks, and graduation status, eliminating credential fraud.'
                        },
                        {
                            icon: '🤝',
                            title: 'Placement Assistance',
                            desc: 'Through our vast network of industry partners and MSME affiliations, we actively facilitate placement drives, job fairs, and apprenticeship opportunities (NCVT MIS) for our successful candidates.'
                        }
                    ].map((service, i) => (
                        <div key={i} className="p-8 rounded-xl bg-[#FAFBFF] border border-[#EEF2FA] transition-all hover:border-[#13A090] hover:shadow-md group">
                            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm mb-6 border border-[#DDE3F0] group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-[#0F2347] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Government Project Section */}
            <section className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-4">
                            <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                            Government Initiative
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                            Government <span className="text-[#E8920A]">Projects</span>
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Collaborating with government bodies to drive skill development across India
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="w-20 h-20 bg-[rgba(232,146,10,0.2)] rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-4xl">🏛️</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-white mb-4">Skill Development Initiative Scheme</h3>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    NCVSTC actively participates in government-led skill development projects, partnering with various ministries to implement vocational training programs across the nation. Our projects focus on empowering marginalized communities and creating employment opportunities through targeted skill training.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {['MSME', 'DGT', 'Ministry of Labour', 'NITI Aayog'].map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h4 className="text-white font-bold mb-4">Current Projects</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Rural Skill Development Program',
                                        'Women Empowerment through Vocational Training',
                                        'Youth Entrepreneurship Development',
                                        'Apprenticeship Training (NCVT MIS)'
                                    ].map((project, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                                            <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full"></span>
                                            {project}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                    <span className="text-white/50 text-xs">[ Government Project Image Placeholder ]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career & Placement Section */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Career & Placement Cell */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Career Guidance
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6">
                            Career & <span className="text-[#E8920A]">Placement</span> Cell
                        </h2>
                        
                        <p className="text-[#4A5568] mb-6 leading-relaxed">
                            The Career & Placement Cell is responsible for organizing various qualitative training sessions in campus as per the requirements of the students & industry to equip students with the skill set to make them employable in the job market. The training sessions on soft skills, Corporate Grooming, Etiquettes & various career guidance sessions aim to effectively bridge the gap between classroom learning and corporate business expectations of the recruiters.
                        </p>

                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-6">
                            <h3 className="font-bold text-[#0F2347] mb-4">Objectives:</h3>
                            <ul className="space-y-3">
                                {[
                                    "To develop recruitment strategies that attract professional supporters in leading institutions",
                                    "Counseling students and providing employment-readiness services",
                                    "Creating interest and professionalism in students"
                                ].map((obj, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-[#4A5568]">
                                        <span className="text-[#0F7B6C] font-bold">•</span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Assistance Offered */}
                    <div className="bg-[#0F2347] rounded-2xl p-8 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-6">Assistance Offered</h3>
                        <ul className="space-y-4">
                            {[
                                "Students are provided Career Guidance and Placement Preparation Sessions",
                                "Students are assigned interviews with prospective employers based on their skill levels, aptitude and career aspirations",
                                "The Cell liaises with prospective hiring organizations till actual placement takes place",
                                "Negotiates on behalf of prospective employees with industry for best terms and conditions"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="w-6 h-6 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-white/80 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Entrepreneurship Development Cell */}
            <section className="bg-[#FAFBFF] py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#FEF5E6] rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl">💡</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-4">Entrepreneurship Development Cell</h3>
                            <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                                Entrepreneurship Development Clubs aim to sensitize the student community about the need and importance of industrialization. For this, there is a need for developing an entrepreneurial culture which involves a set of values, norms and traits that are conducive to the growth of Entrepreneurship.
                            </p>
                            
                            <h4 className="font-bold text-[#0F2347] mb-3">Other Objectives:</h4>
                            <ul className="space-y-2">
                                {[
                                    "Teaching them the way of earning income while learning",
                                    "Methodology of preparation of project report",
                                    "Various incentive schemes offered by industries department",
                                    "Helping students in identifying viable projects",
                                    "Way of getting financial assistance from banks / Financial Institutions",
                                    "Arranging platform for interacting with successful entrepreneurs",
                                    "Developing entrepreneurial culture"
                                ].map((obj, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-[#4A5568]">
                                        <span className="text-[#E8920A] font-bold">•</span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8">
                            <h4 className="font-serif text-xl font-bold text-[#0F2347] mb-4">Main Functions:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Organize interactive sessions with successful entrepreneurs for sharing success stories",
                                    "Organize entrepreneurship awareness programmes and entrepreneurship clinics",
                                    "Provide information about project preparation, steps in organizing industries",
                                    "Share incentives and schemes available, manner of obtaining bank finance",
                                    "Organize industrial visits and interaction with promotional agencies"
                                ].map((func, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="w-5 h-5 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-[#4A5568] text-sm">{func}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities of Career Guidance Cell */}
            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347]">
                        Activities of Career Guidance & <span className="text-[#E8920A]">Placement Cell</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        "Sustained training for placements and competitive examinations across six semesters",
                        "Knowledge building sessions",
                        "Training in basic communication skills",
                        "Training in group discussion and interview skills",
                        "Aptitude Test training",
                        "Excel training",
                        "Career Guidance sessions from industry experts",
                        "Skill for Education and Employability Council"
                    ].map((activity, i) => (
                        <div key={i} className="bg-[#FAFBFF] border border-[#EEF2FA] rounded-lg p-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-sm">
                                ✓
                            </span>
                            <span className="text-sm text-[#4A5568]">{activity}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certificate of Organization */}
            <section className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] py-16">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-4">
                            <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                            Official Documentation
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                            Certificate of <span className="text-[#E8920A]">Organization</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                        <div className="w-24 h-24 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl">📜</span>
                        </div>
                        <p className="text-white/80 mb-6">
                            NCVSTC is a registered statutory autonomous body with official certification from multiple government ministries. Our certificates hold legal validity and are recognized by employers across public and private sectors.
                        </p>
                        <div className="bg-white/10 rounded-xl p-8 border-2 border-dashed border-white/20">
                            <span className="text-white/50">[ Organization Certificate Image Placeholder ]</span>
                        </div>
                        <p className="text-white/50 text-sm mt-4">
                            ISO 2009-2015 · IAO · UNESCO-UNEVOC Accredited
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#FAFBFF] py-16">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-4">
                        Ready to Start Your <span className="text-[#E8920A]">Career Journey?</span>
                    </h2>
                    <p className="text-[#4A5568] max-w-2xl mx-auto mb-8">
                        Join thousands of students who have transformed their careers through NCVSTC's vocational training programs.
                    </p>
                    <Link 
                        href="/register" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-[#C47A08] hover:-translate-y-0.5"
                    >
                        Apply Now for 2026–27 →
                    </Link>
                </div>
            </section>
        </div>
    );
}
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Offered Courses | NCVSTC',
};

export default function CoursesServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Courses & <span className="text-[#13A090]">Services</span>
                    </h1>
                </div>
            </section>

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
        </div>
    );
}

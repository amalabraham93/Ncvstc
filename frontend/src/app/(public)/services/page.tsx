import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services & Operations | NCVSTC',
    description: 'Explore NCVSTC services including affiliation, accreditation, and centralized examination processes.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0F2347] relative py-16 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,123,108,0.2),transparent_70%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Operations & Services</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Delivering quality assurance, centralized examinations, and robust training frameworks for our vast network of institutions.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
                            desc: 'Our Zonal & Regional offices conduct regular workshops and pedagogy training sessions for instructors at affiliated VTCs, ensuring the teaching methodologies are modern, engaging, and highly effective.'
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

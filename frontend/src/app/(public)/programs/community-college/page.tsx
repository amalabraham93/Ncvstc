import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Community College | NCVSTC',
};

export default function CommunityCollegePage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Community <span className="text-[#E8920A]">College</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-3xl p-10 md:p-14 shadow-lg flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-[rgba(232,146,10,0.1)] rounded-2xl flex items-center justify-center mb-8 border border-[#E8920A]/20">
                        <span className="text-5xl">🏘️</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-6">Community College Initiatives</h2>
                    <p className="text-[#4A5568] text-lg max-w-3xl leading-relaxed mb-10">
                        Regulating non-formal Primary, Middle, Matriculation (10th), Senior Secondary (12th) education and vocational courses under the Self Employment Education Scheme across India.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        <div className="bg-white border border-[#DDE3F0] rounded-xl p-8 hover:shadow-md transition-shadow">
                            <span className="text-3xl mb-4 block">🎓</span>
                            <h3 className="font-bold text-[#0F2347] mb-3">Democratizing Education</h3>
                            <p className="text-sm text-[#718096]">Bringing higher education to doorsteps for marginalized and unreached communities.</p>
                        </div>
                        <div className="bg-white border border-[#DDE3F0] rounded-xl p-8 hover:shadow-md transition-shadow">
                            <span className="text-3xl mb-4 block">⚖️</span>
                            <h3 className="font-bold text-[#0F2347] mb-3">Egalitarian Access</h3>
                            <p className="text-sm text-[#718096]">Quality access irrespective of age, region, caste, gender, or strict academic pre-qualifications.</p>
                        </div>
                        <div className="bg-white border border-[#DDE3F0] rounded-xl p-8 hover:shadow-md transition-shadow">
                            <span className="text-3xl mb-4 block">🛠️</span>
                            <h3 className="font-bold text-[#0F2347] mb-3">Need-Based Learning</h3>
                            <p className="text-sm text-[#718096]">Designing academic programs tightly coupled with local vocational and industrial demands.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

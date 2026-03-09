import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Staff Development Schemes | NCVSTC',
};

export default function StaffSchemesPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="w-16 h-16 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                        <span className="text-3xl">👩‍🏫</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Staff <span className="text-[#13A090]">Development Schemes</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Box 1 */}
                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-sm">
                            <div className="text-3xl mb-4">🤝</div>
                            <h3 className="font-bold text-[#0F2347] mb-3">Professional Support</h3>
                            <p className="text-sm text-[#4A5568]">Continuous professional counseling and performance support frameworks for educators.</p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-sm">
                            <div className="text-3xl mb-4">📚</div>
                            <h3 className="font-bold text-[#0F2347] mb-3">Modern Methodology</h3>
                            <p className="text-sm text-[#4A5568]">Training in contemporary, modern methodical teaching and module-based education delivery.</p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-sm sm:col-span-2">
                            <div className="text-3xl mb-4">🎓</div>
                            <h3 className="font-bold text-[#0F2347] mb-3">Train-The-Trainer</h3>
                            <p className="text-sm text-[#4A5568]">Dedicated academies to upgrade the skill sets of vocational instructors and mentors to meet global pedagogical standards.</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Educator Training
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-6">
                            Empowering The <span className="text-[#E8920A]">Educators</span>
                        </h2>
                        <p className="text-[#4A5568] leading-relaxed text-lg mb-6">
                            We strongly believe that the quality of education is directly tied to the caliber of our teaching staff. Therefore, NCVSTC actively invests in the continuous training and improvement of teachers, professionals, and mentors navigating the vocational education framework.
                        </p>
                        <p className="text-[#4A5568] leading-relaxed text-lg">
                            By fostering a culture of continuous learning and providing the right pedagogical tools, we ensure our instructors effectively bridge the gap between theoretical knowledge and practical industry skills.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

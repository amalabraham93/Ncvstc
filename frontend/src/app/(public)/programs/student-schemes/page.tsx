import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Development Schemes | NCVSTC',
};

export default function StudentSchemesPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="w-16 h-16 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                        <span className="text-3xl">👨‍🎓</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Student <span className="text-[#13A090]">Development Schemes</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-6">Empowering the Next Generation</h2>
                        <p className="text-[#4A5568] leading-relaxed mb-6 text-lg">
                            NCVSTC is committed to providing inclusive and flexible educational frameworks that democratize learning. Our student development schemes are designed to support individuals regardless of age, region, or formal qualifications.
                        </p>

                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-2xl p-6 md:p-8">
                            <h3 className="font-bold text-[#0F2347] mb-6 text-xl">Key Scheme Highlights:</h3>
                            <ul className="space-y-4 text-[#4A5568]">
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5 shadow-sm">✓</span>
                                    <span><strong>Individualized Study Flexibility:</strong> Learn at your own pace and time.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5 shadow-sm">✓</span>
                                    <span><strong>Student Support Network:</strong> Robust mentoring and counseling framework.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5 shadow-sm">✓</span>
                                    <span><strong>Cost-Effective Programs:</strong> Highly accessible programs focusing on self-employment.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5 shadow-sm">✓</span>
                                    <span><strong>Unrestricted Access:</strong> Opportunities irrespective of previous formal academic qualifications.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: '🎯', title: 'Education & Character', sub: 'Holistic Development' },
                            { icon: '🌍', title: 'Doorstep Learning', sub: 'Accessible Training' },
                            { icon: '📅', title: 'Flexible Timing', sub: 'Learn Anytime' },
                            { icon: '💼', title: 'Self-Employment Focus', sub: 'Industry Aligned' },
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-[#DDE3F0] rounded-xl p-6 text-center hover:shadow-xl transition-all group">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{card.icon}</div>
                                <h4 className="font-bold text-[#0F2347] mb-2">{card.title}</h4>
                                <p className="text-xs text-[#718096]">{card.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

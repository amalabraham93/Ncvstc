import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vision & Mission | NCVSTC',
    description: 'The Vision and Mission of NCVSTC.',
};

export default function VisionMissionPage() {
    return (
        <div className="bg-white">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Vision & <span className="text-[#13A090]">Mission</span>
                    </h1>
                </div>
            </section>

            <section className="bg-[#FAFBFF] py-16 md:py-20 min-h-screen">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
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
                                        <span className="text-md text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
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
                                        <span className="text-md text-[#4A5568]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

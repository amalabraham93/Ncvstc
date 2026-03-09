import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Career & Placement | NCVSTC',
};

export default function CareerPlacementPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Career & <span className="text-[#13A090]">Placement</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Career Guidance
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-6">
                            Career & Placement Cell
                        </h2>
                        <p className="text-[#4A5568] mb-6 leading-relaxed">
                            The Career & Placement Cell organizes qualitative training sessions as per industry requirements to equip students with the necessary skillset. Sessions focus on soft skills, Corporate Grooming, Etiquettes, and career guidance tailored to bridge the classroom-corporate gap.
                        </p>
                        <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-[#0F2347] mb-4">Objectives:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Develop recruitment strategies attracting professional institutions",
                                    "Counsel students and provide employment-readiness services",
                                    "Cultivate interest and professionalism in students"
                                ].map((obj, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-[#4A5568]">
                                        <span className="text-[#0F7B6C] font-bold">•</span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#0F2347] rounded-2xl p-8 text-white shadow-lg">
                        <h3 className="font-serif text-2xl font-bold mb-6 text-[#E8920A]">Assistance Offered</h3>
                        <ul className="space-y-5">
                            {[
                                "Students receive targeted Career Guidance and Placement Preparation",
                                "Students are assigned interviews with prospective employers based on skill levels",
                                "The Cell liaises with hiring organizations until active placement succeeds",
                                "Negotiates for best terms and conditions on behalf of prospective employees"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="w-8 h-8 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-md font-bold shrink-0">
                                        {i + 1}
                                    </span>
                                    <span className="text-white/80 text-md leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Entrepreneurship Development Cell */}
                <div className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-3xl p-8 lg:p-12 mb-16 shadow-lg">
                    <div className="w-16 h-16 bg-[#FEF5E6] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <span className="text-3xl">💡</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-serif text-3xl font-bold text-[#0F2347] mb-4">Entrepreneurship Development Cell</h3>
                            <p className="text-[#4A5568] leading-relaxed mb-6">
                                Entrepreneurship Development Clubs sensitize the student community about the importance of industrialization, developing an entrepreneurial culture involving conducive values, norms, and traits.
                            </p>
                            <h4 className="font-bold text-[#0F2347] mb-3">Key Objectives:</h4>
                            <ul className="space-y-2">
                                {[
                                    "Teaching income generation while learning",
                                    "Preparation methodology for project reports",
                                    "Identifying viable projects & obtaining bank financing",
                                    "Deploying interaction platforms with successful entrepreneurs"
                                ].map((obj, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-[#4A5568]">
                                        <span className="text-[#E8920A] font-bold">•</span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-8 shadow-sm">
                            <h4 className="font-serif text-xl font-bold text-[#0F2347] mb-6">Main Functions:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Organize interactive sessions to share success stories",
                                    "Host entrepreneurship awareness programmes & clinics",
                                    "Provide information regarding bank financing and incentives",
                                    "Organize industrial visits and promotional agency interactions"
                                ].map((func, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="w-6 h-6 bg-[#0F7B6C] rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-[#4A5568] text-sm leading-relaxed">{func}</span>
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

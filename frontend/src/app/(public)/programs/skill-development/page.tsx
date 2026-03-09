import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skill Development | NCVSTC',
};

export default function SkillDevelopmentPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-br from-[#E8920A] to-[#C47A08] py-20 px-4">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Skill <span className="text-[#0F2347]">Development</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-[#0F2347] rounded-3xl p-10 md:p-14 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>

                    <div className="w-24 h-24 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center mb-8 relative z-10 border border-white/20">
                        <span className="text-5xl">⚙️</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Skill Development Initiatives</h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-4xl leading-relaxed mb-12 relative z-10">
                        A comprehensive, flexible, and responsive Vocational Training System designed to massively increase access to formal and non-formal vocational training programs across the country.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-4 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center border border-white/20">
                            <div className="text-5xl font-bold text-white mb-2">50+</div>
                            <div className="text-sm text-[#E8920A] font-bold uppercase tracking-widest">Active Courses</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center border border-white/20">
                            <div className="text-5xl font-bold text-white mb-2">25+</div>
                            <div className="text-sm text-[#E8920A] font-bold uppercase tracking-widest">States Covered</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

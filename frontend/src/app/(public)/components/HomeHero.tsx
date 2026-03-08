// 'use client';

// import Link from 'next/link';

// export default function HomeHero() {
//     return (
//         <section className="relative overflow-hidden min-h-[max(500px,70vh)] flex items-center bg-[#0F2347]">
//             {/* Background Layers */}
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_40%,rgba(15,123,108,0.18)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(27,58,107,0.5)_0%,transparent_50%),linear-gradient(150deg,#0A1828_0%,#102040_40%,#0C2A50_100%)]"></div>
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

//             {/* Abstract Blob */}
//             <div className="absolute -right-[5%] top-1/2 -translate-y-1/2 w-[clamp(280px,45vw,520px)] h-[clamp(280px,45vw,520px)] bg-[radial-gradient(circle,rgba(15,123,108,0.12)_0%,transparent_70%)] rounded-full border border-[rgba(15,123,108,0.12)]">
//                 <div className="absolute inset-[30px] rounded-full border border-[rgba(15,123,108,0.08)]"></div>
//                 <div className="absolute inset-[60px] rounded-full border border-[rgba(15,123,108,0.06)]"></div>
//             </div>

//             <div className="relative z-10 w-full py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-14 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">

//                     <div className="max-w-xxl">
//                         <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
//                             <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
//                             Govt. Recognized · ISO Certified
//                         </div>

//                         <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-5">
//                             Empowering India Through <br className="hidden md:block" />
//                             <span className="text-[#13A090]">Vocational</span> &amp; <span className="text-[#E8920A]">Skill</span> <br className="hidden md:block" />
//                             Excellence
//                         </h1>

//                         <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
//                             A Statutory Autonomous Body under the Ministry of Corporate Affairs, Government of India — providing certified vocational education and skill training across Asia since its establishment.
//                         </p>

//                         <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
//                             <div>
//                                 <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">50+</div>
//                                 <div className="text-xs font-semibold tracking-wider uppercase text-white/40">Courses</div>
//                             </div>
//                             <div>
//                                 <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">25+</div>
//                                 <div className="text-xs font-semibold tracking-wider uppercase text-white/40">State Offices</div>
//                             </div>
//                             <div>
//                                 <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">10K+</div>
//                                 <div className="text-xs font-semibold tracking-wider uppercase text-white/40">Trained</div>
//                             </div>
//                         </div>

//                         <div className="flex flex-wrap gap-4">
//                             <Link href="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-[#C47A08] hover:-translate-y-0.5 w-full sm:w-auto">
//                                 Apply for 2026–27 →
//                             </Link>
//                             <Link href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-white/20 hover:border-white/50 w-full sm:w-auto">
//                                 Learn More
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="hidden lg:flex flex-col gap-4 w-[240px] shrink-0">
//                         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
//                             <div className="text-2xl mb-2">🎓</div>
//                             <div className="font-serif font-bold text-white mb-1">Admissions Open</div>
//                             <div className="text-xs text-white/50">2026–27 Academic Year</div>
//                         </div>
//                         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
//                             <div className="text-2xl mb-2">📋</div>
//                             <div className="font-serif font-bold text-white mb-1">Exam Schedule</div>
//                             <div className="text-xs text-white/50">March / April Session</div>
//                         </div>
//                         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
//                             <div className="text-2xl mb-2">✅</div>
//                             <div className="font-serif font-bold text-white mb-1">Verify Certificate</div>
//                             <div className="text-xs text-white/50">Online in seconds</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }



'use client';

import Link from 'next/link';

export default function HomeHero() {
    return (
        <section className="relative overflow-hidden min-h-[max(500px,70vh)] flex items-center bg-[#0F2347]">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_40%,rgba(15,123,108,0.18)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(27,58,107,0.5)_0%,transparent_50%),linear-gradient(150deg,#0A1828_0%,#102040_40%,#0C2A50_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Abstract Blob */}
            <div className="absolute -right-[5%] top-1/2 -translate-y-1/2 w-[clamp(280px,45vw,520px)] h-[clamp(280px,45vw,520px)] bg-[radial-gradient(circle,rgba(15,123,108,0.12)_0%,transparent_70%)] rounded-full border border-[rgba(15,123,108,0.12)]">
                <div className="absolute inset-[30px] rounded-full border border-[rgba(15,123,108,0.08)]"></div>
                <div className="absolute inset-[60px] rounded-full border border-[rgba(15,123,108,0.06)]"></div>
            </div>

            <div className="relative z-10 w-full py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-14 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">

                    <div className="max-w-xxl">
                        <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                            <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                            Statutory Autonomous Body · Govt. Recognized
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-5">
                            Welcome to <br className="hidden md:block" />
                            <span className="text-[#13A090]">Navigating Career</span> for <br className="hidden md:block" />
                            <span className="text-[#E8920A]">Vocational Skill Technology Council</span>
                        </h1>

                        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                            N.C.V.S.T.C Vocational Educational Council is a statutory autonomous body, NON Governmental Organization, Registered under the Government of Tamilnadu, Planning Commission, Government of India and Ministry of Human Resource Development, Government of India. Established under article.29 & 30(1) Constitution of India and Incorporated Under the legislation of Ministry of Corporate Affairs, Government of India. Conducts courses in Non-Formal mode through Online, Open and Distance Learning.
                        </p>

                        <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
                            <div>
                                <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">100+</div>
                                <div className="text-xs font-semibold tracking-wider uppercase text-white/40">Courses</div>
                            </div>
                            <div>
                                <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">500+</div>
                                <div className="text-xs font-semibold tracking-wider uppercase text-white/40">Study Centers</div>
                            </div>
                            <div>
                                <div className="font-serif text-3xl md:text-4xl font-bold text-[#E8920A] leading-none mb-1">50K+</div>
                                <div className="text-xs font-semibold tracking-wider uppercase text-white/40">Students Trained</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8920A] text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-[#C47A08] hover:-translate-y-0.5 w-full sm:w-auto">
                                Apply for 2026–27 →
                            </Link>
                            <Link href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-white/20 hover:border-white/50 w-full sm:w-auto">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                            <div className="text-2xl mb-2">🎓</div>
                            <div className="font-serif font-bold text-white mb-1">Programs Offered</div>
                            <div className="text-xs text-white/50">Certificate · Diploma · Degree · PG</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                            <div className="text-2xl mb-2">🏛️</div>
                            <div className="font-serif font-bold text-white mb-1">Delivery Modes</div>
                            <div className="text-xs text-white/50">Online · Open · Distance Learning</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                            <div className="text-2xl mb-2">✅</div>
                            <div className="font-serif font-bold text-white mb-1">Training Partners</div>
                            <div className="text-xs text-white/50">VTP · CC · ITI · STI · STP · BTP</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
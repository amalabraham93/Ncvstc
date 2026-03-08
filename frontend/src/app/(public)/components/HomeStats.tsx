'use client';

export default function HomeStats() {
    const stats = [
        { num: "25+", label: "State Programme Offices" },
        { num: "100+", label: "Study Centres Across Asia" },
        { num: "50+", label: "Vocational Courses" },
        { num: "15+", label: "Years of Excellence" }
    ];

    return (
        <div className="bg-gradient-to-br from-[#0F2347] via-[#1B3A6B] to-[#1E4D8C] py-10 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_80px)]"></div>

            <div className="max-w-[1280px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`text-center p-4 md:p-7 relative
                ${i % 2 === 0 ? 'border-r border-white/10 lg:border-r-0' : ''} 
                ${i !== 3 ? 'lg:border-r lg:border-white/10' : ''}
                ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}
              `}
                        >
                            {/* Teal accent line on the left side of desktop columns > 0 */}
                            {i > 0 && (
                                <div className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-10 bg-[#0F7B6C] rounded-r-sm"></div>
                            )}

                            <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8920A] leading-none mb-1.5">
                                {stat.num}
                            </div>
                            <div className="text-xs font-semibold tracking-wider uppercase text-white/50">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

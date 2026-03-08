'use client';

export default function HomeOrgChart() {
    return (
        <section className="py-20 bg-[#F4F7FC]">
            <div className="max-w-[1280px] mx-auto px-4">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0F7B6C] mb-3">
                        <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
                        Governance Structure
                        <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
                    </div>
                    <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#0F2347] mb-4 leading-tight">
                        Institutional <span className="font-normal text-[#13A090]">Framework</span>
                    </h2>
                    <p className="text-[#4A5568] leading-relaxed">
                        Our organizational network ensures standardized operations and academic delivery across the subcontinent.
                    </p>
                </div>

                {/* Tree Structure */}
                <div className="flex flex-col items-center">

                    {/* Top Level */}
                    <div className="relative group perspective">
                        <div className="bg-gradient-to-br from-[#0F2347] to-[#1E4D8C] text-center px-8 py-5 rounded-lg border border-white/20 shadow-lg relative z-10 transition-transform duration-500 hover:scale-105 min-w-[280px]">
                            <div className="text-[#13A090] text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-1">
                                Apex Body
                            </div>
                            <div className="font-serif text-white font-bold text-xl tracking-wide">
                                N C V S T C
                            </div>
                            <div className="text-white/60 text-[0.65rem] tracking-wider uppercase mt-1">
                                National Office
                            </div>
                        </div>
                    </div>

                    {/* Line Down */}
                    <div className="w-0.5 h-10 bg-gradient-to-b from-[#1B3A6B] to-[#0F7B6C]"></div>

                    {/* Primary Split Horizon */}
                    <div className="w-[85%] md:w-[60%] h-0.5 bg-[#0F7B6C] relative">
                        <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#13A090] -translate-x-1/2 -translate-y-[5px]"></div>
                        <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-[#E8920A] -translate-x-1/2 -translate-y-[5px] shadow-[0_0_10px_rgba(232,146,10,0.5)]"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#13A090] translate-x-1/2 -translate-y-[5px]"></div>
                    </div>

                    {/* Level 2 Nodes (SPO / ZRO / DRO) */}
                    <div className="flex w-[85%] md:w-[60%] justify-between mt-0">
                        {/* Child 1 Drop */}
                        <div className="flex flex-col items-center min-w-0 px-2 lg:px-4 flex-1">
                            <div className="w-0.5 h-8 bg-[#0F7B6C] opacity-50"></div>
                            <div className="bg-white border text-center border-[#DDE3F0] px-4 py-4 rounded-lg shadow-sm w-full transition-all hover:border-[#13A090] hover:-translate-y-1">
                                <div className="text-[#E8920A] text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                    S P O
                                </div>
                                <div className="font-sans text-[#0F2347] font-bold text-sm tracking-wide leading-tight line-clamp-2">
                                    State Programme <br className="hidden sm:block" /> Office
                                </div>
                            </div>
                        </div>

                        {/* Child 2 Drop */}
                        <div className="flex flex-col items-center min-w-0 px-2 lg:px-4 flex-1">
                            <div className="w-0.5 h-8 bg-[#0F7B6C] opacity-50"></div>
                            <div className="bg-white border text-center border-[#DDE3F0] px-4 py-4 rounded-lg shadow-sm w-full transition-all hover:border-[#13A090] hover:-translate-y-1">
                                <div className="text-[#E8920A] text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                    Z R O
                                </div>
                                <div className="font-sans text-[#0F2347] font-bold text-sm tracking-wide leading-tight line-clamp-2">
                                    Zonal Regional <br className="hidden sm:block" /> Office
                                </div>
                            </div>
                        </div>

                        {/* Child 3 Drop */}
                        <div className="flex flex-col items-center min-w-0 px-2 lg:px-4 flex-1">
                            <div className="w-0.5 h-8 bg-[#0F7B6C] opacity-50"></div>
                            <div className="bg-white border text-center border-[#DDE3F0] px-4 py-4 rounded-lg shadow-sm w-full transition-all hover:border-[#13A090] hover:-translate-y-1">
                                <div className="text-[#E8920A] text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                    D R O
                                </div>
                                <div className="font-sans text-[#0F2347] font-bold text-sm tracking-wide leading-tight line-clamp-2">
                                    District Regional <br className="hidden sm:block" /> Office
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Path Down to Affiliation */}
                    <div className="w-0.5 h-10 bg-gradient-to-b from-[#DDE3F0] to-[#E8920A] mt-6"></div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#E8920A] blur-lg opacity-20 rounded-full animate-pulse"></div>
                        <div className="bg-white border border-[#E8920A]/30 text-center px-8 py-5 rounded-lg shadow-md relative z-10 transition-transform hover:-translate-y-1 min-w-[280px]">
                            <div className="text-[#13A090] text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-1">
                                Grassroots Delivery
                            </div>
                            <div className="font-sans text-[#1B3A6B] font-bold text-md tracking-wide">
                                VTCC / VTC
                            </div>
                            <div className="text-[#718096] text-[0.65rem] tracking-wider uppercase mt-1">
                                Vocational Training Centers
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

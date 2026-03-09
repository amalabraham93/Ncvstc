import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Organization Chart | NCVSTC',
};

export default function OrganizationChartPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(27,58,107,0.5)_0%,transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Organization <span className="text-[#13A090]">Chart</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8 min-h-[60vh]">
                <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 md:p-12 shadow-lg overflow-x-auto">
                    <div className="min-w-[900px] flex flex-col items-center">

                        {/* Level 1: Board of Council */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#1B3A6B] text-white font-bold py-3 px-8 rounded-md shadow-md text-center w-64 border-b-4 border-[#0F7B6C]">
                                Board of Council
                            </div>
                            <div className="w-0.5 h-8 bg-gray-400"></div>
                        </div>

                        {/* Level 2 Wrapper */}
                        <div className="relative w-full flex justify-center">
                            {/* Horizontal connecting line for Level 2 */}
                            <div className="absolute top-0 w-[600px] h-0.5 bg-gray-400"></div>

                            <div className="w-[600px] flex justify-between pt-8 relative">
                                {/* Left branches */}
                                <div className="flex flex-col items-center relative">
                                    <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                    <div className="bg-[#2A75C3] text-white font-medium py-2 px-6 rounded shadow-sm text-center w-48 mb-6">
                                        Advisory Council
                                    </div>
                                    <div className="bg-[#2A75C3] text-white font-medium py-2 px-6 rounded shadow-sm text-center w-48">
                                        Executive Council
                                    </div>
                                </div>

                                {/* Center branch */}
                                <div className="flex flex-col items-center relative -mt-8">
                                    <div className="w-0.5 h-8 bg-gray-400"></div>
                                    <div className="bg-[#1B3A6B] text-white font-bold py-3 px-8 rounded-md shadow-md text-center w-64 border-b-4 border-[#E8920A]">
                                        Director General
                                    </div>
                                    <div className="w-0.5 h-12 bg-gray-400"></div>
                                </div>

                                {/* Right branches */}
                                <div className="flex flex-col items-center relative">
                                    <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                    <div className="bg-[#2A75C3] text-white font-medium py-2 px-6 rounded shadow-sm text-center w-48 mb-6">
                                        Academic Council
                                    </div>
                                    <div className="bg-[#2A75C3] text-white font-medium py-2 px-6 rounded shadow-sm text-center w-48">
                                        Exam Council
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Level 3 Wrapper (Under Director General) */}
                        <div className="relative w-full flex justify-center mt-0">
                            {/* Horizontal connecting line for Level 3 */}
                            <div className="absolute top-0 w-[450px] h-0.5 bg-gray-400"></div>

                            <div className="w-[450px] flex justify-between pt-8 relative">

                                {/* Left Sub-Branch: Zonal officer */}
                                <div className="flex flex-col items-center relative">
                                    <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                    <div className="bg-[#1B3A6B] text-white font-bold py-2.5 px-6 rounded-md shadow-sm text-center w-56 mb-8 border-b-2 border-[#13A090]">
                                        Zonal officer
                                    </div>

                                    <div className="relative w-full flex justify-center">
                                        <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                        <div className="absolute top-0 w-[240px] h-0.5 bg-gray-400"></div>

                                        <div className="w-[240px] flex justify-between pt-8 relative">
                                            <div className="flex flex-col items-center w-28">
                                                <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full mb-6 min-h-[52px] flex items-center justify-center">
                                                    Centre<br />Co-ordinator
                                                </div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full min-h-[52px] flex items-center justify-center">
                                                    Students<br />Skill Development
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center w-28">
                                                <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full mb-6 min-h-[52px] flex items-center justify-center">
                                                    Accreditation<br />Process
                                                </div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full min-h-[52px] flex items-center justify-center">
                                                    MOU<br />Signing VTC
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Sub-Branch: Academic Director */}
                                <div className="flex flex-col items-center relative">
                                    <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                    <div className="bg-[#1B3A6B] text-white font-bold py-2.5 px-6 rounded-md shadow-sm text-center w-56 mb-8 border-b-2 border-[#13A090]">
                                        Academic Director
                                    </div>

                                    <div className="relative w-full flex justify-center">
                                        <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                        <div className="absolute top-0 w-[240px] h-0.5 bg-gray-400"></div>

                                        <div className="w-[240px] flex justify-between pt-8 relative">
                                            <div className="flex flex-col items-center w-28">
                                                <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full mb-6 min-h-[52px] flex items-center justify-center">
                                                    Assessment
                                                </div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full min-h-[52px] flex items-center justify-center">
                                                    Certification
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center w-28">
                                                <div className="absolute -top-8 w-0.5 h-8 bg-gray-400"></div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full mb-6 min-h-[52px] flex items-center justify-center">
                                                    Smart Skill Jobs<br />Initiative
                                                </div>
                                                <div className="bg-[#2A75C3] text-white text-sm py-2 px-2 rounded shadow text-center w-full min-h-[52px] flex items-center justify-center">
                                                    Placement
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

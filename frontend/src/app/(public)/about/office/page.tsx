import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Offices | NCVSTC',
};

export default function OfficesPage() {
    return (
        <div className="bg-white">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Our <span className="text-[#13A090]">Offices</span>
                    </h1>
                </div>
            </section>

            <section className="bg-[#FAFBFF] py-16 md:py-24 min-h-screen">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-[#718096] max-w-2xl mx-auto text-lg">
                            NCVSTC operates through a deeply structured administrative layout to ensure seamless operations, regulatory compliance, and localized assistance across states and districts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* SPO */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-10 hover:shadow-xl transition-all shadow-md group">
                            <div className="w-20 h-20 bg-[#0F2347] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <span className="text-4xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] text-center mb-3">State Programme Office</h3>
                            <p className="text-[#E8920A] font-bold text-center mb-6 uppercase tracking-widest text-sm">(SPO)</p>
                            <p className="text-[#4A5568] text-center leading-relaxed">
                                Serving as the central node for state-level operations, policy implementation, and high-level training coordination.
                            </p>
                            <div className="mt-8 p-4 bg-[#F5F7FA] rounded-xl border border-[#DDE3F0] text-center text-sm text-[#718096]">
                                [ SPO Location Map/Image Placeholder ]
                            </div>
                        </div>

                        {/* DRO */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-10 hover:shadow-xl transition-all shadow-md group">
                            <div className="w-20 h-20 bg-[#0F7B6C] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <span className="text-4xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] text-center mb-3">District Regional Office</h3>
                            <p className="text-[#E8920A] font-bold text-center mb-6 uppercase tracking-widest text-sm">(DRO)</p>
                            <p className="text-[#4A5568] text-center leading-relaxed">
                                Operating at the district level to oversee local institutional compliance, student queries, and examination supervision.
                            </p>
                            <div className="mt-8 p-4 bg-[#F5F7FA] rounded-xl border border-[#DDE3F0] text-center text-sm text-[#718096]">
                                [ DRO Location Map/Image Placeholder ]
                            </div>
                        </div>

                        {/* Zonal */}
                        <div className="bg-white border border-[#DDE3F0] rounded-2xl p-10 hover:shadow-xl transition-all shadow-md group">
                            <div className="w-20 h-20 bg-[#E8920A] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                                <span className="text-4xl text-white">🏛️</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-[#0F2347] text-center mb-3">Zonal Offices</h3>
                            <p className="text-[#0F7B6C] font-bold text-center mb-6 uppercase tracking-widest text-sm">Regional Level</p>
                            <p className="text-[#4A5568] text-center leading-relaxed">
                                Distributing the administrative load and providing closer access points for vocational training centers across broad geographic zones.
                            </p>
                            <div className="mt-8 p-4 bg-[#F5F7FA] rounded-xl border border-[#DDE3F0] text-center text-sm text-[#718096]">
                                [ Zonal Offices Map/Image Placeholder ]
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

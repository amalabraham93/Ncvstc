import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Certificate of Organization | NCVSTC',
};

export default function CertificateOfOrganizationPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] py-24 px-4">
                <div className="max-w-[1280px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#E8920A] rounded-full animate-pulse"></span>
                        Official Documentation
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                        Certificate of <span className="text-[#E8920A]">Organization</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8 min-h-[50vh]">
                <div className="max-w-4xl mx-auto bg-white border border-[#DDE3F0] rounded-3xl p-10 md:p-14 text-center shadow-2xl">
                    <div className="w-28 h-28 bg-[#FEF5E6] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-[#E8920A]/30">
                        <span className="text-5xl">📜</span>
                    </div>
                    <p className="text-[#0F2347] text-lg md:text-xl font-medium mb-10 leading-relaxed">
                        NCVSTC is a registered statutory autonomous body with official certification from multiple government ministries. Our certificates hold unyielding legal validity and are widely recognized by employers across public and private sectors in India.
                    </p>

                    <div className="bg-[#FAFBFF] rounded-2xl p-12 border-2 border-dashed border-[#0F7B6C] mb-8">
                        <span className="text-[#0F7B6C] font-semibold text-xl tracking-wide uppercase">[ Organization Certificate Image Placeholder ]</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {['ISO 2009-2015', 'IAO Accredited', 'UNESCO-UNEVOC', 'Ministry of MSME'].map((badge, i) => (
                            <span key={i} className="px-5 py-2.5 bg-[#0F2347] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

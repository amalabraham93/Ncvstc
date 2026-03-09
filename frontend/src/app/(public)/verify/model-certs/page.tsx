import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Model Certificates | NCVSTC',
};

export default function ModelCertificatesPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] py-20 px-4 text-center">
                <div className="max-w-[1280px] mx-auto">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Model <span className="text-[#E8920A]">Certificates</span>
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg pt-2">
                        Visual references for original credentials issued under the NCVSTC Vocational Education framework.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Degree / Diploma Certificate', desc: 'Main credential awarded upon successful program completion.' },
                        { title: 'Detailed Marks Certificate', desc: 'Subject-wise academic performance and grading.' },
                        { title: 'Provisional Certificate', desc: 'Temporary credential valid until official dispatch.' },
                        { title: 'Migration Certificate', desc: 'Transfer document for higher education mobility.' }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-[#DDE3F0] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Sample Certificate Placeholder */}
                                <div className="absolute inset-4 rounded-md border border-[#DDE3F0] bg-white flex flex-col items-center justify-center p-4">
                                    <div className="w-12 h-12 rounded-full border border-gray-300 mb-4 opacity-50 flex items-center justify-center">
                                        <span className="text-xs font-serif italic">Logo</span>
                                    </div>
                                    <div className="w-full space-y-3 opacity-30">
                                        <div className="h-3 w-3/4 bg-gray-300 rounded mx-auto"></div>
                                        <div className="h-2 w-1/2 bg-gray-300 rounded mx-auto"></div>
                                        <div className="h-2 w-full bg-gray-300 rounded mx-auto mt-6"></div>
                                        <div className="h-2 w-full bg-gray-300 rounded mx-auto"></div>
                                        <div className="h-2 w-5/6 bg-gray-300 rounded mx-auto"></div>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0F7B6C]/10 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-[#E8920A]/10 rounded-full"></div>

                                {/* Watermark */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                                    <span className="font-serif text-5xl font-bold text-[#0F2347] rotate-[-45deg]">NCVSTC</span>
                                </div>
                            </div>

                            <div className="p-6 text-center border-t border-[#DDE3F0] flex-1 flex flex-col justify-center">
                                <h3 className="font-bold text-[#0F2347] mb-2">{item.title}</h3>
                                <p className="text-xs text-[#718096]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-blue-50 border border-blue-100 p-6 rounded-xl">
                    <p className="text-sm text-[#4A5568]">
                        <strong className="text-navy-dark">Disclaimer:</strong> Actual certificates may vary slightly in design due to security updates and anti-counterfeit measures. These are representative samples for general visual reference only.
                    </p>
                </div>
            </section>
        </div>
    );
}

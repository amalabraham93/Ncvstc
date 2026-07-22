import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Director Message | NCVSTC',
};

export default function DirectorMessagePage() {
    return (
        <div className="bg-white">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Director's <span className="text-[#13A090]">Message</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-3xl p-8 md:p-14 shadow-lg relative overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[rgba(232,146,10,0.05)] rounded-full"></div>
                    <div className="absolute left-10 top-10 w-32 h-32 bg-[rgba(15,123,108,0.05)] rounded-full"></div>

                    <div className="relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                            <div className="lg:col-span-1">
                                <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 shadow-md text-center">
                                    <div className="w-48 h-48 bg-[#EEF2FA] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-inner">
                                        <span className="text-6xl">👤</span>
                                    </div>
                                    <h4 className="font-serif text-2xl font-bold text-[#0F2347]">Director</h4>
                                    <p className="text-[#0F7B6C] font-semibold text-sm uppercase tracking-wider mt-2">NCVSTC</p>
                                    <p className="text-[#718096] text-xs mt-1">Vocational Education Council</p>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <h3 className="font-serif text-3xl font-bold text-[#0F2347] mb-8 leading-relaxed">
                                    "It gives me great pleasure to welcome you to Navigating Career for Vocational Skill Technology Council."
                                </h3>
                                <div className="space-y-6 text-[#4A5568] text-lg leading-relaxed">
                                    <p>
                                        Welcome to NCVSTC – Navigating Career for Vocational Skill Technology Council.
                                    </p>
                                    <p>
                                        India has immense human potential, and skill development plays a vital role in transforming this strength into national progress. NCVSTC is committed to empowering youth through industry-relevant vocational education, certified training programmes, and professional skill development initiatives aligned with current market needs.
                                    </p>
                                    <p>
                                        Our mission is to help students discover their talents, enhance employability, and build successful careers through quality education and practical training. By coordinating with vocational training centres across the country, NCVSTC ensures standardized training, quality assessment, and nationally aligned skill programmes.
                                    </p>
                                    <p>
                                        We encourage students to participate actively in our courses and development initiatives to build confidence, knowledge, and career opportunities. NCVSTC remains dedicated to creating a skilled, self-reliant, and future-ready workforce for the nation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

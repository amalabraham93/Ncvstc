import { Metadata } from 'next';
import Link from 'next/link';
import VerifyClientForm from './VerifyClientForm';

export const metadata: Metadata = {
    title: 'Certificate Verification | NCVSTC',
    description: 'Online student and certificate verification portal for NCVSTC.',
};

export default function VerifyPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] relative py-16 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,146,10,0.15),transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Certificate Verification</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        A secure portal for employers and authorities to verify student credentials instantly.
                    </p>
                </div>
            </section>

            {/* Verification Portal Area */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">

                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(27,58,107,0.1)] border border-[#EEF2FA]">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-[#E6F5F3] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-[#0F7B6C]">
                                ✓
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347] mb-3">
                                Verify Credentials
                            </h2>
                            <p className="text-[#4A5568] text-sm max-w-md mx-auto">
                                Enter the Enrollment Number or Registration Number exactly as it appears on the official NCVSTC certificate.
                            </p>
                        </div>

                        <VerifyClientForm />

                        {/* Help / Guidelines */}
                        <div className="mt-10 pt-8 border-t border-[#EEF2FA]">
                            <h4 className="text-sm font-bold text-[#1B3A6B] mb-4">Verification Guidelines:</h4>
                            <ul className="space-y-3 text-xs text-[#718096]">
                                <li className="flex gap-2 items-start">
                                    <span className="text-[#E8920A] mt-0.5">◆</span>
                                    <span>Results for academic years prior to 2010 might naturally take up to 48 hours for manual physical verification.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-[#E8920A] mt-0.5">◆</span>
                                    <span>If a record is marked <strong>"Provisional"</strong>, it means the physical dispatch of the final certificate is pending.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-[#E8920A] mt-0.5">◆</span>
                                    <span>For bulk verification (employers/agencies), please send an official request to <a href="mailto:verification@ncvrtindia.org" className="text-[#0F7B6C] hover:underline">verification@ncvrtindia.org</a>.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Model Certificates Section */}
            <section className="py-16 md:py-24 bg-white border-t border-[#EEF2FA]">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Specimen
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-4">Model Certificates</h2>
                        <p className="text-[#4A5568] max-w-2xl mx-auto">
                            Visual references for original certificates issued by the NCVSTC Vocational Education Council.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-3 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(27,58,107,0.1)] transition-all group">
                                <div className="aspect-[3/4] bg-gray-100 rounded-lg relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                                        <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="font-mono text-xs font-medium">Model {item}</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

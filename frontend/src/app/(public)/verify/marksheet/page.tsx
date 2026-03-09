import { Metadata } from 'next';
import VerifyClientForm from '../VerifyClientForm';

export const metadata: Metadata = {
    title: 'Marksheet Verification | NCVSTC',
};

export default function MarksheetVerificationPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,146,10,0.15),transparent_50%)]"></div>

                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                        Academic Records
                    </div>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                        Marksheet <span className="text-[#13A090]">Verification</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Verify detailed mark certificates and academic performance records securely online.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(27,58,107,0.1)] border border-[#EEF2FA]">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-[#EEF4FF] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-[#1B3A6B]">
                                📊
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347] mb-3">
                                Verify Academic Marksheets
                            </h2>
                            <p className="text-[#4A5568] text-sm max-w-md mx-auto">
                                Enter the student's Registration Number to fetch and verify detailed subject-wise marks.
                            </p>
                        </div>

                        <VerifyClientForm />

                        <div className="mt-10 pt-8 border-t border-[#EEF2FA]">
                            <h4 className="text-sm font-bold text-[#1B3A6B] mb-4">Verification Notice:</h4>
                            <p className="text-xs text-[#718096] mb-3 leading-relaxed">
                                Results for academic years prior to 2010 might naturally take up to 48 hours for manual physical verification if not instantly available on this portal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

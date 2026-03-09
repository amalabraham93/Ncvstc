import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Offline Document Verification | NCVSTC',
};

export default function DocumentVerificationPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,146,10,0.15),transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                        Physical Document <span className="text-[#13A090]">Verification</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-2xl p-8 lg:p-10 text-white shadow-xl">
                        <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#E8920A]">📋</span> Verification Procedure
                        </h3>

                        <p className="text-white/80 text-sm mb-6 leading-relaxed">
                            Anyone can apply for verification of original / photocopy of documents like Detail Marks Certificate, Degrees, Diplomas, etc. issued by the board through post.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 font-bold border border-[#E8920A]/30">1</span>
                                <div>
                                    <p className="font-semibold mb-1">Demand Draft (Fee)</p>
                                    <p className="text-sm text-white/70">Send a Demand Draft of Rs. 1000/- (non-refundable) for each document drawn in favour of: "Navigating Career For Vocational Skill Technology Council" payable at Pappireddipatti.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 font-bold border border-[#E8920A]/30">2</span>
                                <div>
                                    <p className="font-semibold mb-1">Postal Charges</p>
                                    <p className="text-sm text-white/70">Add Rs. 100/- postal charges extra in India and Rs. 2000/- for outside India.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-8 h-8 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 font-bold border border-[#E8920A]/30">3</span>
                                <div>
                                    <p className="font-semibold mb-1">Govt. / Embassy Exceptions</p>
                                    <p className="text-sm text-white/70">No verification charges for Central/State Govt. Departments and Embassies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[rgba(232,146,10,0.15)] border border-l-4 border-[#E8920A] rounded-lg">
                            <p className="text-xs font-bold text-[#E8920A] mb-1 uppercase tracking-wider">⚠️ Important Note:</p>
                            <p className="text-sm text-white/90 leading-relaxed">VERIFICATION BY TELEPHONE / FAX / EMAIL WILL NOT BE ENTERTAINED. All documents must be sent by Regd. Post / Speed Post only. Normal period required for verification is 15 days.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white border border-[#DDE3F0] rounded-xl p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#EEF2FA]">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center text-2xl text-[#1B3A6B]">📮</div>
                                <h3 className="font-bold text-[#0F2347] text-xl">Address for Dispatch</h3>
                            </div>
                            <address className="not-italic text-[#4A5568] leading-relaxed">
                                <span className="font-bold text-[#0F2347] block mb-2 text-lg">Admin. Office:</span>
                                <span className="font-bold block text-[#1B3A6B]">Nehru Skill Development Mission</span>
                                4/1958, Samiyapuram Koot Road<br />
                                Pattukonampatti-post, Pappireddipatti-Tk<br />
                                Dharmapuri-Dt. Pincode: 636905<br />
                                Tamilnadu, India
                            </address>

                            <div className="mt-6 pt-6 border-t border-[#EEF2FA] space-y-2">
                                <p className="text-sm font-bold text-[#0F7B6C] flex items-center gap-2">
                                    <span>📞</span> Mobile: 9585343052
                                </p>
                                <p className="text-sm font-bold text-[#0F7B6C] flex items-center gap-2">
                                    <span>📞</span> Alt Phone: 8270923781
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#DDE3F0] rounded-xl p-8 shadow-sm">
                            <h3 className="font-bold text-[#0F2347] mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#1B3A6B]">How long does manual verification take?</h4>
                                    <p className="text-sm text-[#718096] mt-1">Typically 15 working days from the date of receipt of documents and DD.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-[#1B3A6B]">Can I email a scan instead?</h4>
                                    <p className="text-sm text-[#718096] mt-1">No, for official verification seal/stamp, physical copies must be mailed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

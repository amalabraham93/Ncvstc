import { Metadata } from 'next';
import { CreditCard, Building, Mail, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Payment Methods & Guidelines | NCVSTC',
};

export default function PaymentMethodsPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Payment <span className="text-[#13A090]">Methods</span>
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg pt-2">
                        Official guidelines for fee remittance, Net Banking, and issuing Demand Drafts.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-[#DDE3F0] overflow-hidden">
                    <div className="bg-[#0F2347] px-8 py-6 flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-full text-white">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Fee Remittance Guidelines</h2>
                            <p className="text-[#8FB3E4]">Authorized protocols for all NCVSTC related payments.</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="bg-[#FFFDF5] border border-[#E8920A]/30 rounded-xl p-8 mb-10 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#E8920A]"></div>
                            <h3 className="text-xl font-bold text-[#0F2347] mb-4 flex items-center gap-3">
                                <Building className="w-6 h-6 text-[#E8920A]" />
                                Payee Details (Demand Draft & Net Banking)
                            </h3>
                            <p className="text-[#4A5568] mb-6 leading-relaxed text-lg">
                                All tuition, affiliation, and examination fee payments via Demand Draft or Net Banking must be made strictly in favor of:
                            </p>
                            <div className="bg-white border-2 border-dashed border-[#DDE3F0] rounded-xl p-6 text-center shadow-sm">
                                <span className="block text-xs text-[#718096] uppercase tracking-widest font-bold mb-2">Account / Payee Name</span>
                                <strong className="text-2xl md:text-3xl text-[#0F2347] font-serif block mb-2 px-4 leading-tight text-[#0F7B6C]">
                                    "NAVIGATING CAREER FOR VOCATIONAL SKILL TECHNOLOGY COUNCIL"
                                </strong>
                                <span className="inline-block bg-[#EEF4FF] text-[#1B3A6B] font-bold px-4 py-1.5 rounded-full mt-2 text-sm">
                                    Payable at Chennai
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                <h4 className="font-bold text-[#0F2347] mb-3 text-lg">Institutions & VTCs</h4>
                                <p className="text-[#4A5568] leading-relaxed">
                                    Centre co-ordinators can deposit the affiliation and academic fees of students who have already taken admission but have not deposited full payment at the time of admission. Bulk payments are accepted through official DD or NEFT.
                                </p>
                            </div>

                            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                                <h4 className="font-bold text-[#0F2347] mb-3 text-lg flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-[#0F7B6C]" />
                                    Mandatory Reporting
                                </h4>
                                <p className="text-[#4A5568] leading-relaxed">
                                    After depositing any fee in the bank account of NCVSTC, the transaction details and fee deposit slips <strong className="text-black">must be communicated immediately</strong> to authorities through Fee intimation slips.
                                </p>
                            </div>
                        </div>

                        <hr className="my-10 border-[#EEF2FA]" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#FAFBFF] p-6 rounded-xl border border-[#DDE3F0]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center text-[#1B3A6B] flex-shrink-0 text-xl">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h5 className="font-bold text-[#0F2347] text-lg mb-1">Email Intimation</h5>
                                    <p className="text-[#4A5568]">Please email your UTR/Transaction ID/Slip directly to the financial department.</p>
                                </div>
                            </div>
                            <a href="mailto:info@ncvrtindia.org" className="bg-[#1B3A6B] hover:bg-[#254F8F] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-sm whitespace-nowrap">
                                Email Slip: info@ncvrtindia.org
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// import { Metadata } from 'next';
// import Link from 'next/link';
// import VerifyClientForm from './VerifyClientForm';

// export const metadata: Metadata = {
//     title: 'Certificate Verification | NCVSTC',
//     description: 'Online student and certificate verification portal for NCVSTC.',
// };

// export default function VerifyPage() {
//     return (
//         <div className="bg-[#FAFBFF] min-h-screen">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] relative py-16 px-4">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,146,10,0.15),transparent_50%)]"></div>
//                 <div className="max-w-[1280px] mx-auto text-center relative z-10">
//                     <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Certificate Verification</h1>
//                     <p className="text-white/70 max-w-2xl mx-auto text-lg">
//                         A secure portal for employers and authorities to verify student credentials instantly.
//                     </p>
//                 </div>
//             </section>

//             {/* Verification Portal Area */}
//             <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
//                 <div className="max-w-3xl mx-auto">

//                     <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(27,58,107,0.1)] border border-[#EEF2FA]">
//                         <div className="text-center mb-8">
//                             <div className="w-16 h-16 bg-[#E6F5F3] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-[#0F7B6C]">
//                                 ✓
//                             </div>
//                             <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347] mb-3">
//                                 Verify Credentials
//                             </h2>
//                             <p className="text-[#4A5568] text-sm max-w-md mx-auto">
//                                 Enter the Enrollment Number or Registration Number exactly as it appears on the official NCVSTC certificate.
//                             </p>
//                         </div>

//                         <VerifyClientForm />

//                         {/* Help / Guidelines */}
//                         <div className="mt-10 pt-8 border-t border-[#EEF2FA]">
//                             <h4 className="text-sm font-bold text-[#1B3A6B] mb-4">Verification Guidelines:</h4>
//                             <ul className="space-y-3 text-xs text-[#718096]">
//                                 <li className="flex gap-2 items-start">
//                                     <span className="text-[#E8920A] mt-0.5">◆</span>
//                                     <span>Results for academic years prior to 2010 might naturally take up to 48 hours for manual physical verification.</span>
//                                 </li>
//                                 <li className="flex gap-2 items-start">
//                                     <span className="text-[#E8920A] mt-0.5">◆</span>
//                                     <span>If a record is marked <strong>"Provisional"</strong>, it means the physical dispatch of the final certificate is pending.</span>
//                                 </li>
//                                 <li className="flex gap-2 items-start">
//                                     <span className="text-[#E8920A] mt-0.5">◆</span>
//                                     <span>For bulk verification (employers/agencies), please send an official request to <a href="mailto:verification@ncvrtindia.org" className="text-[#0F7B6C] hover:underline">verification@ncvrtindia.org</a>.</span>
//                                 </li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* Model Certificates Section */}
//             <section className="py-16 md:py-24 bg-white border-t border-[#EEF2FA]">
//                 <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
//                     <div className="text-center mb-12">
//                         <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
//                             <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
//                             Specimen
//                         </div>
//                         <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F2347] mb-4">Model Certificates</h2>
//                         <p className="text-[#4A5568] max-w-2xl mx-auto">
//                             Visual references for original certificates issued by the NCVSTC Vocational Education Council.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[1, 2, 3, 4].map((item) => (
//                             <div key={item} className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl p-3 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(27,58,107,0.1)] transition-all group">
//                                 <div className="aspect-[3/4] bg-gray-100 rounded-lg relative overflow-hidden group-hover:opacity-90 transition-opacity">
//                                     <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
//                                         <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                         </svg>
//                                         <span className="font-mono text-xs font-medium">Model {item}</span>
//                                     </div>
//                                     <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


import { Metadata } from 'next';
import Link from 'next/link';
import VerifyClientForm from './VerifyClientForm';

export const metadata: Metadata = {
    title: 'Certificate Verification | NCVSTC',
    description: 'Online student and certificate verification portal for NCVSTC. Verify certificates, mark sheets, and academic documents.',
};

export default function Verify() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-tr from-[#0F2347] to-[#1E4D8C] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,146,10,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[rgba(15,123,108,0.18)] border border-[rgba(15,123,108,0.35)] text-white/85 text-xs font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#13A090] rounded-full animate-pulse"></span>
                        Official Verification Portal
                    </div>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                        Certificate & <span className="text-[#13A090]">Document</span> Verification
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        A secure portal for individuals, employers, government departments, and embassies to verify student credentials.
                    </p>
                </div>
            </section>

            {/* Verification Options */}
            <section className="py-12 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: '🎓', title: 'Certification Verification', desc: 'Verify authenticity of degree/diploma certificates' },
                        { icon: '📊', title: 'Marksheet Verification', desc: 'Verify marksheets and academic records' },
                        { icon: '📄', title: 'Document Verification', desc: 'Verify any official documents issued by NCVSTC' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-[#DDE3F0] rounded-xl p-6 text-center hover:shadow-lg transition-all">
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-bold text-[#0F2347] mb-2">{item.title}</h3>
                            <p className="text-xs text-[#718096]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Verification Portal Area */}
            <section className="py-12 md:py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Verification Form */}
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
                                    <span>For bulk verification (employers/agencies), please send an official request to <a href="mailto:verification@ncvstc.org" className="text-[#0F7B6C] hover:underline">verification@ncvstc.org</a>.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Verification Procedure */}
                    <div className="bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-2xl p-8 lg:p-10 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#E8920A]">📋</span> Verification Procedure
                        </h3>
                        
                        <p className="text-white/80 text-sm mb-6">
                            Anyone can apply for verification of original / photocopy of documents like Detail Marks Certificate, Certificates, etc. issued by the board.
                        </p>
                        
                        <div className="space-y-5">
                            <div className="flex gap-3">
                                <span className="w-6 h-6 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 mt-0.5">1</span>
                                <div>
                                    <p className="text-sm font-semibold mb-1">Send Demand Draft of Rs. 1000/- (non-refundable) for each document</p>
                                    <p className="text-xs text-white/60">Drawn in favour of: "Navigating Career For Vocational Skill Technology Council" payable at Pappireddipatti</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <span className="w-6 h-6 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 mt-0.5">2</span>
                                <div>
                                    <p className="text-sm font-semibold mb-1">Add Postal Charges</p>
                                    <p className="text-xs text-white/60">Rs. 100/- postal charges extra in India and Rs. 2000/- for outside India</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <span className="w-6 h-6 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 mt-0.5">3</span>
                                <div>
                                    <p className="text-sm font-semibold mb-1">Government/Embassy Verification</p>
                                    <p className="text-xs text-white/60">No verification charges for Central/State Govt. Departments and Embassies</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <span className="w-6 h-6 bg-[rgba(232,146,10,0.2)] rounded-full flex items-center justify-center text-[#E8920A] text-sm shrink-0 mt-0.5">4</span>
                                <div>
                                    <p className="text-sm font-semibold mb-1">Processing Time</p>
                                    <p className="text-xs text-white/60">Normal period required for verification is 15 days</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(232,146,10,0.15)] border border-[rgba(232,146,10,0.3)] rounded-lg">
                            <p className="text-xs font-bold text-[#E8920A] mb-1">⚠️ IMPORTANT NOTE:</p>
                            <p className="text-xs text-white/80">VERIFICATION BY TELEPHONE / FAX / EMAIL WILL NOT BE ENTERTAINED. All documents must be sent by Regd. Post / Speed Post only.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Address */}
            <section className="py-10 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-white border border-[#DDE3F0] rounded-xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-12 h-12 bg-[#E6F5F3] rounded-lg flex items-center justify-center text-2xl shrink-0">
                            📮
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0F2347] mb-2">Send Documents To:</h3>
                            <p className="text-sm text-[#4A5568] mb-3">
                                <span className="font-semibold">Admin. Office:</span><br />
                                Nehru Skill Development Mission<br />
                                4/1958, Samiyapuram Koot Road<br />
                                Pattukonampatti-post, Pappireddipatti-Tk<br />
                                Dharmapuri-Dt. Pincode: 636905<br />
                                Tamilnadu, India
                            </p>
                            <div className="flex gap-4 text-sm">
                                <span className="text-[#0F7B6C] font-medium">📞 Mobile: 9585343052</span>
                                <span className="text-[#0F7B6C] font-medium">📞 8270923781</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Model Certificates Section */}
            <section className="py-16 md:py-20 bg-white border-t border-[#EEF2FA]">
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
                        {[
                            { title: 'Certificate', desc: 'Degree/Diploma Certificate' },
                            { title: 'Marksheet', desc: 'Detailed Marks Certificate' },
                            { title: 'Provisional', desc: 'Provisional Certificate' },
                            { title: 'Migration', desc: 'Migration Certificate' }
                        ].map((item, index) => (
                            <div key={index} className="bg-[#FAFBFF] border border-[#DDE3F0] rounded-xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(27,58,107,0.1)] transition-all group">
                                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16 mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-500">{item.title}</span>
                                        <span className="text-xs text-gray-400 mt-1">{item.desc}</span>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 w-12 h-12 border-2 border-[#0F7B6C]/20 rounded-full"></div>
                                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-[#E8920A]/20 rounded-full"></div>
                                    
                                    {/* Watermark */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                        <span className="font-serif text-4xl font-bold text-[#0F2347] rotate-[-30deg]">NCVSTC</span>
                                    </div>
                                </div>
                                <div className="p-3 text-center border-t border-[#DDE3F0]">
                                    <p className="text-xs font-medium text-[#0F2347]">Model {item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-xs text-[#718096]">
                            * Actual certificates may vary. These are representative samples for reference.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347]">
                        Frequently Asked <span className="text-[#E8920A]">Questions</span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            q: 'How long does verification take?',
                            a: 'Normal verification period is 15 days. Documents are processed upon receipt of physical copies and DD.'
                        },
                        {
                            q: 'Is there a fee for government departments?',
                            a: 'No, Central/State Government Departments and Embassies are exempt from verification charges.'
                        },
                        {
                            q: 'Can I verify by email or phone?',
                            a: 'No, verification by telephone, fax, or email is not entertained. All requests must be sent by post.'
                        },
                        {
                            q: 'What documents are needed for verification?',
                            a: 'Send original/photocopy of the certificate/marksheet with Demand Draft and postal charges.'
                        }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white border border-[#DDE3F0] rounded-lg p-5">
                            <h3 className="font-bold text-[#0F2347] mb-2">{faq.q}</h3>
                            <p className="text-sm text-[#718096]">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#FAFBFF] py-12 border-t border-[#DDE3F0]">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2347] mb-4">
                        Need Bulk Verification for Your Organization?
                    </h2>
                    <p className="text-[#4A5568] max-w-2xl mx-auto mb-6">
                        Employers, agencies, and government departments can contact us for bulk verification services.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B3A6B] text-white rounded-lg font-bold text-sm tracking-wide transition-all hover:bg-[#254F8F]"
                    >
                        Contact Verification Department
                    </Link>
                </div>
            </section>
        </div>
    );
}
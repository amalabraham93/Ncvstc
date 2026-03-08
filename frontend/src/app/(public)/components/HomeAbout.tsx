// 'use client';

// export default function HomeAbout() {
//     return (
//         <section id="about" className="bg-[#FAFBFF] py-12 md:py-24">
//             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 items-center">

//                     <div className="relative">
//                         <div className="bg-gradient-to-br from-[#0F2347] to-[#254F8F] rounded-2xl p-7 md:p-11 text-white relative overflow-hidden">
//                             <div className="absolute -top-16 -right-10 w-[200px] h-[200px] bg-[rgba(15,123,108,0.15)] rounded-full"></div>
//                             <div className="absolute -bottom-4 right-4 font-serif text-[clamp(3rem,6vw,6rem)] font-bold text-white/5 pointer-events-none">
//                                 NCVSTC
//                             </div>
//                             <h3 className="text-[clamp(1.1rem,2vw,1.4rem)] text-white mb-3.5 relative z-10">
//                                 Welcome to NCVSTC Vocational Education Council
//                             </h3>
//                             <p className="text-sm leading-[1.85] text-white/70 relative z-10">
//                                 A Statutory Autonomous Body, Non-Governmental Organization, registered under the Government of Tamil Nadu, Planning Commission, Government of India, and Ministry of Human Resource Development. Established under Article 29 & 30(1) of the Constitution of India and incorporated under the Ministry of Corporate Affairs. Conducts courses in Non-Formal mode through Online, Open and Distance Learning.
//                             </p>
//                         </div>
//                         <div className="mt-4 lg:absolute lg:-bottom-5 lg:-right-5 lg:mt-0 bg-[#E8920A] text-white py-4 px-5 rounded-xl shadow-[0_8px_28px_rgba(232,146,10,0.4)] font-serif font-bold text-center leading-tight inline-block lg:block">
//                             <span className="text-3xl block">Est.</span>
//                             <span className="text-2xl">2006</span>
//                             <span className="text-[0.7rem] font-sans opacity-85 block mt-1">
//                                 Serving India & Asia
//                             </span>
//                         </div>
//                     </div>

//                     <div>
//                         <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0F7B6C] mb-3">
//                             <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
//                             About the Organization
//                         </div>
//                         <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-[#0F2347] mb-4 leading-tight">
//                             Navigating Careers Through <br />
//                             <span className="font-normal text-[#E8920A]">Vocational Excellence</span>
//                         </h2>
//                         <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[#4A5568] leading-[1.8] max-w-[560px]">
//                             NCVSTC promotes skill development by catalyzing quality vocational institutions, supporting quality assurance systems, and running train-the-trainer academies across India.
//                         </p>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-7">
//                             {[
//                                 { title: 'MCA Act 1956 Sec. 8', body: 'Ministry of Corporate Affairs, Govt. of India' },
//                                 { title: 'MSME Act 2006', body: 'Ministry of Micro, Small & Medium Enterprises' },
//                                 { title: 'DGT – SDIS', body: 'Skill Development Initiative Scheme, Directorate General of Training' },
//                                 { title: 'Shram Suvidha (LIN)', body: 'Ministry of Labour & Employment, Govt. of India' },
//                                 { title: 'NCVT MIS No. E12173300624', body: 'Apprenticeship Training, DGT, Ministry of Skill Development' },
//                                 { title: 'Act 1954, Govt. NCT Delhi', body: 'Establishment under Rule 3, Govt. of NCT-Delhi' },
//                                 { title: 'ISO 2009–2015 · IAO · UNESCO-UNEVOC', body: 'ISO Certified & Internationally Accredited Council' },
//                                 { title: 'Legal Value – AIR 1993 SC-2178', body: 'Certificates recognised automatically for employment' },
//                             ].map((pill, i) => (
//                                 <div key={i} className="bg-white border border-[#DDE3F0] rounded-md p-3.5 border-l-[3px] border-l-[#0F7B6C] transition-all hover:border-l-[#E8920A] hover:shadow-sm hover:translate-x-0.5">
//                                     <div className="text-[0.78rem] font-bold text-[#1B3A6B] mb-1">{pill.title}</div>
//                                     <div className="text-[0.7rem] text-[#718096] leading-[1.55]">{pill.body}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="mt-5 bg-gradient-to-br from-[#1B3A6B] to-[#1E4D8C] rounded-lg py-5 px-6 flex items-start gap-4 border border-white/5">
//                             <div className="w-11 h-11 bg-[rgba(232,146,10,0.15)] rounded-md flex items-center justify-center text-xl shrink-0 border border-[rgba(232,146,10,0.2)]">
//                                 ∞
//                             </div>
//                             <div>
//                                 <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#E8920A] mb-1">
//                                     Our Inspiration
//                                 </div>
//                                 <div className="font-serif text-[0.95rem] font-bold text-white mb-1">
//                                     Srinivasa Ramanujan (1887–1920)
//                                 </div>
//                                 <div className="text-[0.78rem] text-white/60 leading-[1.7]">
//                                     An Indian autodidact who, with almost no formal training, made extraordinary contributions to mathematics — a symbol of self-made excellence and the limitless power of knowledge beyond formal education.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }


// 'use client';

// export default function HomeAbout() {
//     return (
//         <section id="about" className="bg-[#FAFBFF] py-12 md:py-24">
//             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
//                 <div className="inline-flex justify-center items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0F7B6C] mb-3 w-full">
//                     <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
//                     Our Vision & Commitment
//                 </div>
//                 <h2 className="font-serif text-center text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-[#0F2347] mb-4 leading-tight">
//                     Online & Distance 
//                     <span className="font-normal text-[#E8920A]"> Education Across Asia</span>
//                 </h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 items-start">

//                     <div className="relative">
//                         <div className="bg-gradient-to-br from-[#0F2347] to-[#254F8F] rounded-2xl p-7 md:p-11 text-white relative overflow-hidden">
//                             <div className="absolute -top-16 -right-10 w-[200px] h-[200px] bg-[rgba(15,123,108,0.15)] rounded-full"></div>
//                             <div className="absolute -bottom-4 right-4 font-serif text-[clamp(3rem,6vw,6rem)] font-bold text-white/5 pointer-events-none">
//                                 NCVSTC
//                             </div>
//                             <h3 className="text-[clamp(1.1rem,2vw,1.4rem)] text-white mb-3.5 relative z-10">
//                                 Attestation of Certificates
//                             </h3>
//                             <p className="text-sm leading-[1.85] text-white/70 relative z-10">
//                                 The Certificates of the NCVSTC Vocational Education Council get Attestation from Foreign Embassies for Education and Employment purposes. Being a NON-UGC Programme, the Certificates of the NCVSTC are not recommended for PSC/UPSC Appointments. It is widely used in Public Sector Undertakings, Multi-National Companies and Private Sector in India and abroad who are satisfied with the Official Verification System.
//                             </p>
//                         </div>
//                         <div className="mt-4 lg:absolute lg:-bottom-5 lg:-right-5 lg:mt-0 bg-[#E8920A] text-white py-4 px-5 rounded-xl shadow-[0_8px_28px_rgba(232,146,10,0.4)] font-serif font-bold text-center leading-tight inline-block lg:block">
//                             <span className="text-3xl block">Est.</span>
//                             <span className="text-2xl">2006</span>
//                             <span className="text-[0.7rem] font-sans opacity-85 block mt-1">
//                                 Serving India & Asia
//                             </span>
//                         </div>
//                     </div>

//                     <div>


//                         <div className="space-y-5 text-[clamp(0.9rem,1.5vw,1.05rem)] text-[#4A5568] leading-[1.8]">
//                             <p>
//                                 We pledge to give you a modern, robust and competitive education so that you will graduate to become responsible and responsive citizens of your various communities and our country. It is also our solemn resolve to inculcate into you the need to be enterprising so that you can become self-reliant at the end of your studies.
//                             </p>
//                             <p>
//                                 We appreciate the fact that we are in the age of computerization and technology. We therefore will ensure that courses and the way courses are taught are IT-compliant. In order to achieve our goals we expect our students to be conscientious and hardworking. We intend to mould both the character and learning traits into our students as these are ingredients for a successful future.
//                             </p>
//                             <p>
//                                 To our members of staff, we will aspire to provide you with a conducive atmosphere to enable you to make your salutary contributions to this online institution so that we can all be proud of it at the end of the day. Already, a strong rapport has been established with the host community of India. We must all build on this happy beginning.
//                             </p>
//                         </div>


//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';

export default function HomeAbout() {
    return (
        <section id="about" className="bg-[#FAFBFF] py-12 md:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 items-start">

                    <div >
                        <div className="relative">

                            <div className="bg-gradient-to-br from-[#0F2347] to-[#254F8F] rounded-2xl p-7 md:p-11 text-white relative overflow-hidden">
                                <div className="absolute -top-16 -right-10 w-[200px] h-[200px] bg-[rgba(15,123,108,0.15)] rounded-full"></div>
                                <div className="absolute -bottom-4 right-4 font-serif text-[clamp(3rem,6vw,6rem)] font-bold text-white/5 pointer-events-none">
                                    NCVSTC
                                </div>
                                <h3 className="text-[clamp(1.1rem,2vw,1.4rem)] text-white mb-3.5 relative z-10">
                                    Welcome to NCVSTC Vocational Education Council
                                </h3>
                                <p className="text-sm leading-[1.85] text-white/70 relative z-10">
                                    A Statutory Autonomous Body, Non-Governmental Organization, registered under the Government of Tamil Nadu, Planning Commission, Government of India, and Ministry of Human Resource Development. Established under Article 29 & 30(1) of the Constitution of India and incorporated under the Ministry of Corporate Affairs. Conducts courses in Non-Formal mode through Online, Open and Distance Learning.
                                </p>
                            </div>
                            <div className="mt-4 lg:absolute lg:-bottom-5 lg:-right-5 lg:mt-0 bg-[#E8920A] text-white py-4 px-5 rounded-xl shadow-[0_8px_28px_rgba(232,146,10,0.4)] font-serif font-bold text-center leading-tight inline-block lg:block">
                                <span className="text-3xl block">Est.</span>
                                <span className="text-2xl">2006</span>
                                <span className="text-[0.7rem] font-sans opacity-85 block mt-1">
                                    Serving India & Asia
                                </span>
                            </div>

                        </div>



                        <div className="mt-5 bg-gradient-to-br from-[#1B3A6B] to-[#1E4D8C] rounded-lg py-5 px-6 border border-white/5">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="w-11 h-11 bg-[rgba(232,146,10,0.15)] rounded-md flex items-center justify-center text-xl shrink-0 border border-[rgba(232,146,10,0.2)]">
                                    ✓
                                </div>
                                <div>
                                    <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#E8920A] mb-1">
                                        Attestation of Certificates
                                    </div>
                                    <div className="text-[0.85rem] text-white/90 leading-relaxed">
                                        The Certificates of the NCVSTC Vocational Education Council get Attestation from Foreign Embassies for Education and Employment purposes. Being a NON-UGC Programme, the Certificates of the NCVSTC are not recommended for PSC/UPSC Appointments. It is widely used in Public Sector Undertakings, Multi-National Companies and Private Sector in India and abroad who are satisfied with the Official Verification System.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 bg-gradient-to-br from-[#1B3A6B] to-[#1E4D8C] rounded-lg py-5 px-6 flex items-start gap-4 border border-white/5">
                            <div className="w-11 h-11 bg-[rgba(232,146,10,0.15)] rounded-md flex items-center justify-center text-xl shrink-0 border border-[rgba(232,146,10,0.2)]">
                                ∞
                            </div>
                            <div>
                                <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#E8920A] mb-1">
                                    Our Inspiration
                                </div>
                                <div className="font-serif text-[0.95rem] font-bold text-white mb-1">
                                    Srinivasa Ramanujan (1887–1920)
                                </div>
                                <div className="text-[0.78rem] text-white/60 leading-[1.7]">
                                    An Indian autodidact who, with almost no formal training, made extraordinary contributions to mathematics — a symbol of self-made excellence and the limitless power of knowledge beyond formal education.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0F7B6C] mb-3">
                            <div className="w-5 h-0.5 bg-[#0F7B6C] rounded-full"></div>
                            Our Vision & Commitment
                        </div>
                        <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-[#0F2347] mb-4 leading-tight">
                            Online & Distance <br />
                            <span className="font-normal text-[#E8920A]">Education Across Asia</span>
                        </h2>

                        <div className="space-y-5 text-[clamp(0.9rem,1.5vw,1.05rem)] text-[#4A5568] leading-[1.8]">
                            <p>
                                We pledge to give you a modern, robust and competitive education so that you will graduate to become responsible and responsive citizens of your various communities and our country. It is also our solemn resolve to inculcate into you the need to be enterprising so that you can become self-reliant at the end of your studies.
                            </p>
                            <p>
                                We appreciate the fact that we are in the age of computerization and technology. We therefore will ensure that courses and the way courses are taught are IT-compliant. In order to achieve our goals we expect our students to be conscientious and hardworking. We intend to mould both the character and learning traits into our students as these are ingredients for a successful future.
                            </p>
                            <p>
                                To our members of staff, we will aspire to provide you with a conducive atmosphere to enable you to make your salutary contributions to this online institution so that we can all be proud of it at the end of the day. Already, a strong rapport has been established with the host community of India. We must all build on this happy beginning.
                            </p>
                        </div>

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-7">
                            {[
                                { title: 'MCA Act 1956 Sec. 8', body: 'Ministry of Corporate Affairs, Govt. of India' },
                                { title: 'MSME Act 2006', body: 'Ministry of Micro, Small & Medium Enterprises' },
                                { title: 'DGT – SDIS', body: 'Skill Development Initiative Scheme, Directorate General of Training' },
                                { title: 'Shram Suvidha (LIN)', body: 'Ministry of Labour & Employment, Govt. of India' },
                                { title: 'NCVT MIS No. E12173300624', body: 'Apprenticeship Training, DGT, Ministry of Skill Development' },
                                { title: 'Act 1954, Govt. NCT Delhi', body: 'Establishment under Rule 3, Govt. of NCT-Delhi' },
                                { title: 'ISO 2009–2015 · IAO · UNESCO-UNEVOC', body: 'ISO Certified & Internationally Accredited Council' },
                                { title: 'Legal Value – AIR 1993 SC-2178', body: 'Certificates recognised automatically for employment' },
                            ].map((pill, i) => (
                                <div key={i} className="bg-white border border-[#DDE3F0] rounded-md p-3.5 border-l-[3px] border-l-[#0F7B6C] transition-all hover:border-l-[#E8920A] hover:shadow-sm hover:translate-x-0.5">
                                    <div className="text-[0.78rem] font-bold text-[#1B3A6B] mb-1">{pill.title}</div>
                                    <div className="text-[0.7rem] text-[#718096] leading-[1.55]">{pill.body}</div>
                                </div>
                            ))}
                        </div> */}


                    </div>

                </div>
            </div>
        </section>
    );
}
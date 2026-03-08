import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Student Resources & Downloads | NCVSTC',
    description: 'Download study materials, academic calendars, and NCVSTC prospectuses.',
};

export default function Resources() {
    const materials = [
        { title: "NCVSTC Academic Prospectus 2026-27", size: "4.2 MB", type: "PDF" },
        { title: "Affiliation Application Form (VTC)", size: "1.8 MB", type: "PDF" },
        { title: "Student Examination Registration Form", size: "850 KB", type: "PDF" },
        { title: "Revised Syllabus Guide - IT & Computing", size: "2.1 MB", type: "PDF" },
        { title: "Guidelines for Paramedical Practical Exams", size: "1.5 MB", type: "PDF" },
        { title: "Official Organization Chart & Governance", size: "5.4 MB", type: "PDF" }
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-[#0F2347] relative py-16 px-4">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Resources & Downloads</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Essential documents, application forms, and prospectuses for students and institutions.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

                    <div>
                        <div className="bg-white rounded-xl shadow-sm border border-[#EEF2FA] overflow-hidden">
                            <div className="p-6 border-b border-[#EEF2FA] flex justify-between items-center bg-[#F8FAFC]">
                                <h3 className="font-bold text-[#0F2347]">Document Center</h3>
                                <span className="text-xs bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full">{materials.length} Files</span>
                            </div>

                            <ul className="divide-y divide-[#EEF2FA]">
                                {materials.map((file, i) => (
                                    <li key={i} className="p-6 hover:bg-[#FAFBFF] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-10 h-10 bg-[#EEF4FF] text-[#1B3A6B] rounded-lg flex items-center justify-center shrink-0">
                                                📄
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-[#0F2347] group-hover:text-[#0F7B6C] transition-colors">
                                                    {file.title}
                                                </h4>
                                                <div className="text-xs text-[#718096] mt-1 flex gap-3">
                                                    <span>{file.type}</span>
                                                    <span>•</span>
                                                    <span>{file.size}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="flex items-center justify-center gap-2 border border-[#DDE3F0] hover:border-[#0F7B6C] text-[#4A5568] hover:text-[#0F7B6C] hover:bg-[#E6F5F3] px-4 py-2 rounded-md transition-all text-xs font-bold w-full sm:w-auto">
                                            ⬇ Download
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0F2347] text-white p-6 rounded-xl shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8920A] opacity-20 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
                            <h4 className="font-serif font-bold text-lg mb-2 relative z-10">Student Dashboard</h4>
                            <p className="text-sm text-white/70 mb-5 relative z-10">
                                Log in to the student portal to access personalized study materials, IDs, and exam results.
                            </p>
                            <Link href="/login" className="block w-full text-center bg-[#E8920A] text-white py-3 rounded text-sm font-bold shadow-sm transition hover:bg-[#C47A08] relative z-10">
                                Access Portal
                            </Link>
                        </div>

                        <div className="bg-white border border-[#DDE3F0] p-6 rounded-xl shadow-sm">
                            <h4 className="font-bold text-[#0F2347] mb-3">Notice Board</h4>
                            <ul className="space-y-3">
                                <li className="text-sm text-[#4A5568]">
                                    <span className="text-[#E8920A] mr-2">▪</span> Semester Exams prep.
                                </li>
                                <li className="text-sm text-[#4A5568]">
                                    <span className="text-[#E8920A] mr-2">▪</span> New grading system applied.
                                </li>
                                <li className="text-sm text-[#4A5568]">
                                    <span className="text-[#E8920A] mr-2">▪</span> Registration dates extended.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

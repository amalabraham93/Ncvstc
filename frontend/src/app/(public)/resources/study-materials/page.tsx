import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Study Materials | NCVSTC',
};

export default function StudyMaterialsPage() {
    const materials = [
        { title: "NCVSTC Academic Prospectus 2026-27", size: "4.2 MB", type: "PDF" },
        { title: "Affiliation Application Form (VTC)", size: "1.8 MB", type: "PDF" },
        { title: "Student Examination Registration Form", size: "850 KB", type: "PDF" },
        { title: "Guidelines for Paramedical Practical Exams", size: "1.5 MB", type: "PDF" },
        { title: "Official Organization Chart & Governance", size: "5.4 MB", type: "PDF" }
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Study <span className="text-[#13A090]">Materials</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-[#4A5568] max-w-2xl mx-auto">
                        Essential documents, application forms, prospectuses, and supplementary reading materials.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-[#EEF2FA] overflow-hidden max-w-4xl mx-auto">
                    <div className="p-6 border-b border-[#EEF2FA] flex justify-between items-center bg-[#F8FAFC]">
                        <h3 className="font-bold text-[#0F2347]">Document Center</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full">{materials.length} Files</span>
                    </div>

                    <ul className="divide-y divide-[#EEF2FA]">
                        {materials.map((file, i) => (
                            <li key={i} className="p-6 hover:bg-[#FAFBFF] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 bg-[#EEF4FF] text-[#1B3A6B] rounded-lg flex items-center justify-center shrink-0">
                                        📚
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
            </section>
        </div>
    );
}

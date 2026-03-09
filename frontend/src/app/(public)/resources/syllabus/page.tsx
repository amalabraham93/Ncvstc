import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Syllabus & Curriculum | NCVSTC',
};

export default function SyllabusPage() {
    const syllabi = [
        { title: "Nursery Teacher Training (NTT) Syllabus", id: "SYL-NTT-2025" },
        { title: "Diploma in Medical Lab Technology (DMLT)", id: "SYL-DMLT-2025" },
        { title: "PGDCA Curriculum Guide", id: "SYL-PGDCA-2025" },
        { title: "Electrician Training Modules", id: "SYL-ELEC-2025" },
        { title: "Diploma in Agriculture Science", id: "SYL-AGRI-2025" }
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Course <span className="text-[#13A090]">Syllabus</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-[#4A5568] max-w-2xl mx-auto">
                        Detailed curriculum outlines and syllabus documents for all NCVSTC recognized vocational programs.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-[#EEF2FA] overflow-hidden max-w-4xl mx-auto">
                    <div className="p-6 border-b border-[#EEF2FA] bg-[#F8FAFC]">
                        <h3 className="font-bold text-[#0F2347]">Latest Curriculums</h3>
                    </div>

                    <ul className="divide-y divide-[#EEF2FA]">
                        {syllabi.map((item, i) => (
                            <li key={i} className="p-6 hover:bg-[#FAFBFF] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 bg-[#EEF4FF] text-[#1B3A6B] rounded-lg flex items-center justify-center shrink-0">
                                        📄
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#0F2347] group-hover:text-[#0F7B6C] transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="text-xs text-[#718096] mt-1">
                                            Code: {item.id} • PDF
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

'use client';

export default function HomeTicker() {
    const notices = [
        "Admissions Open for 2026–27 Academic Year",
        "Exam Schedule – March/April Session Announced",
        "New Skill Development Batch Starting Soon",
        "Online Certificate Verification Now Available",
        "Internship Applications Open – Apply Today",
        "NCVSTC Recognized by UNESCO-UNEVOC International Centre",
        "Admissions Open for 2026–27 Academic Year",
        "Exam Schedule – March/April Session Announced",
        "New Skill Development Batch Starting Soon",
        "Online Certificate Verification Now Available",
        "Internship Applications Open – Apply Today",
        "NCVSTC Recognized by UNESCO-UNEVOC International Centre"
    ];

    return (
        <div className="bg-gradient-to-r from-[#0F7B6C] to-[#13A090] py-2.5 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 w-full">
                <div className="flex items-center gap-0">
                    <div className="bg-black/20 text-white text-xs font-extrabold tracking-widest uppercase py-1 px-4 shrink-0 mr-6 whitespace-nowrap z-10 hidden sm:block">
                        📢 Notice
                    </div>
                    <div className="overflow-hidden flex-1 relative">
                        <div className="inline-flex whitespace-nowrap animate-[scroll_35s_linear_infinite]">
                            {notices.map((notice, i) => (
                                <span key={i} className="text-white/90 text-sm font-semibold px-10 relative flex items-center">
                                    <span className="text-[0.5em] opacity-60 mr-3">◆</span>
                                    {notice}
                                </span>
                            ))}
                        </div>
                        {/* Duplicate for seamless infinite scroll */}
                        <div className="inline-flex whitespace-nowrap animate-[scroll_35s_linear_infinite] absolute top-0 left-full">
                            {notices.map((notice, i) => (
                                <span key={`dup-${i}`} className="text-white/90 text-sm font-semibold px-10 relative flex items-center">
                                    <span className="text-[0.5em] opacity-60 mr-3">◆</span>
                                    {notice}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

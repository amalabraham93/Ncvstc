// 'use client';

// import Link from 'next/link';

// export default function QuickLinks() {
//     const links = [
//         { href: "/register", icon: "📋", title: "Registration", sub: "Online & Offline" },
//         { href: "/exam", icon: "📅", title: "Exam Schedule", sub: "2026–27 Session" },
//         { href: "/exam", icon: "📊", title: "Results", sub: "Check Now" },
//         { href: "/verify", icon: "✅", title: "Verify Certificate", sub: "Instant Verification" },
//         { href: "/resources", icon: "📚", title: "Study Materials", sub: "Download Free" },
//         { href: "/contact", icon: "🏢", title: "Find Branch", sub: "SPO / DRO / Zonal" }
//     ];

//     return (
//         <div className="bg-white border-b border-[#EEF2FA]">
//             <div className="max-w-[1280px] mx-auto">
//                 <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-6">
//                     {links.map((link, i) => (
//                         <Link
//                             key={i}
//                             href={link.href}
//                             className={`flex items-center gap-3.5 p-4 sm:px-5 sm:py-6 transition-all cursor-pointer group hover:bg-[#1B3A6B] 
//                 ${i !== 0 ? 'border-t min-[480px]:border-t-0' : ''} 
//                 min-[480px]:border-r min-[480px]:border-[#EEF2FA] 
//                 ${i % 2 === 1 ? 'min-[480px]:border-r-0 lg:border-r' : ''} 
//                 ${i >= 2 ? 'lg:border-t-0 border-t min-[480px]:border-t border-[#EEF2FA]' : ''} 
//                 ${i === 5 ? 'lg:border-r-0' : ''}
//               `}
//                         >
//                             <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] bg-[#EEF4FF] rounded-md flex items-center justify-center text-lg shrink-0 transition-all text-[#1B3A6B] group-hover:bg-[#E8920A] group-hover:text-white">
//                                 {link.icon}
//                             </div>
//                             <div>
//                                 <div className="text-sm font-bold text-[#1A2340] leading-snug transition-colors group-hover:text-white">
//                                     {link.title}
//                                 </div>
//                                 <div className="text-[0.67rem] text-[#718096] transition-colors mt-px group-hover:text-white/55">
//                                     {link.sub}
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';

import Link from 'next/link';

export default function QuickLinks() {
    const links = [
        { href: "/study-centers", icon: "🏛️", title: "Study Centers", sub: "Find Near You" },
        { href: "/vocational-training", icon: "🔧", title: "VTP", sub: "Vocational Training Provider" },
        { href: "/community-college", icon: "👥", title: "CC", sub: "Community College" },
        { href: "/iti", icon: "🏭", title: "ITI", sub: "Industry Training Institution" },
        { href: "/skill-training", icon: "📈", title: "STI", sub: "Skill Training Institution" },
        { href: "/training-providers", icon: "🎯", title: "STP & BTP", sub: "Skill & Basic Training" }
    ];

    return (
        <div className="bg-white border-b border-[#EEF2FA]">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-6">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className={`flex items-center gap-3.5 p-4 sm:px-5 sm:py-6 transition-all cursor-pointer group hover:bg-[#1B3A6B] 
                ${i !== 0 ? 'border-t min-[480px]:border-t-0' : ''} 
                min-[480px]:border-r min-[480px]:border-[#EEF2FA] 
                ${i % 2 === 1 ? 'min-[480px]:border-r-0 lg:border-r' : ''} 
                ${i >= 2 ? 'lg:border-t-0 border-t min-[480px]:border-t border-[#EEF2FA]' : ''} 
                ${i === 5 ? 'lg:border-r-0' : ''}
              `}
                        >
                            <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] bg-[#EEF4FF] rounded-md flex items-center justify-center text-lg shrink-0 transition-all text-[#1B3A6B] group-hover:bg-[#E8920A] group-hover:text-white">
                                {link.icon}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#1A2340] leading-snug transition-colors group-hover:text-white">
                                    {link.title}
                                </div>
                                <div className="text-[0.67rem] text-[#718096] transition-colors mt-px group-hover:text-white/55">
                                    {link.sub}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
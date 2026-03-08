'use client';

import Link from 'next/link';

export default function HomeFooter() {
    return (
        <footer className="bg-[#0F2347] pt-20 pb-10 border-t-[6px] border-[#0F7B6C]">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="flex flex-col gap-6">
                        <div className="w-20 lg:w-24">
                            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                                <circle cx="60" cy="60" r="58" fill="#FAFBFF" stroke="#E8920A" strokeWidth="4" />
                                <circle cx="60" cy="60" r="48" fill="none" stroke="#1B3A6B" strokeWidth="1" strokeDasharray="4 4" />
                                <path d="M45,40 L75,40 L60,20 Z" fill="#0F7B6C" />
                                <rect x="56" y="40" width="8" height="40" fill="#1B3A6B" />
                                <path d="M40,80 L80,80" stroke="#0F2347" strokeWidth="4" />
                                <circle cx="60" cy="60" r="15" fill="#E8920A" opacity="0.8" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-serif text-white font-bold text-xl tracking-wider mb-2">NCVSTC</h4>
                            <p className="text-white/60 text-sm leading-relaxed mb-4 pr-4">
                                Navigating Career for Vocational Skill Technology Council. Empowering youth with industry-ready skills.
                            </p>
                            <div className="flex gap-3">
                                {/* Social Icons Placeholder */}
                                {['fb', 'tw', 'in', 'yt'].map((s) => (
                                    <div key={s} className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#E8920A] hover:text-white transition-colors cursor-pointer">
                                        <div className="w-4 h-4 rounded-full border border-current"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold text-[0.85rem] tracking-wider uppercase mb-6 relative">
                            Explore Links
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#0F7B6C]"></span>
                        </h5>
                        <ul className="flex flex-col gap-3">
                            {[
                                { n: "Home", l: "/" },
                                { n: "About Us", l: "/about" },
                                { n: "Courses", l: "/programs" },
                                { n: "Verify Student", l: "/verify" },
                                { n: "Affiliation", l: "/contact" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.l} className="text-white/60 text-sm hover:text-[#13A090] transition-colors flex items-center gap-2">
                                        <span className="text-[0.6rem] text-[#E8920A]">▶</span> {link.n}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold text-[0.85rem] tracking-wider uppercase mb-6 relative">
                            Legal Info
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#0F7B6C]"></span>
                        </h5>
                        <ul className="flex flex-col gap-3">
                            {[
                                "Terms & Conditions",
                                "Privacy Policy",
                                "Refund Policy",
                                "RTI Act",
                                "Verification Guidelines"
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-white/60 text-sm hover:text-[#13A090] transition-colors flex items-center gap-2">
                                        <span className="text-[0.6rem] text-[#E8920A]">▶</span> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold text-[0.85rem] tracking-wider uppercase mb-6 relative">
                            Liaison Office
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#0F7B6C]"></span>
                        </h5>
                        <div className="flex flex-col gap-4 text-white/60 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="mt-1">📍</span>
                                <p>
                                    4/1958, Samiyapuram Koot Road,<br />
                                    Pappireddipatti, Dharmapuri – 636905,<br />
                                    Tamil Nadu.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>📞</span>
                                <a href="tel:9585343052" className="hover:text-white transition-colors">9585343052</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>✉</span>
                                <a href="mailto:info@ncvrtindia.org" className="hover:text-white transition-colors">info@ncvrtindia.org</a>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
                            <div className="text-xs text-white/80 font-semibold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Support Desks Open
                            </div>
                            <div className="text-[0.65rem] text-white/40 uppercase tracking-widest">
                                Mon - Sat, 10:00 AM - 5:00 PM
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} NCVSTC. All Rights Reserved.<br className="md:hidden" />
                        Established under Govt. of India / NCT Delhi Act.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-white/30 text-xs">ISO 9001:2015</span>
                        <span className="text-white/30 text-xs">MSME Registered</span>
                        <span className="text-white/30 text-xs">NITI Aayog</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

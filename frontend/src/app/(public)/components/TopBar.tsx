'use client';

import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-[#0F2347] py-2 text-xs text-white/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-1.5 text-center sm:text-left">
                    <svg className="opacity-50 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 0C3.79 0 2 1.79 2 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C5.17 5.5 4.5 4.83 4.5 4S5.17 2.5 6 2.5 7.5 3.17 7.5 4 6.83 5.5 6 5.5z" />
                    </svg>
                    4/1958, Samiyapuram Koot Road, Pappireddipatti, Dharmapuri – 636905, Tamil Nadu
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <a href="tel:9585343052" className="flex items-center gap-1 hover:text-[#E8920A] transition-colors">
                        📞 9585343052
                    </a>
                    <span className="text-white/20">|</span>
                    <a href="mailto:info@ncvrtindia.org" className="flex items-center gap-1 hover:text-[#E8920A] transition-colors">
                        ✉ info@ncvrtindia.org
                    </a>
                    <span className="text-white/20 hidden sm:inline">|</span>
                    <Link href="/login" className="flex items-center gap-1 hover:text-[#E8920A] transition-colors hidden sm:flex">
                        Student Login
                    </Link>
                    <span className="text-white/20 hidden sm:inline">|</span>
                    <Link href="/verify" className="flex items-center gap-1 hover:text-[#E8920A] transition-colors hidden sm:flex">
                        Verify Certificate
                    </Link>
                </div>
            </div>
        </div>
    );
}

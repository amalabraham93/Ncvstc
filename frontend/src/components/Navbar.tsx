"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

export default function Navbar() {
    const pathname = usePathname();
    const { isAuthenticated, user, logout } = useAuthStore();

    const getDashboardLink = () => {
        switch (user?.role) {
            case 'Student': return '/student/dashboard';
            case 'Institution': return '/institution/dashboard';
            case 'Admin': return '/admin/dashboard';
            default: return '/login';
        }
    };

    return (
        <nav className="w-full bg-white border-b border-[#EEF2FA] top-0 z-50 sticky shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center h-20 justify-between">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-lg flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-lg transition-all">
                        <div className="absolute inset-0 bg-[#E8920A] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <span className="font-serif text-white font-bold text-lg lg:text-xl tracking-wider">N</span>
                    </div>
                    <div>
                        <div className="font-serif font-bold text-[#0F2347] text-lg lg:text-xl leading-none tracking-wide">
                            NCVSTC
                        </div>
                        <div className="text-[0.6rem] lg:text-[0.65rem] font-bold tracking-[0.1em] text-[#0F7B6C] uppercase mt-0.5">
                            Govt. of India
                        </div>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    <Link href="/" className="text-sm font-bold text-[#1B3A6B] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        About
                    </Link>
                    <Link href="/programs" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Programs
                    </Link>
                    <Link href="/services" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Services
                    </Link>
                    <Link href="/gallery" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Gallery
                    </Link>
                    <Link href="/verify" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Verify
                    </Link>
                    <Link href="/contact" className="text-sm font-bold text-[#4A5568] hover:text-[#0F7B6C] px-3 py-2 rounded-md transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                    {isAuthenticated ? (
                        <>
                            <Link href={getDashboardLink()} className="hidden sm:flex text-sm font-bold text-[#0F7B6C] px-4 py-2 hover:bg-[#EEF4FF] rounded-md transition-colors">
                                Dashboard
                            </Link>
                            <button onClick={logout} className="text-sm font-bold text-[#718096] hover:text-[#E8920A] px-2 transition-colors">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="hidden sm:block text-sm font-bold text-[#1B3A6B] px-4 py-2.5 hover:bg-[#EEF4FF] rounded-md transition-colors">
                                Login
                            </Link>
                            <Link href="/register" className="text-sm font-bold px-5 py-2.5 bg-[#E8920A] text-white rounded-md hover:bg-[#C47A08] transition-colors shadow-sm hover:translate-y-[-1px]">
                                Apply Now
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

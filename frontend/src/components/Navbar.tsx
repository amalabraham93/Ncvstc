



"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { useState } from 'react';
import './Navbar.scss';

interface NavLink {
    title: string;
    href?: string;
    subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
    { title: "Home", href: "/" },
    {
        title: "About",
        subLinks: [
            { title: "About Us", href: "/about/about-us" },
            { title: "Vision & Mission", href: "/about/vision-mission" },
            { title: "Organization Chart", href: "/about/organization-chart" },
            { title: "Director Message", href: "/about/director-message" },
        ],
    },
    {
        title: "Our Service",
        subLinks: [
            { title: "Courses", href: "/services/courses" },
            { title: "Government Project", href: "/services/government-project" },
            { title: "Career & Placement", href: "/services/career-placement" },
        ],
    },
    {
        title: "Registration",
        subLinks: [
            { title: "Offline Registration", href: "/registration/offline" },
            { title: "Online Registration", href: "/registration/online" },
            { title: "Internship Application", href: "/registration/internship" },
        ],
    },
    {
        title: "Contact",
        subLinks: [
            { title: "Contact Us", href: "/contact/contact-us" },
            { title: "Gallery", href: "/contact/gallery" },
            { title: "Payment Method", href: "/contact/payment-method" },
        ],
    },
];

// ── SVG helpers ──────────────────────────────────────────────
const ChevronDown = () => (
    <svg className="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const ChevronRight = () => (
    <svg className="arrowRight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const HamburgerIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const MobileMenuItem = ({ item, level = 0, onClickHref }: { item: any, level?: number, onClickHref: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pl = level === 0 ? 'px-6' : level === 1 ? 'pl-12 pr-6' : 'pl-16 pr-6';
    const bg = level === 0 ? 'bg-white' : level === 1 ? 'bg-gray-50' : 'bg-gray-100';

    if (!item.subLinks) {
        return (
            <Link href={item.href || '#'} className={`block ${pl} py-3.5 text-[14px] font-semibold text-[#4A5568] border-b border-gray-100 hover:bg-[#EEF4FF] hover:text-[#0F7B6C] transition-colors`} onClick={onClickHref}>
                {item.title}
            </Link>
        );
    }
    return (
        <div className="border-b border-gray-100">
            <button className={`flex w-full items-center justify-between ${pl} py-3.5 text-[14px] font-bold text-[#0F2347] hover:bg-gray-50 text-left ${bg}`} onClick={() => setIsOpen(!isOpen)}>
                {item.title}
                <svg className={`w-4 h-4 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                    {item.subLinks.map((sub: any, idx: number) => (
                        <MobileMenuItem key={idx} item={sub} level={level + 1} onClickHref={onClickHref} />
                    ))}
                </div>
            )}
        </div>
    );
};

// ── Component ────────────────────────────────────────────────
export default function Navbar() {
    const pathname = usePathname();
    const { isAuthenticated, user, logout } = useAuthStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getDashboardLink = () => {
        switch (user?.role) {
            case 'Student': return '/student/dashboard';
            case 'Institution': return '/institution/dashboard';
            case 'Admin': return '/admin/dashboard';
            default: return '/login';
        }
    };

    return (
        <nav className="navbar">
            <div className="inner">

                {/* ── Logo ── */}
                <Link href="/" className="logo">
                    <div className="logoIcon">
                        <span>N</span>
                    </div>
                    <div className="logoText">
                        <span className="logoName">NCVSTC</span>
                        <span className="logoSub">Govt. of India</span>
                    </div>
                </Link>

                {/* ── Desktop Nav (≥ 992px) ── */}
                <div className="desktopNav">
                    {navLinks.map((link, idx) => (
                        <div key={idx} className="navItem">

                            {/* Top-level: plain link OR dropdown trigger */}
                            {link.subLinks ? (
                                <button className="navBtn">
                                    {link.title}
                                    <ChevronDown />
                                </button>
                            ) : (
                                <Link href={link.href!} className="navLink">
                                    {link.title}
                                </Link>
                            )}

                            {/* First-level dropdown */}
                            {link.subLinks && (
                                <div className="dropdown">
                                    {link.subLinks.map((sub, subIdx) => (
                                        <div key={subIdx} className="dropItem">
                                            <Link
                                                href={sub.href || '#'}
                                                className="dropLink"
                                            >
                                                {sub.title}
                                                {sub.subLinks && <ChevronRight />}
                                            </Link>

                                            {/* Second-level dropdown */}
                                            {sub.subLinks && (
                                                <div className="subDropdown">
                                                    {sub.subLinks.map((deepSub, deepIdx) => (
                                                        <Link
                                                            key={deepIdx}
                                                            href={deepSub.href || '#'}
                                                            className="subLink"
                                                        >
                                                            {deepSub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Mobile Hamburger (< 992px) ── */}
                <button className="hamburger" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>

                {/* ── Actions ── */}
                <div className="actions">
                    {isAuthenticated ? (
                        <>
                            <Link href={getDashboardLink()} className="dashboardBtn">
                                Dashboard
                            </Link>
                            <button onClick={logout} className="logoutBtn">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="loginBtn">
                                Login
                            </Link>
                            <Link href="/register" className="registerBtn">
                                Registration
                            </Link>
                        </>
                    )}
                </div>

            </div>

            {/* ── Mobile Menu Dropdown Wrapper ── */}
            {isMobileMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-200 shadow-xl lg:hidden flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="flex flex-col mb-6">
                        {navLinks.map((link, idx) => (
                            <MobileMenuItem key={idx} item={link} onClickHref={() => setIsMobileMenuOpen(false)} />
                        ))}

                        {/* Mobile Actions */}
                        <div className="mt-4 px-6 py-4 bg-gray-50 flex flex-col gap-3">
                            {isAuthenticated ? (
                                <>
                                    <Link href={getDashboardLink()} onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center text-[14px] font-bold text-[#0F7B6C] px-4 py-3 bg-[#EEF4FF] rounded-md border border-[#0F7B6C] transition-colors">
                                        Dashboard
                                    </Link>
                                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full text-center text-[14px] font-bold text-white bg-[#0F2347] px-4 py-3 rounded-md transition-colors">
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center text-[14px] font-bold text-[#0F2347] px-4 py-3 bg-white border border-[#DDE3F0] rounded-md transition-colors shadow-sm">
                                        Login
                                    </Link>
                                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center text-[14px] font-bold px-4 py-3 bg-[#E8920A] text-white rounded-md transition-colors shadow-sm">
                                        Registration
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}


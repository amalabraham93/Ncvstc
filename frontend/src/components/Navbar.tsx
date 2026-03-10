// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useAuthStore } from '@/lib/store';

// const navLinks = [
//     { title: "Home", href: "/" },
//     {
//         title: "About",
//         subLinks: [
//             { title: "About Us", href: "/about/about-us" },
//             { title: "Vision & Mission", href: "/about/vision-mission" },
//             { title: "Organization Chart", href: "/about/organization-chart" },
//             { title: "Branches", href: "/about/branches" },
//             { title: "Director Message", href: "/about/director-message" },
//             {
//                 title: "Office",
//                 href: "/about/office",
//                 subLinks: [
//                     { title: "State Programme Office (SPO)", href: "/about/office/spo" },
//                     { title: "District Regional Office (DRO)", href: "/about/office/dro" },
//                     { title: "Zonal Offices", href: "/about/office/zonal" },
//                 ]
//             },
//         ]
//     },
//     {
//         title: "Our Service",
//         subLinks: [
//             { title: "Courses", href: "/services/courses" },
//             { title: "Government Project", href: "/services/government-project" },
//             { title: "Career & Placement", href: "/services/career-placement" },
//             { title: "Certificate of Org.", href: "/services/certificate-organization" },
//         ]
//     },
//     {
//         title: "Programs",
//         subLinks: [
//             { title: "Student Dev Schemes", href: "/programs/student-schemes" },
//             { title: "Institution Dev Schemes", href: "/programs/institutional-schemes" },
//             { title: "Staff Dev Schemes", href: "/programs/staff-schemes" },
//             { title: "Vocational Initiatives", href: "/programs/vocational-initiatives" },
//             { title: "Community College", href: "/programs/community-college" },
//             { title: "Skill Dev Initiatives", href: "/programs/skill-development" },
//         ]
//     },
//     {
//         title: "Resources",
//         subLinks: [
//             { title: "Question Bank", href: "/resources/question-bank" },
//             { title: "Syllabus", href: "/resources/syllabus" },
//             { title: "Study Materials", href: "/resources/study-materials" },
//             { title: "Student Login", href: "/login" },
//         ]
//     },
//     {
//         title: "Registration",
//         subLinks: [
//             { title: "Offline Registration", href: "/registration/offline" },
//             { title: "Online Registration", href: "/registration/online" },
//             { title: "Internship Application", href: "/registration/internship" },
//         ]
//     },
//     {
//         title: "Examination",
//         subLinks: [
//             { title: "Exam Schedule", href: "/examination/schedule" },
//             { title: "Exam Center", href: "/examination/center" },
//             { title: "Result", href: "/examination/result" },
//         ]
//     },
//     {
//         title: "Verification",
//         subLinks: [
//             { title: "Cert Verification", href: "/verify/cert-verification" },
//             { title: "Marksheet Verification", href: "/verify/marksheet" },
//             { title: "Verify Document", href: "/verify/verify-doc" },
//             { title: "Model Certificates", href: "/verify/model-certs" },
//         ]
//     },
//     {
//         title: "Contact",
//         subLinks: [
//             { title: "Contact Us", href: "/contact/contact-us" },
//             { title: "Gallery", href: "/contact/gallery" },
//             { title: "Payment Method", href: "/contact/payment-method" },
//         ]
//     }
// ];

// export default function Navbar() {
//     const pathname = usePathname();
//     const { isAuthenticated, user, logout } = useAuthStore();

//     const getDashboardLink = () => {
//         switch (user?.role) {
//             case 'Student': return '/student/dashboard';
//             case 'Institution': return '/institution/dashboard';
//             case 'Admin': return '/admin/dashboard';
//             default: return '/login';
//         }
//     };

//     return (
//         <nav className="w-full bg-white border-b border-[#EEF2FA] top-0 z-50 sticky shadow-sm">
//             <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center h-20 justify-between">

//                 {/* Logo Area */}
//                 <Link href="/" className="flex items-center gap-3 group">
//                     <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#0F2347] to-[#1B3A6B] rounded-lg flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-lg transition-all">
//                         <div className="absolute inset-0 bg-[#E8920A] opacity-0 group-hover:opacity-10 transition-opacity"></div>
//                         <span className="font-serif text-white font-bold text-lg lg:text-xl tracking-wider">N</span>
//                     </div>
//                     <div>
//                         <div className="font-serif font-bold text-[#0F2347] text-lg lg:text-xl leading-none tracking-wide">
//                             NCVSTC
//                         </div>
//                         <div className="text-[0.6rem] lg:text-[0.65rem] font-bold tracking-[0.1em] text-[#0F7B6C] uppercase mt-0.5">
//                             Govt. of India
//                         </div>
//                     </div>
//                 </Link>

//                 {/* Desktop Links with Mega Dropdowns */}
//                 <div className="hidden 2xl:flex items-center space-x-0.5">
//                     {navLinks.map((link, idx) => (
//                         <div key={idx} className="group relative">
//                             {link.subLinks ? (
//                                 <button className="flex items-center gap-1 text-[13px] font-bold text-[#4A5568] hover:text-[#E8920A] px-2 py-6 transition-colors">
//                                     {link.title}
//                                     <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </button>
//                             ) : (
//                                 <Link href={link.href!} className="flex items-center text-[13px] font-bold text-[#4A5568] hover:text-[#E8920A] px-2 py-6 transition-colors">
//                                     {link.title}
//                                 </Link>
//                             )}

//                             {/* Dropdown Menu */}
//                             {link.subLinks && (
//                                 <div className="absolute top-[80%] left-0 w-60 bg-white shadow-xl border border-[#EEF2FA] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
//                                     <div className="py-2">
//                                         {link.subLinks.map((sub, subIdx) => (
//                                             <div key={subIdx} className="group/sub relative">
//                                                 <Link
//                                                     href={sub.href || '#'}
//                                                     className="flex items-center justify-between px-4 py-2.5 text-sm text-[#4A5568] hover:bg-[#EEF4FF] hover:text-[#0F7B6C] font-medium transition-colors border-b border-gray-50 last:border-0 w-full"
//                                                 >
//                                                     {sub.title}
//                                                     {sub.subLinks && (
//                                                         <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                         </svg>
//                                                     )}
//                                                 </Link>

//                                                 {/* Nested Dropdown */}
//                                                 {sub.subLinks && (
//                                                     <div className="absolute top-0 left-full w-60 bg-white shadow-xl border border-[#EEF2FA] rounded-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 transform origin-top-left translate-x-2 group-hover/sub:translate-x-0 ml-1">
//                                                         <div className="py-2">
//                                                             {sub.subLinks.map((deepSub, deepIdx) => (
//                                                                 <Link
//                                                                     key={deepIdx}
//                                                                     href={deepSub.href}
//                                                                     className="block px-4 py-2.5 text-sm text-[#4A5568] hover:bg-[#EEF4FF] hover:text-[#0F7B6C] font-medium transition-colors border-b border-gray-50 last:border-0"
//                                                                 >
//                                                                     {deepSub.title}
//                                                                 </Link>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Mobile Menu Toggle Stub */}
//                 <div className="2xl:hidden flex items-center">
//                     <button className="text-[#1B3A6B] p-2 focus:outline-none">
//                         <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center space-x-3">
//                     {isAuthenticated ? (
//                         <>
//                             <Link href={getDashboardLink()} className="hidden sm:flex text-sm font-bold text-[#0F7B6C] px-4 py-2 hover:bg-[#EEF4FF] rounded-md transition-colors">
//                                 Dashboard
//                             </Link>
//                             <button onClick={logout} className="text-sm font-bold text-[#718096] hover:text-[#E8920A] px-2 transition-colors">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <Link href="/login" className="hidden sm:block text-sm font-bold text-[#1B3A6B] px-4 py-2.5 hover:bg-[#EEF4FF] rounded-md transition-colors">
//                                 Login
//                             </Link>
//                             <Link href="/register" className="text-sm font-bold px-5 py-2.5 bg-[#E8920A] text-white rounded-md hover:bg-[#C47A08] transition-colors shadow-sm hover:translate-y-[-1px]">
//                                 Registration
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }




"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import  './Navbar.scss';

const navLinks = [
    { title: "Home", href: "/" },
    {
        title: "About",
        subLinks: [
            { title: "About Us", href: "/about/about-us" },
            { title: "Vision & Mission", href: "/about/vision-mission" },
            { title: "Organization Chart", href: "/about/organization-chart" },
            { title: "Branches", href: "/about/branches" },
            { title: "Director Message", href: "/about/director-message" },
            {
                title: "Office",
                href: "/about/office",
                subLinks: [
                    { title: "State Programme Office (SPO)", href: "/about/office/spo" },
                    { title: "District Regional Office (DRO)", href: "/about/office/dro" },
                    { title: "Zonal Offices", href: "/about/office/zonal" },
                ],
            },
        ],
    },
    {
        title: "Our Service",
        subLinks: [
            { title: "Courses", href: "/services/courses" },
            { title: "Government Project", href: "/services/government-project" },
            { title: "Career & Placement", href: "/services/career-placement" },
            { title: "Certificate of Org.", href: "/services/certificate-organization" },
        ],
    },
    {
        title: "Programs",
        subLinks: [
            { title: "Student Dev Schemes", href: "/programs/student-schemes" },
            { title: "Institution Dev Schemes", href: "/programs/institutional-schemes" },
            { title: "Staff Dev Schemes", href: "/programs/staff-schemes" },
            { title: "Vocational Initiatives", href: "/programs/vocational-initiatives" },
            { title: "Community College", href: "/programs/community-college" },
            { title: "Skill Dev Initiatives", href: "/programs/skill-development" },
        ],
    },
    {
        title: "Resources",
        subLinks: [
            { title: "Question Bank", href: "/resources/question-bank" },
            { title: "Syllabus", href: "/resources/syllabus" },
            { title: "Study Materials", href: "/resources/study-materials" },
            { title: "Student Login", href: "/login" },
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
        title: "Examination",
        subLinks: [
            { title: "Exam Schedule", href: "/examination/schedule" },
            { title: "Exam Center", href: "/examination/center" },
            { title: "Result", href: "/examination/result" },
        ],
    },
    {
        title: "Verification",
        subLinks: [
            { title: "Cert Verification", href: "/verify/cert-verification" },
            { title: "Marksheet Verification", href: "/verify/marksheet" },
            { title: "Verify Document", href: "/verify/verify-doc" },
            { title: "Model Certificates", href: "/verify/model-certs" },
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

// ── Component ────────────────────────────────────────────────
export default function Navbar() {
    const pathname = usePathname();
    const { isAuthenticated, user, logout } = useAuthStore();

    const getDashboardLink = () => {
        switch (user?.role) {
            case 'Student':     return '/student/dashboard';
            case 'Institution': return '/institution/dashboard';
            case 'Admin':       return '/admin/dashboard';
            default:            return '/login';
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
                                                            href={deepSub.href}
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
                <button className="hamburger" aria-label="Open menu">
                    <HamburgerIcon />
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
        </nav>
    );
}


"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';
import { LayoutDashboard, Book, Users, LogOut, FileCheck2 } from 'lucide-react';

export default function InstitutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, user, logout } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'Institution') {
            router.push('/login');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'Institution') return null;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-gray-100">
                    <Link href="/" className="text-xl font-bold text-blue-600">NCVSTC</Link>
                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Institute Portal</div>
                </div>
                <nav className="p-4 space-y-2 flex-1 outline-none">
                    <Link href="/institution/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 transition">
                        <LayoutDashboard className="w-5 h-5 mr-3 text-gray-500" /> Overview
                    </Link>
                    <Link href="/institution/courses" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition">
                        <Book className="w-5 h-5 mr-3 text-gray-400" /> Manage Courses
                    </Link>
                    <Link href="/institution/applications" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition">
                        <Users className="w-5 h-5 mr-3 text-gray-400" /> Admissions
                    </Link>
                    <Link href="/institution/profile" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition">
                        <FileCheck2 className="w-5 h-5 mr-3 text-gray-400" /> Center Profile
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-100">
                    <button onClick={() => { logout(); router.push('/'); }} className="flex w-full items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition">
                        <LogOut className="w-5 h-5 mr-3 text-red-500" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 shadow-sm">
                    <div className="font-bold text-gray-900 text-lg hidden md:block">Institution Dashboard</div>
                    <div className="font-bold text-blue-600 text-lg md:hidden">NCVSTC Institute</div>
                </header>
                <div className="p-8 flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}

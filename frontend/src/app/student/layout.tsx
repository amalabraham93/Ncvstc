"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';
import { LayoutDashboard, BookMarked, FileText, Settings, LogOut } from 'lucide-react';

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, user, logout } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'Student') {
            router.push('/login');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'Student') return null;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block fixed h-full z-10">
                <div className="p-6 border-b">
                    <Link href="/" className="text-xl font-bold text-blue-600">NCVSTC</Link>
                    <div className="text-xs text-gray-500 mt-1">Student Portal</div>
                </div>
                <nav className="p-4 space-y-1">
                    <Link href="/student/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200">
                        <LayoutDashboard className="w-5 h-5 mr-3 text-gray-500" /> Dashboard
                    </Link>
                    <Link href="/student/applications" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <FileText className="w-5 h-5 mr-3 text-gray-400" /> Applications
                    </Link>
                    <Link href="/explore/courses" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <BookMarked className="w-5 h-5 mr-3 text-gray-400" /> Browse Courses
                    </Link>
                    <Link href="/student/settings" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <Settings className="w-5 h-5 mr-3 text-gray-400" /> Settings
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-full p-4 border-t">
                    <button onClick={() => { logout(); router.push('/'); }} className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50">
                        <LogOut className="w-5 h-5 mr-3 text-red-500" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 md:hidden">
                    <div className="font-bold text-blue-600 text-lg">NCVSTC Student</div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

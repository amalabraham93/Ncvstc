"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';
import { LayoutDashboard, Users, LogOut, Tags } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, user, logout } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'Admin') {
            router.push('/login');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'Admin') return null;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col fixed h-full z-10 transition-all duration-300">
                <div className="p-6 bg-gray-950 flex flex-col justify-center h-20">
                    <Link href="/" className="text-xl font-bold tracking-wider">NCVSTC <span className="text-blue-500">ADMIN</span></Link>
                </div>
                <nav className="flex-1 py-6 px-4 space-y-2">
                    <Link href="/admin/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                        <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400" /> Dashboard Overview
                    </Link>
                    <Link href="/admin/users" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                        <Users className="w-5 h-5 mr-3 text-gray-400" /> Users & Institutions
                    </Link>
                    <Link href="/admin/categories" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                        <Tags className="w-5 h-5 mr-3 text-gray-400" /> Categories
                    </Link>
                </nav>
                <div className="p-4 bg-gray-950">
                    <button onClick={() => { logout(); router.push('/'); }} className="flex w-full items-center px-4 py-3 text-sm font-medium rounded-lg text-red-500 hover:bg-gray-800 transition">
                        <LogOut className="w-5 h-5 mr-3 text-red-500" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <header className="bg-white border-b border-gray-200 h-20 flex items-center px-8 shadow-sm justify-between">
                    <div className="font-bold text-gray-900 text-xl hidden md:block">Super Administration</div>
                    <div className="font-bold text-blue-600 text-lg md:hidden">NCVSTC Admin</div>
                    <div className="flex items-center text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full hidden md:flex">
                        🟢 System Online
                    </div>
                </header>
                <div className="p-8 flex-1 bg-gray-50">
                    {children}
                </div>
            </main>
        </div>
    );
}

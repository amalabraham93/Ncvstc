"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Users, Building2, BookX, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [statsRes, usersRes] = await Promise.all([
                    api.get('/admin/stats'),
                    api.get('/admin/users')
                ]);
                setStats(statsRes.data);
                setUsers(usersRes.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    if (loading) return <div>Loading...</div>;

    const getInstitutionPendingCount = () => {
        // Ideally this comes from the backend directly, mock client calculation for brevity
        return users.filter((u: any) => u.role === 'Institution').length; // Mock
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Platform Overview</h1>
                <p className="mt-2 text-gray-600">High level metrics and recent activity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                        <Users className="w-24 h-24 text-blue-600" />
                    </div>
                    <div className="relative z-10 flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Users</p>
                    </div>
                    <p className="relative z-10 text-5xl font-extrabold text-gray-900">{stats?.totalUsers || 0}</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                        <Building2 className="w-24 h-24 text-indigo-600" />
                    </div>
                    <div className="relative z-10 flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Institutions</p>
                    </div>
                    <p className="relative z-10 text-5xl font-extrabold text-gray-900">{stats?.totalInstitutions || 0}</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                        <BookX className="w-24 h-24 text-green-600" />
                    </div>
                    <div className="relative z-10 flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                            <BookX className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Courses</p>
                    </div>
                    <p className="relative z-10 text-5xl font-extrabold text-gray-900">{stats?.totalCourses || 0}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">Recently Joined Users</h2>
                    <Link href="/admin/users" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                        View Directory <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</th>
                                <th scope="col" className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {users.slice(0, 5).map((u: any) => (
                                <tr key={u._id} className="hover:bg-gray-50">
                                    <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">{u.email}</td>
                                    <td className="px-8 py-5 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${u.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                                                u.role === 'Institution' ? 'bg-indigo-100 text-indigo-800' :
                                                    'bg-green-100 text-green-800'}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(u.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

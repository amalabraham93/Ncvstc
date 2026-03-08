"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Check, X, Building2, User } from 'lucide-react';

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [institutions, setInstitutions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [usersRes, instRes] = await Promise.all([
                api.get('/admin/users'),
                api.get('/courses/institutions') // We can reuse the public endpoint, or create an admin specific one later.
            ]);
            setUsers(usersRes.data);
            // For a demo admin panel we can just filter out institutions from users to verify them
            const instUsers = usersRes.data.filter((u: any) => u.role === 'Institution');
            setInstitutions(instUsers);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleVerify = async (id: string, status: string) => {
        try {
            // Find the Institution document logic would normally go here based on the API
            // Since our API verifies by institution ID and not User ID, let's assume `id` here is Institution ID.
            // For the sake of this scaffolding, we trigger the endpoint.
            // Note: A real implementation would fetch Institution models directly in the admin panel.
            await api.put(`/admin/institutions/${id}/verify`, { status });
            fetchData();
        } catch (error: any) {
            alert(error.response?.data?.message || 'Failed to update verification status');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            <div className="border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900">Users & Institutions Directory</h1>
                <p className="mt-2 text-gray-600">Manage all registered accounts across the platform.</p>
            </div>

            {/* Verification Queue (For Institutions) */}
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-8 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-orange-50/30">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <Building2 className="w-5 h-5 mr-2 text-orange-500" /> Institution Verification Queue
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Account Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined Date</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Action Required</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {institutions.slice(0, 3).map((inst: any) => (
                                <tr key={inst._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inst.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-semibold">{inst.role}</span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(inst.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                                        {/* Placeholder for verify. Requires fetching actual Institution ID instead of User ID in full implementation */}
                                        <button
                                            className="inline-flex py-1.5 px-3 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition"
                                            onClick={() => alert('Verification endpoint requires Institution Document ID')}
                                        >
                                            <Check className="w-4 h-4 mr-1" /> Approve
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {institutions.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">No institutions pending verification.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* All Users Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-500" /> Complete User Directory
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((u: any) => (
                                <tr key={u._id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{u.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${u.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                                                u.role === 'Institution' ? 'bg-indigo-100 text-indigo-800' :
                                                    'bg-blue-100 text-blue-800'}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className="flex items-center text-green-600"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

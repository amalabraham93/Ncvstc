"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Check, X } from 'lucide-react';

export default function InstitutionAdmissions() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchApplications = async () => {
        try {
            const res = await api.get('/institutions/applications');
            setApplications(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleStatusUpdate = async (appId: string, newStatus: string) => {
        try {
            await api.put(`/institutions/applications/${appId}/status`, { status: newStatus });
            // Refresh list
            fetchApplications();
        } catch (error: any) {
            alert(error.response?.data?.message || 'Failed to update status');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            <div className="border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900">Admissions Management</h1>
                <p className="mt-2 text-gray-600">Review student applications and manage enrollments.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {applications.map((app: any) => (
                                <tr key={app._id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium text-gray-900">{app.studentId?.firstName} {app.studentId?.lastName}</div>
                                        <a href={`mailto:app.studentId?.email`} className="text-sm text-blue-600 hover:underline">Contact applicant</a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{app.courseId?.title}</div>
                                        <div className="text-xs text-gray-500">ID: {app.courseId?._id?.substring(0, 8)}...</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(app.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                                app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                                    app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'}`}
                                        >
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                        {app.status === 'Pending' || app.status === 'Under Review' ? (
                                            <>
                                                <button
                                                    onClick={() => handleStatusUpdate(app._id, 'Approved')}
                                                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                                                >
                                                    <Check className="w-3 h-3 mr-1" /> Approve
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(app._id, 'Rejected')}
                                                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                                                >
                                                    <X className="w-3 h-3 mr-1" /> Reject
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-400 text-xs italic">Reviewed</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {applications.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No applications received yet.
                    </div>
                )}
            </div>
        </div>
    );
}

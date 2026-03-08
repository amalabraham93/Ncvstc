"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';

export default function ApplicationsPage() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const appRes = await api.get('/students/applications');
                setApplications(appRes.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchApplications();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
                <p className="mt-2 text-gray-600">Track the status of your course applications.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {applications.map((app: any) => (
                        <div key={app._id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{app.courseId?.title}</h3>
                                <p className="text-md text-gray-600 mb-1">{app.institutionId?.name}</p>
                                <div className="text-sm text-gray-400">
                                    Applied on: {new Date(app.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-center
                  ${app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                        app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                            app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'}`}
                                >
                                    {app.status}
                                </span>
                                <Link href={`/course/${app.courseId?._id}`} className="text-sm text-blue-600 font-medium hover:underline">
                                    View Course Details
                                </Link>
                            </div>
                        </div>
                    ))}
                    {applications.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            You haven't applied to any courses yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

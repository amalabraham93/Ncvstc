"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import { BookOpen, CheckCircle, FileText } from 'lucide-react';

export default function StudentDashboard() {
    const [profile, setProfile] = useState<any>(null);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profRes, appRes] = await Promise.all([
                    api.get('/students/profile'),
                    api.get('/students/applications')
                ]);
                setProfile(profRes.data);
                setApplications(appRes.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {profile?.firstName}!</h1>
                <p className="mt-2 text-gray-600">Here is an overview of your academic journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Applications</p>
                        <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Approved Courses</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {applications.filter((a: any) => a.status === 'Approved').length}
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Saved Courses</p>
                        <p className="text-2xl font-bold text-gray-900">{profile?.savedCourses?.length || 0}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                    <Link href="/student/applications" className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</Link>
                </div>
                <div className="divide-y divide-gray-100">
                    {applications.slice(0, 5).map((app: any) => (
                        <div key={app._id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{app.courseId?.title}</h3>
                                <p className="text-sm text-gray-500">{app.institutionId?.name}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                ${app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                    app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                        app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'}`}
                            >
                                {app.status}
                            </span>
                        </div>
                    ))}
                    {applications.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No applications found. <Link href="/explore/courses" className="text-blue-600">Browse courses</Link> to apply.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

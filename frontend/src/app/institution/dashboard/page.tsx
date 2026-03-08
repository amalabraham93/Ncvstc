"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import { Book, CheckCircle, Clock, Users } from 'lucide-react';

export default function InstitutionDashboard() {
    const [profile, setProfile] = useState<any>(null);
    const [courses, setCourses] = useState([]);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profRes, courseRes, appRes] = await Promise.all([
                    api.get('/institutions/profile'),
                    api.get('/institutions/courses'),
                    api.get('/institutions/applications')
                ]);
                setProfile(profRes.data);
                setCourses(courseRes.data);
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
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome, {profile?.name}</h1>
                    <p className="mt-2 text-gray-600">Institution Dashboard Overview</p>
                </div>
                {profile?.verificationStatus === 'Pending' && (
                    <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> Verification Pending
                    </div>
                )}
                {profile?.verificationStatus === 'Approved' && (
                    <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" /> Verified Institution
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <Book className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Active Courses</p>
                        <p className="text-3xl font-bold text-gray-900">{courses.length}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Applicants</p>
                        <p className="text-3xl font-bold text-gray-900">
                            {applications.length}
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Admitted Students</p>
                        <p className="text-3xl font-bold text-gray-900">
                            {applications.filter((a: any) => a.status === 'Approved').length}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                        <Link href="/institution/applications" className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {applications.slice(0, 5).map((app: any) => (
                            <div key={app._id} className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">{app.studentId?.firstName} {app.studentId?.lastName}</h3>
                                    <p className="text-sm text-gray-500">{app.courseId?.title}</p>
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
                            <div className="p-8 text-center text-gray-500 text-sm">No applications yet.</div>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                        <Link href="/institution/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700">Manage</Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {courses.slice(0, 5).map((course: any) => (
                            <div key={course._id} className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                                    <p className="text-sm text-gray-500">₹{course.fees} • {course.durationMonths} Months</p>
                                </div>
                            </div>
                        ))}
                        {courses.length === 0 && (
                            <div className="p-8 text-center text-gray-500 text-sm">No courses created yet.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

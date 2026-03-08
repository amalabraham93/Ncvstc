"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import api from '@/lib/api';
import { useAuthStore } from '@/lib/store';
import { Clock, IndianRupee, MapPin, Building2, Book, CheckCircle } from 'lucide-react';

export default function CourseDetails() {
    const { id } = useParams();
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [applying, setApplying] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await api.get(`/courses/${id}`);
                setCourse(res.data);
            } catch (error) {
                console.error('Failed to fetch course details:', error);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchCourse();
    }, [id]);

    const handleApply = async () => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        if (user?.role !== 'Student') {
            alert('Only students can apply for courses.');
            return;
        }

        try {
            setApplying(true);
            await api.post('/students/apply', { courseId: id });
            setSuccessMsg('Successfully applied to the course!');
        } catch (error: any) {
            alert(error.response?.data?.message || 'Failed to apply');
        } finally {
            setApplying(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-32">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-32 text-center text-gray-500">
                Course not found.
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-blue-800 text-blue-100 text-sm font-medium rounded-full">
                                    {course.categoryId?.name}
                                </span>
                                <span className="flex items-center text-blue-200 text-sm">
                                    <Building2 className="w-4 h-4 mr-1" />
                                    {course.institutionId?.name}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{course.title}</h1>
                            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                                {course.description}
                            </p>
                        </div>

                        {/* Quick Action Card on Desktop */}
                        <div className="w-full md:w-80 bg-white text-gray-900 rounded-2xl shadow-xl p-6 hidden md:block mt-8 md:mt-0">
                            <div className="text-3xl font-bold mb-6">₹{course.fees}</div>
                            {successMsg ? (
                                <div className="p-4 bg-green-50 flex items-center gap-2 text-green-700 rounded-lg">
                                    <CheckCircle className="w-5 h-5" />
                                    {successMsg}
                                </div>
                            ) : (
                                <button
                                    onClick={handleApply}
                                    disabled={applying}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition disabled:opacity-50"
                                >
                                    {applying ? 'Applying...' : 'Apply Now'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Book className="w-6 h-6 text-blue-600" />
                                Requirements & Prerequisites
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {course.requirements || 'No specific prerequisites. Open to all interested candidates with a basic educational background.'}
                            </p>
                        </section>

                        <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Building2 className="w-6 h-6 text-blue-600" />
                                About the Institution
                            </h2>
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    {course.institutionId?.logoUrl ? (
                                        <img src={course.institutionId.logoUrl} alt={course.institutionId.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                        <Building2 className="w-8 h-8" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.institutionId?.name}</h3>
                                    <p className="text-gray-600 mb-4">{course.institutionId?.description || 'A verified partner institution of NCVSTC.'}</p>
                                    {course.institutionId?.address && (
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {course.institutionId?.address}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar (Mobile / details) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm md:hidden">
                            <div className="text-3xl font-bold mb-6">₹{course.fees}</div>
                            {successMsg ? (
                                <div className="p-4 bg-green-50 flex items-center gap-2 text-green-700 rounded-lg">
                                    <CheckCircle className="w-5 h-5" />
                                    {successMsg}
                                </div>
                            ) : (
                                <button
                                    onClick={handleApply}
                                    disabled={applying}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition disabled:opacity-50"
                                >
                                    {applying ? 'Applying...' : 'Apply Now'}
                                </button>
                            )}
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Course Details</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-600">
                                    <Clock className="w-5 h-5 mr-3 text-blue-600" />
                                    <span className="font-medium">{course.durationMonths} Months</span>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <IndianRupee className="w-5 h-5 mr-3 text-blue-600" />
                                    <span className="font-medium">Total Fees: ₹{course.fees}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

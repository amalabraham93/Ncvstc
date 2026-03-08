"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Search, MapPin, Clock, IndianRupee } from 'lucide-react';

export default function ExploreCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await api.get('/courses');
                setCourses(res.data);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Explore Courses</h1>
                    <p className="mt-2 text-gray-600">Discover job-ready vocational skills and training.</p>
                </div>
                <div className="mt-4 md:mt-0 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full md:w-80"
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.length === 0 ? (
                        <div className="col-span-1 border md:col-span-3 text-center py-20 text-gray-500 bg-gray-50 rounded-xl">
                            No courses found right now.
                        </div>
                    ) : (
                        courses.map((course: any) => (
                            <div key={course._id} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
                                <div className="h-48 bg-gray-200 relative">
                                    {/* Placeholder for course image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                        <span className="text-blue-300 font-semibold">{course.title.substring(0, 2).toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                                            {course.categoryId?.name || 'Category'}
                                        </span>
                                        <span className="text-sm font-medium text-green-600">Active</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-2">{course.description}</p>

                                    <div className="flex flex-col space-y-2 mb-6 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {course.durationMonths} Months Duration
                                        </div>
                                        <div className="flex items-center">
                                            <IndianRupee className="w-4 h-4 mr-2" />
                                            ₹{course.fees}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {course.institutionId?.name || 'Institution'}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/course/${course._id}`}
                                        className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

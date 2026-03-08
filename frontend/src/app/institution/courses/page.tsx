"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plus } from 'lucide-react';

const courseSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),
    description: z.string().min(10),
    categoryId: z.string().min(24, 'Please select a valid category'),
    durationMonths: z.number().positive(),
    fees: z.number().nonnegative(),
    requirements: z.string().optional()
});

type CourseForm = z.infer<typeof courseSchema>;

export default function InstitutionCourses() {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const { register, handleSubmit, reset } = useForm<CourseForm>({
        resolver: zodResolver(courseSchema)
    });

    const fetchCourses = async () => {
        try {
            const [courseRes, catRes] = await Promise.all([
                api.get('/institutions/courses'),
                api.get('/courses/categories')
            ]);
            setCourses(courseRes.data);
            setCategories(catRes.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const onSubmit = async (data: CourseForm) => {
        try {
            await api.post('/institutions/courses', data);
            setShowForm(false);
            reset();
            fetchCourses();
        } catch (err: any) {
            alert(err.response?.data?.message || 'Failed to create course');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Manage Courses</h1>
                    <p className="mt-2 text-gray-600">Create and modify the training programs you offer.</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition shadow-sm"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    {showForm ? 'Cancel' : 'Add New Course'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-6 text-gray-900 border-b pb-4">Create New Course</h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                                <input type="text" {...register('title')} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Advanced Web Development" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                <input type="text" {...register('slug')} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. advanced-web-dev" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea {...register('description')} rows={3} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Detailed course description..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category (ID)</label>
                                {/* Simplified for demo. In prod, use a select dropdown mapping to category IDs */}
                                <input type="text" {...register('categoryId')} className="w-full px-3 py-2 border rounded-md placeholder-gray-400" placeholder="Paste Category Object ID here" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Months)</label>
                                <input type="number" {...register('durationMonths', { valueAsNumber: true })} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" min="1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Total Fees (₹)</label>
                                <input type="number" {...register('fees', { valueAsNumber: true })} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" min="0" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Prerequisites</label>
                                <input type="text" {...register('requirements')} className="w-full px-3 py-2 border rounded-md" placeholder="e.g. Basic knowledge of HTML, 10th Pass" />
                            </div>
                        </div>
                        <div className="flex justify-end pt-4">
                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Save Course</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {courses.map((course: any) => (
                                <tr key={course._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium text-gray-900">{course.title}</div>
                                        <div className="text-sm text-gray-500">{course.categoryId?.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {course.durationMonths} Months
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{course.fees}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                                        <button className="text-red-600 hover:text-red-900">Archive</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {courses.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No courses created yet. Click "Add New Course" to get started.
                    </div>
                )}
            </div>
        </div>
    );
}

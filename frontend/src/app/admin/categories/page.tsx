"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useForm } from 'react-hook-form';
import { Tags, Plus } from 'lucide-react';

export default function AdminCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const fetchCategories = async () => {
        try {
            const res = await api.get('/courses/categories');
            setCategories(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const onSubmit = async (data: any) => {
        try {
            await api.post('/admin/categories', data);
            setShowForm(false);
            reset();
            fetchCategories();
        } catch (err: any) {
            alert(err.response?.data?.message || 'Failed to create category');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-12">
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Course Categories</h1>
                    <p className="mt-2 text-gray-600">Manage the core categorization system for the platform.</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium transition shadow-sm"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    {showForm ? 'Cancel' : 'New Category'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Create New Category</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                                <input type="text" {...register('name')} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. IT & Software" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                <input type="text" {...register('slug')} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. it-software" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea {...register('description')} rows={3} className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="A short description of this category..." />
                            </div>
                        </div>
                        <div className="flex justify-end pt-4">
                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">Submit Category</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center">
                    <Tags className="w-5 h-5 mr-2 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">Current Categories</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    {categories.map((cat: any) => (
                        <div key={cat._id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-gray-900 text-lg">{cat.name}</h3>
                                    <code className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">/{cat.slug}</code>
                                </div>
                                <p className="text-sm text-gray-500">{cat.description}</p>
                                <div className="text-xs text-gray-400 font-mono mt-2">ID: {cat._id}</div>
                            </div>
                        </div>
                    ))}
                    {categories.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            No categories found. Create one to get started.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

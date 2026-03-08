"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useForm } from 'react-hook-form';

export default function InstitutionProfile() {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/institutions/profile');
                setProfile(res.data);
                reset(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [reset]);

    const onSubmit = async (data: any) => {
        try {
            await api.put('/institutions/profile', data);
            alert('Profile updated successfully!');
        } catch (err: any) {
            alert(err.response?.data?.message || 'Failed to update profile');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Center Profile</h1>
                <p className="mt-2 text-gray-600">Manage your institution's public profile data.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Institution Name</label>
                            <input type="text" {...register('name')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                            <input type="text" defaultValue={profile?.registrationNumber} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 cursor-not-allowed" disabled />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea {...register('description')} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="About your institution..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Logo URL</label>
                            <input type="text" {...register('logoUrl')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="https://example.com/logo.png" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Website URL</label>
                            <input type="url" {...register('website')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="https://example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                            <input type="email" {...register('contactEmail')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" {...register('phone')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" {...register('address')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition">
                            Save Profile Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

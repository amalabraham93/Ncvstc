"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function StudentSettings() {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/students/profile');
                setProfile(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
                <p className="mt-2 text-gray-600">Manage your personal information.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" defaultValue={profile?.firstName} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 cursor-not-allowed" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" defaultValue={profile?.lastName} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 cursor-not-allowed" disabled />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add phone number" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <button type="button" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

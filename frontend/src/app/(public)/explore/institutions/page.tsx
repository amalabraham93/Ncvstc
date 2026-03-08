"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Search, Building2, CheckCircle2 } from 'lucide-react';

export default function ExploreInstitutions() {
    const [institutions, setInstitutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstitutions = async () => {
            try {
                const res = await api.get('/courses/institutions');
                setInstitutions(res.data);
            } catch (error) {
                console.error('Failed to fetch institutions:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchInstitutions();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Verified Institutions</h1>
                    <p className="mt-2 text-gray-600">Browse official training partners and vocational centers.</p>
                </div>
                <div className="mt-4 md:mt-0 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search institutions..."
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
                    {institutions.length === 0 ? (
                        <div className="col-span-1 border md:col-span-3 text-center py-20 text-gray-500 bg-gray-50 rounded-xl">
                            No verified institutions found right now.
                        </div>
                    ) : (
                        institutions.map((inst: any) => (
                            <div key={inst._id} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                                        {inst.logoUrl ? (
                                            <img src={inst.logoUrl} alt={inst.name} className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <Building2 className="w-8 h-8" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-1">
                                            {inst.name}
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-3">
                                    {inst.description || 'Verified vocational training institution partnered with NCVSTC.'}
                                </p>

                                <Link
                                    href={`/explore/courses?institutionId=${inst._id}`}
                                    className="w-full text-center px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition"
                                >
                                    View Courses
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

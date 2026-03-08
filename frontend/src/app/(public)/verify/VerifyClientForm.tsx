"use client";

import React, { useState } from 'react';
import api from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, FileText, Calendar, Building2, GraduationCap } from 'lucide-react';

export default function VerifyClientForm() {
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!enrollmentNo.trim()) {
            setError('Please enter an enrollment number');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await api.get(`/students/verify/${enrollmentNo}`);
            setResult(response.data);
        } catch (err: any) {
            console.error('Verification error:', err);
            setError(err.response?.data?.message || 'Verification failed. No record found for this enrollment number.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <form onSubmit={handleVerify} className="space-y-6">
                <div>
                    <label htmlFor="enrollmentNo" className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">
                        Enrollment / Registration No.
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="enrollmentNo"
                            value={enrollmentNo}
                            onChange={(e) => setEnrollmentNo(e.target.value)}
                            className="w-full bg-[#FAFBFF] border-2 border-[#DDE3F0] rounded-lg px-5 py-4 text-lg text-[#0F2347] font-bold tracking-widest focus:outline-none focus:border-[#0F7B6C] focus:ring-0 transition-all font-mono placeholder:text-[#A0ABC0] placeholder:font-sans placeholder:tracking-normal placeholder:font-normal"
                            placeholder="e.g. STU123456"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-50">
                            #
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFBFF] border border-[#EEF2FA] rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="captcha" className="w-5 h-5 text-[#0F7B6C] rounded border-gray-300 focus:ring-[#0F7B6C] cursor-pointer" required />
                        <label htmlFor="captcha" className="text-sm font-medium text-[#4A5568] cursor-pointer">
                            I am not a robot
                        </label>
                    </div>
                    <div className="w-8 h-8 opacity-30 text-gray-400">
                        <CheckCircle2 className="w-full h-full" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0F7B6C] text-white rounded-lg font-bold text-base tracking-wide py-4 transition-all hover:bg-[#13A090] shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                    {loading ? 'Verifying...' : 'Verify Now'}
                    {!loading && <span>→</span>}
                </button>
            </form>

            {/* Error Message */}
            {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Verification Failed</h4>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                </div>
            )}

            {/* Success Result */}
            {result && result.student && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl overflow-hidden">
                        <div className="bg-emerald-600 px-6 py-4 flex items-center gap-3 text-white">
                            <CheckCircle2 className="w-6 h-6" />
                            <h3 className="font-bold text-lg">Verified Authentic Record</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Student Name</p>
                                    <p className="font-bold text-navy-dark text-lg capitalize">{result.student.firstName} {result.student.lastName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Enrollment Number</p>
                                    <p className="font-mono font-bold text-navy-dark">{result.student.enrollmentNo}</p>
                                </div>
                            </div>

                            <h4 className="font-bold text-navy-dark mb-4 border-b pb-2">Issued Certificates</h4>

                            {result.certificates && result.certificates.length > 0 ? (
                                <div className="space-y-4">
                                    {result.certificates.map((cert: any, idx: number) => (
                                        <Card key={idx} className="border-emerald-100 shadow-sm">
                                            <CardContent className="p-4">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                    <div>
                                                        <h5 className="font-bold text-navy-dark text-lg flex items-center gap-2 mb-2">
                                                            <GraduationCap className="w-5 h-5 text-emerald-600" />
                                                            {cert.course?.title}
                                                        </h5>
                                                        <div className="space-y-2 text-sm text-gray-600">
                                                            <p className="flex items-center gap-2">
                                                                <Building2 className="w-4 h-4" />
                                                                {cert.institution?.name}
                                                            </p>
                                                            <p className="flex items-center gap-2">
                                                                <FileText className="w-4 h-4" />
                                                                Status: <span className="font-medium text-emerald-700">{cert.status}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full h-fit">
                                                        <Calendar className="w-4 h-4" />
                                                        {new Date(cert.issuedDate).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No approved certificates found for this student.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

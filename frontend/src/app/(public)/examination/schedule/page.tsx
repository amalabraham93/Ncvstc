import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exam Schedule | NCVSTC',
};

export default function ExamSchedulePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Examination Schedule</h1>
                    <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Access the latest timetable for upcoming theory and practical examinations for all vocational courses.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <Card className="shadow-sm border-t-4 border-t-teal-500 h-full">
                            <CardHeader className="bg-white border-b border-gray-100 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl text-navy-dark">Upcoming Exam cycles</CardTitle>
                                        <p className="text-sm text-gray-500 mt-1">Academic Year 2025-2026</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-teal-50 p-2 rounded-lg text-teal-600 h-fit">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Main Examination Timing</h3>
                                            <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                The final examination in theory and practical are held at the end of the academic year session in <strong className="text-navy-dark">March / April</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-amber-50 p-2 rounded-lg text-amber-600 h-fit">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Supplementary Exams</h3>
                                            <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                Supplementary exams are conducted in the Calendar year <strong className="text-navy-dark">September / October</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-50 p-2 rounded-lg text-navy-mid h-fit">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Medium of Examination</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                The medium of each education programme will be according to their Regional Language/State Language/Country Language. Question Papers will be published only in English/Hindi. Students can give answers in English/Hindi or their state language, provided it is mentioned earlier in the examination form.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-navy-dark rounded-xl p-6 text-white shadow-md">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-amber-400" />
                                Important Notice
                            </h3>
                            <ul className="space-y-4 text-sm text-blue-100">
                                <li className="flex gap-2">
                                    <span className="text-amber-400">•</span>
                                    <span>Detailed timetables will be published 30 days prior to the commencement of exams.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-amber-400">•</span>
                                    <span>Admit cards must be downloaded from the student portal.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-amber-400">•</span>
                                    <span>Students must report 30 minutes before the scheduled time.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy-dark mb-4 filter">Downloads</h3>
                            <button className="w-full bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-3 rounded-md transition-colors border border-teal-200 flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Download Tentative Schedule
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

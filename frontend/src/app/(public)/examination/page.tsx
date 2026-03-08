import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, MapPin, Award, BookOpen, Clock, FileCheck, Info } from 'lucide-react';

export const metadata = {
    title: 'Examination & Results | NCVSTC',
    description: 'Examination schedule, centers, and results related information for NCVSTC students.',
};

export default function ExaminationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Examination & Results</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Find all the necessary information regarding your exams, from schedules and centers to grading and certification policies.
                    </p>
                </div>

                {/* 3 Main Action Cards */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 border-t-4 border-t-teal-500">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 text-teal-600">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Exam Schedule</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 mb-6">Access the latest timetable for upcoming theory and practical examinations for all courses.</p>
                                <button className="bg-navy-dark text-white px-6 py-2 rounded-md hover:bg-navy-mid transition-colors font-medium">View Schedule</button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 border-t-4 border-t-amber-500">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-600">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Exam Center</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 mb-6">Locate your designated examination center and find directions to ensure you arrive on time.</p>
                                <button className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-colors font-medium">Find Center</button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 border-t-4 border-t-navy-mid">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-navy-mid">
                                    <Award className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Results</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600 mb-6">Check your examination results and download your provisional marksheet securely online.</p>
                                <button className="bg-navy-mid text-white px-6 py-2 rounded-md hover:bg-navy-light hover:text-navy-dark transition-colors font-medium">Check Results</button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Certification Policy & Guidelines */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-navy-dark px-6 py-4 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <FileCheck className="w-6 h-6 text-amber-500" />
                                Certification Policy & Examination Rules
                            </h2>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Left Column: Guidelines */}
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-teal-50 p-2 rounded-lg text-teal-600 h-fit">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Examination Timing</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                The final examination in theory and practical are held at the end of the academic year session in <strong>March/April</strong> and supplementary exams are conducted in the Calendar year <strong>September/October</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-amber-50 p-2 rounded-lg text-amber-600 h-fit">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Certification</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Every successfully declared student will be awarded a Diploma/Degree Certificate by the NCVSTC Vocational Educational Council in each education programme. As per rule 3b-9.
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

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-gray-100 p-2 rounded-lg text-gray-600 h-fit">
                                            <Info className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-dark mb-2">Age & Sex Policy</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                There will be no restriction of age, caste, sex, region, country under the skill development programme, vocational education, and distance education system of the board.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Rules Table */}
                                <div>
                                    <h3 className="text-xl font-bold text-navy-dark mb-4">Passing Criteria & Grading</h3>
                                    <div className="overflow-hidden rounded-lg border border-gray-200">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="px-4 py-3 font-semibold text-navy-dark">Criteria</th>
                                                    <th className="px-4 py-3 font-semibold text-navy-dark">Details</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr className="bg-white">
                                                    <td className="px-4 py-3 font-medium text-gray-700">Minimum Passing Marks</td>
                                                    <td className="px-4 py-3 text-gray-600">A candidate is declared successful on scoring a minimum of <strong>50% marks in each paper</strong> (Theory & Practical). As per rule 3b-9.</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-gray-700">Exam Mode</td>
                                                    <td className="px-4 py-3 text-gray-600">Offline / Online (Based on Course & Affiliation Guidelines)</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="px-4 py-3 font-medium text-gray-700">Attestation of Certificates</td>
                                                    <td className="px-4 py-3 text-gray-600">NCVSTC Certificates get attestation from Foreign Embassies for Education and Employment purposes. Widely used in Public Sectors, MNCs & Private Sectors.</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-gray-700">PSC/UPSC Suitability</td>
                                                    <td className="px-4 py-3 text-gray-600">Being a NON-UGC Programme, the certificates are not recommended for PSC/UPSC Appointments.</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="px-4 py-3 font-medium text-gray-700">Legal Recognition</td>
                                                    <td className="px-4 py-3 text-gray-600">Under Human Rights Protection Act 1993, autonomous bodies have special protection. Valid for skill & employment purposes.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-6 bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                        <h4 className="font-bold text-amber-800 mb-1">Important Note:</h4>
                                        <p className="text-sm text-amber-700">
                                            Any change of the rules & regulation directions by the exam body shall be acceptable to the student. If any document found bogus, the admission and result should be canceled automatically without any notice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

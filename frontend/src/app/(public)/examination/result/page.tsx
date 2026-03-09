import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exam Results | NCVSTC',
};

export default function ExamResultPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Examination Results</h1>
                    <div className="w-24 h-1 bg-navy-mid mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Check your examination results and understand the grading criteria and certification policies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <Card className="shadow-lg border-t-4 border-t-navy-mid">
                        <CardHeader className="bg-white border-b border-gray-100 pb-6 text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-xl flex items-center justify-center text-navy-mid mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-2xl text-navy-dark">Result Portal</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-8 text-center flex flex-col justify-center items-center h-[250px]">
                            <p className="text-gray-600 mb-6 max-w-sm">
                                Provisional marksheets and results are published securely on the student dashboard.
                            </p>
                            <button className="bg-navy-mid text-white px-8 py-3 rounded-lg hover:bg-navy-dark transition-colors font-bold shadow-md">
                                Login to Check Results
                            </button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader className="bg-navy-dark text-white rounded-t-xl">
                            <CardTitle className="flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-amber-400" />
                                Passing Criteria & Grading
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-gray-700 w-1/3">Minimum Passing Marks</td>
                                            <td className="px-6 py-4 text-gray-600">A candidate is declared successful on scoring a minimum of <strong>50% marks in each paper</strong> (Theory & Practical). As per rule 3b-9.</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-700">Certification</td>
                                            <td className="px-6 py-4 text-gray-600">Successfully declared students will be awarded a Diploma/Degree Certificate by the NCVSTC Vocational Educational Council.</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-gray-700">Attestation</td>
                                            <td className="px-6 py-4 text-gray-600">Certificates get attestation from Foreign Embassies for Education and Employment purposes. Widely used in Public Sectors, MNCs & Private Sectors.</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-700">PSC/UPSC Suitability</td>
                                            <td className="px-6 py-4 text-gray-600">Being a NON-UGC Programme, the certificates are not recommended for PSC/UPSC Appointments.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-navy-dark mb-2">Important Note on Integrity</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Any change of the rules & regulation directions by the exam body shall be acceptable to the student. If any document is found bogus, the admission and result will be canceled automatically without any prior notice. Under Human Rights Protection Act 1993, autonomous bodies have special protection. Certificates are valid for skill & employment purposes.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

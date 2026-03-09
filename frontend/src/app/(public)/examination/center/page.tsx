import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, Navigation } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exam Centers | NCVSTC',
};

export default function ExamCenterPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Exam Centers</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Locate your designated examination center and find directions to ensure you arrive on time for your assessments.
                    </p>
                </div>

                <Card className="shadow-lg border-t-4 border-t-amber-500 mb-12">
                    <CardHeader className="bg-white border-b border-gray-100 pb-6 text-center">
                        <div className="w-16 h-16 mx-auto bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-navy-dark">Find Your Assigned Center</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 pb-10">
                        <div className="max-w-md mx-auto">
                            <p className="text-center text-gray-600 mb-8">
                                Exam centers are generated dynamically based on your enrollment details. Please enter your roll number to view your designated center location and details.
                            </p>

                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-shadow"
                                    placeholder="Enter Roll / Registration Number"
                                />
                            </div>

                            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                                <Navigation className="w-5 h-5" />
                                Locate Center
                            </button>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-white rounded-xl p-6 border border-gray-200 text-sm text-gray-600 shadow-sm">
                    <h4 className="font-bold text-navy-dark mb-2">Important Guidelines regarding Centers:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>The examination center allocated by the controller of examinations is final and binding.</li>
                        <li>Requests for changing the examination center will generally not be entertained.</li>
                        <li>Candidates must carry a valid photo ID along with their Admit Card to the center.</li>
                        <li>Mobile phones and electronic gadgets are strictly prohibited inside the center.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

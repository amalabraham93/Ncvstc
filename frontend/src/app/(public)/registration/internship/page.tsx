import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Internship Application | NCVSTC',
};

export default function InternshipRegistrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Internship Application</h1>
                    <div className="w-24 h-1 bg-navy-mid mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Apply for hands-on, practical internship opportunities associated with your technical or vocational training. Build industry-ready skills that employers demand.
                    </p>
                </div>

                <Card className="hover:shadow-lg transition-all border-l-4 border-l-navy-mid flex flex-col mb-12">
                    <CardHeader>
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-navy-mid mb-6 mx-auto">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-navy-dark text-center">Join Our Internship Programs</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center text-center pb-10">
                        <p className="text-gray-600 mb-8 max-w-lg">
                            Through our vast network of industry partners and MSME affiliations, we actively facilitate apprenticeship opportunities (NCVT MIS) for students looking to gain critical on-the-job experience.
                        </p>

                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl w-full text-left mb-8 shadow-inner text-sm text-gray-700">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><span className="text-navy-mid font-bold">✔</span> Real-world practical exposure</li>
                                <li className="flex items-center gap-2"><span className="text-navy-mid font-bold">✔</span> Enhances formal academic portfolio</li>
                                <li className="flex items-center gap-2"><span className="text-navy-mid font-bold">✔</span> Direct pathways to full-time employment</li>
                                <li className="flex items-center gap-2"><span className="text-navy-mid font-bold">✔</span> Supported by Career & Placement Cell</li>
                            </ul>
                        </div>

                        <button className="bg-navy-mid text-white px-8 py-4 rounded-lg hover:bg-navy-dark transition-colors font-bold text-lg shadow-md w-full sm:w-auto">
                            Apply for Internship
                        </button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

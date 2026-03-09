import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Building, Mail, AlertCircle, CreditCard } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Offline Registration | NCVSTC',
};

export default function OfflineRegistrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Offline Registration</h1>
                    <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Download the application form, fill it out manually, and submit it along with the required documents to your nearest NCVSTC regional office or study center.
                    </p>
                </div>

                <Card className="hover:shadow-lg transition-all border-l-4 border-l-teal-500 flex flex-col mb-12">
                    <CardHeader>
                        <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 mx-auto">
                            <Download className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-navy-dark text-center">Application Form Download</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center text-center pb-10">
                        <p className="text-gray-600 mb-8 max-w-lg">
                            Ensure all details are filled in BLOCK LETTERS. Attach recent passport photographs and self-attested copies of previous educational certificates.
                        </p>
                        <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-bold text-lg shadow-md">
                            Download Application Form (PDF)
                        </button>
                    </CardContent>
                </Card>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-navy-dark px-8 py-6 flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-full text-white">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Fee & Payment Information</h2>
                            <p className="text-blue-100">Preferred payment options for offline submissions</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-bold text-navy-dark mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5 text-amber-600" />
                                Demand Draft Details
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Payments via Demand Draft must be made favoring:
                            </p>
                            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Payee Name</span>
                                <strong className="text-xl text-navy-dark">"NAVIGATING CAREER FOR VOCATIONAL SKILL TECHNOLOGY COUNCIL"</strong>
                                <span className="block text-gray-600 mt-2 font-medium">payable at Chennai</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
                            <div>
                                <h4 className="font-bold text-navy-dark mb-2 text-lg">For Centre Coordinators</h4>
                                <p>
                                    Centre co-ordinators can deposit the affiliation and academic fees of students who have already taken admission and have not deposited full payment.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-navy-dark mb-2 text-lg flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-teal-600" />
                                    Mandatory Reporting
                                </h4>
                                <p>
                                    After depositing the fee in the bank account, the fee deposit details and/or slips <strong>must be communicated</strong> through Fee intimation slips.
                                </p>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-100" />

                        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="w-10 h-10 bg-navy-light/10 rounded-full flex items-center justify-center text-navy-mid flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-navy-dark">Email Intimation</h5>
                                <p className="text-sm text-gray-600">The centre co-ordinator can also email Fee intimation details to <a href="mailto:info@ncvrtindia.org" className="text-teal-600 font-medium hover:underline">info@ncvrtindia.org</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

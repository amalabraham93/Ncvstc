import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Monitor, GraduationCap, CreditCard, Building, Mail, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Registration | NCVSTC',
    description: 'Registration options and payment details for NCVSTC courses and internships.',
};

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Registration</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Choose your preferred method to register for courses, or apply for our internship programs. Please ensure you follow the payment guidelines accurately.
                    </p>
                </div>

                {/* 3 Registration Options */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Offline Registration */}
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-teal-500 flex flex-col">
                            <CardHeader>
                                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                                    <Download className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Offline Registration</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-gray-600 mb-6 flex-1">
                                    Download the application form, fill it out manually, and submit it along with the required documents and fee to your nearest NCVSTC regional office or study center.
                                </p>
                                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors font-medium">
                                    Download Application Form
                                </button>
                            </CardContent>
                        </Card>

                        {/* Online Registration */}
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-amber-500 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                Recommended
                            </div>
                            <CardHeader>
                                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                    <Monitor className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Online Registration</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-gray-600 mb-6 flex-1">
                                    Register quickly and securely through our online portal. Track your application status, upload documents digitally, and complete the process from anywhere.
                                </p>
                                <Link href="/register" className="w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors font-medium text-center block">
                                    Proceed to Online Portal
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Internship Application */}
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-navy-mid flex flex-col">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-navy-mid mb-4">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl text-navy-dark">Internship Application</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-gray-600 mb-6 flex-1">
                                    Apply for hands-on, practical internship opportunities associated with your technical or vocational training. Build industry-ready skills.
                                </p>
                                <button className="w-full bg-navy-mid text-white px-4 py-2 rounded-md hover:bg-navy-dark transition-colors font-medium">
                                    Apply for Internship
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Payment Methods */}
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-navy-dark px-8 py-6 flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-full text-white">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Fee & Payment Information</h2>
                            <p className="text-blue-100">Preferred payment options and official guidelines</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-bold text-navy-dark mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5 text-amber-600" />
                                Demand Draft / Net Banking Payee Details
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The NCVSTC preferred payment option and must be used while making payment by Net Banking and Demand Draft favoring:
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
                                    The centre co-ordinator can deposit the affiliation and academic fees of those students who have already taken admission and have not deposited their full payment at that time.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-navy-dark mb-2 text-lg flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-teal-600" />
                                    Mandatory Reporting
                                </h4>
                                <p>
                                    After depositing the fee in the bank account of NCVSTC, the fee deposit details and/or fee deposit slips <strong>must be communicated</strong> to the NCVSTC through Fee intimation slip / Fee deposit slips.
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
                                <p className="text-sm text-gray-600">The centre co-ordinator can also email the Fee intimation slip details/Fee deposit slips to <a href="mailto:info@ncvrtindia.org" className="text-teal-600 font-medium hover:underline">info@ncvrtindia.org</a></p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}

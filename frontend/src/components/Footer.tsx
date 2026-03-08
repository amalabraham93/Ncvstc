import Link from 'next/link';
import { Camera, FileText, Monitor, CheckSquare, Award } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t bg-navy-dark mt-12 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-300">
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">NCVSTC</h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Navigating Career For Vocational Skill Technology Council - A statutory autonomous body, promoting skill development and vocational training across India.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link href="/programs" className="text-sm hover:text-amber-500 transition-colors">Programs</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-amber-500 transition-colors">Services</Link></li>
                            <li><Link href="/committees" className="text-sm hover:text-amber-500 transition-colors">Committees</Link></li>
                            <li><Link href="/gallery" className="text-sm hover:text-amber-500 transition-colors">Gallery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Students</h4>
                        <ul className="space-y-3">
                            <li><Link href="/registration" className="text-sm hover:text-amber-500 transition-colors">Registration</Link></li>
                            <li><Link href="/examination" className="text-sm hover:text-amber-500 transition-colors">Examination & Results</Link></li>
                            <li><Link href="/verify" className="text-sm hover:text-amber-500 transition-colors">Online Verification</Link></li>
                            <li><Link href="/resources" className="text-sm hover:text-amber-500 transition-colors">Resources & Links</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li><Link href="/contact" className="text-sm hover:text-amber-500 transition-colors">Contact Us</Link></li>
                            <li className="text-sm mt-4">
                                <span className="block text-gray-400 mb-1">Email:</span>
                                <a href="mailto:info@ncvrtindia.org" className="hover:text-amber-500 transition-colors text-white">info@ncvrtindia.org</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} NCVSTC. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

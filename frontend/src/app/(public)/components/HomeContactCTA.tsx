import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function HomeContactCTA() {
    return (
        <section className="bg-[#0F2347] py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(232,146,10,0.1),transparent_50%)]"></div>
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text block */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Support & Affiliation
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to take the next step?
                        </h2>
                        <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg">
                            Whether you're a student looking to enroll in our vocational programs or an institution seeking NCVSTC affiliation, our support team is ready to guide you.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-white">
                                <Phone className="w-5 h-5 text-[#E8920A]" />
                                <span>+91 95853 43052</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Mail className="w-5 h-5 text-[#E8920A]" />
                                <span>info@ncvrtindia.org</span>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <MapPin className="w-5 h-5 text-[#E8920A] mt-1 shrink-0" />
                                <span>Liaison HQ: Pappireddipatti, Dharmapuri – 636905, TN</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-t-4 border-[#0F7B6C] relative">
                        <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-2">Send us an Enquiry</h3>
                        <p className="text-[#4A5568] text-sm mb-6">
                            Fill out our quick contact form and an academic coordinator will get back to you within 24 hours.
                        </p>

                        <div className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0F7B6C]" />
                            <input type="email" placeholder="Email Address" className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0F7B6C]" />
                            <select className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0F7B6C]">
                                <option>General Enquiry</option>
                                <option>Institution Affiliation</option>
                                <option>Student Admission</option>
                            </select>

                            <Link href="/contact" className="w-full block text-center bg-[#E8920A] text-white rounded-md font-bold text-sm tracking-wide py-4 transition-all shadow-md hover:bg-[#C47A08] mt-2">
                                Proceed to Contact Desk
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact & Branches | NCVSTC',
    description: 'NCVSTC contact information, State Programme Offices, and Enquiry forms.',
};

export default function ContactPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-16 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(27,58,107,0.5)_0%,transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Contact & Affiliation</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Connect with our Liaison Office or submit an enquiry for New Institution Affiliation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-[#0F7B6C] mb-4">
                            <div className="w-6 h-0.5 bg-[#0F7B6C]"></div>
                            Get In Touch
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-8">
                            Liaison Office & Support
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-5 items-start p-6 bg-white border border-[#DDE3F0] rounded-xl shadow-sm hover:border-[#13A090] transition-colors">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center text-xl shrink-0 text-[#1B3A6B]">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1B3A6B] mb-2">Liaison Headquarters</h4>
                                    <p className="text-[#4A5568] text-sm leading-relaxed">
                                        4/1958, Samiyapuram Koot Road,<br />
                                        Pappireddipatti, Dharmapuri – 636905,<br />
                                        Tamil Nadu.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start p-6 bg-white border border-[#DDE3F0] rounded-xl shadow-sm hover:border-[#13A090] transition-colors">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center text-xl shrink-0 text-[#1B3A6B]">
                                    📞
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1B3A6B] mb-2">Helpline Support</h4>
                                    <a href="tel:9585343052" className="text-[#4A5568] text-sm hover:text-[#E8920A] transition-colors font-medium">
                                        +91 95853 43052
                                    </a>
                                    <p className="text-xs text-gray-500 mt-1">Mon - Sat, 10:00 AM - 5:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start p-6 bg-white border border-[#DDE3F0] rounded-xl shadow-sm hover:border-[#13A090] transition-colors">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center text-xl shrink-0 text-[#1B3A6B]">
                                    ✉
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1B3A6B] mb-2">Email Directory</h4>
                                    <div className="space-y-1">
                                        <a href="mailto:info@ncvrtindia.org" className="block text-[#4A5568] text-sm hover:text-[#E8920A] transition-colors">
                                            General: info@ncvrtindia.org
                                        </a>
                                        <a href="mailto:affiliation@ncvrtindia.org" className="block text-[#4A5568] text-sm hover:text-[#E8920A] transition-colors">
                                            Affiliation: affiliation@ncvrtindia.org
                                        </a>
                                        <a href="mailto:support@ncvrtindia.org" className="block text-[#4A5568] text-sm hover:text-[#E8920A] transition-colors">
                                            Student Desk: support@ncvrtindia.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start p-6 bg-white border border-[#DDE3F0] rounded-xl shadow-sm hover:border-[#E8920A] transition-colors">
                                <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center text-xl shrink-0 text-[#E8920A]">
                                    💳
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#E8920A] mb-2">Payment Information</h4>
                                    <p className="text-[#4A5568] text-sm leading-relaxed mb-3">
                                        Detailed instructions for Fee Intimation, Net Banking, and issuing Demand Drafts.
                                    </p>
                                    <a href="/registration" className="text-[#1B3A6B] font-bold text-sm tracking-wide hover:underline inline-flex items-center gap-1">
                                        View Payment Guidelines <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-gradient-to-r from-[#1B3A6B] to-[#254F8F] text-white rounded-xl shadow-lg relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-10 text-8xl leading-none font-serif">N</div>
                            <h4 className="font-bold text-lg mb-2 relative z-10 text-[#E8920A]">State Programme Offices (SPOs)</h4>
                            <p className="text-sm text-white/80 leading-relaxed max-w-sm relative z-10">
                                To find the nearest ZRO, DRO or affiliated VTC in your state, please email us your city coordinates or utilize our Institutional Lookup Directory via the Student Portal.
                            </p>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-[#DDE3F0]">
                        <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-2">Send us a Message</h3>
                        <p className="text-[#4A5568] text-sm mb-8">
                            Fill out the form below for affiliation inquiries or general academic questions.
                        </p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C] transition-all" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C] transition-all" placeholder="Enter email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C] transition-all" placeholder="+91" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">Subject</label>
                                    <select className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C] transition-all">
                                        <option>General Enquiry</option>
                                        <option>New VTC Affiliation</option>
                                        <option>Certificate Verification</option>
                                        <option>Examination Schedules</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">Message</label>
                                <textarea rows={5} className="w-full bg-[#FAFBFF] border border-[#EEF2FA] rounded-md px-4 py-3 text-sm text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C] transition-all resize-none" placeholder="How can we assist you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#E8920A] text-white rounded-md font-bold text-sm tracking-wide py-4 transition-all hover:bg-[#C47A08] shadow-md hover:-translate-y-0.5 mt-4">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

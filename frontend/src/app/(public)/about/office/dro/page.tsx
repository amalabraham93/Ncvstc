import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'District Regional Office (DRO) | NCVSTC',
};

export default function DROPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4">
                <div className="max-w-[1280px] mx-auto relative z-10 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#E8920A] mb-4">
                        District Regional Office (DRO)
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>▶</span>
                        <span>District Regional Office (DRO)</span>
                    </div>
                </div>
                {/* Background image overlay */}
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="max-w-xl mx-auto bg-[#F8FAFC] rounded-xl shadow-sm border border-[#EEF2FA] p-8 md:p-12">
                    <div className="space-y-4">
                        <label className="block text-sm font-bold text-[#718096]">
                            Change Your State <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full bg-white border border-[#DDE3F0] rounded-md px-4 py-3 text-[#4A5568] focus:outline-none focus:border-[#0F7B6C] focus:ring-1 focus:ring-[#0F7B6C]">
                            <option value="">Select a State...</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CG">Chhattisgarh</option>
                            <option value="GA">Goa</option>
                            <option value="GJ">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UK">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                        </select>
                        <p className="text-xs text-[#A0AEC0] mt-2">
                            Please select a state to view the District Regional Offices within that region.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

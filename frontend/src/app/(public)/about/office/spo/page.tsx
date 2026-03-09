import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'State Programme Office (SPO) | NCVSTC',
};

export default function SPOPage() {
    const states = [
        { id: 1, name: 'TELANGANA', status: 'View' },
        { id: 2, name: 'ANDHRA PRADESH', status: 'View' },
        { id: 3, name: 'PONDICHERRY', status: 'Register' },
        { id: 4, name: 'ASSAM', status: 'Register' },
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4">
                <div className="max-w-[1280px] mx-auto relative z-10 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#E8920A] mb-4">
                        State Programme Office (SPO)
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>▶</span>
                        <span>State Programme Office (SPO)</span>
                    </div>
                </div>
                {/* Background image overlay */}
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-white rounded-xl shadow-sm border border-[#EEF2FA] overflow-hidden">
                    <div className="p-6 md:p-8 bg-[#F8FAFC] border-b border-[#EEF2FA]">
                        <h2 className="text-2xl font-serif font-bold text-[#4A5568]">State Programme Office (SPO)</h2>
                    </div>
                    <div className="p-4 md:p-8 overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse">
                            <thead>
                                <tr className="bg-white border-b border-[#EEF2FA]">
                                    <th className="py-4 px-6 text-left text-sm font-bold text-[#718096] w-20">#</th>
                                    <th className="py-4 px-6 text-left text-sm font-bold text-[#718096]">State Name</th>
                                    <th className="py-4 px-6 text-left text-sm font-bold text-[#718096] w-32">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {states.map((state) => (
                                    <tr key={state.id} className="border-b border-[#EEF2FA] hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-sm font-bold text-[#4A5568]">{state.id}</td>
                                        <td className="py-4 px-6 text-sm text-[#718096] uppercase">{state.name}</td>
                                        <td className="py-4 px-6 text-sm text-[#718096]">
                                            {state.status === 'View' ? (
                                                <button className="text-[#0F7B6C] hover:text-[#0b5e52] hover:underline font-medium">View</button>
                                            ) : (
                                                <button className="text-[#E8920A] hover:text-[#C47A08] hover:underline font-medium">Register</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-8 pt-8 border-t border-[#EEF2FA] text-sm text-[#718096]">
                            <p>Showing 1 to {states.length} of {states.length} entries</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

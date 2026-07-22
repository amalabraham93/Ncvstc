import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Organization Chart | NCVSTC',
};

export default function OrganizationChartPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(27,58,107,0.5)_0%,transparent_50%)]"></div>
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Organization <span className="text-[#13A090]">Chart</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-white border border-[#DDE3F0] rounded-3xl p-4 md:p-8 shadow-[0_20px_50px_rgba(15,35,71,0.1)] overflow-hidden hover:shadow-[0_20px_50px_rgba(15,35,71,0.15)] transition-shadow duration-300">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex justify-center items-center p-8">
                        {/* We use standard img since Next/Image requires width/height or fill, we'll use standard img for responsive aspect ratio without knowing exact size */}
                        <img 
                            src="/images/org-chart.jpeg" 
                            alt="NCVSTC Board of Council - Organization Chart" 
                            className="w-full h-auto max-w-5xl rounded-xl shadow-lg ring-1 ring-gray-900/5 object-contain"
                        />
                    </div>
                    <div className="mt-8 text-center max-w-3xl mx-auto">
                        <p className="text-gray-600 text-lg">
                            The Governance Structure, Roles, and Responsibilities of the National Council for Vocational Skill Technology Council.
                        </p>
                        <p className="mt-2 text-sm text-[#0F7B6C] font-semibold uppercase tracking-wider">
                            Building Skills • Empowering Careers • Transforming Lives
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

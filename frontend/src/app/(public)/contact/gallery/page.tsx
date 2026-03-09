import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photo Gallery | NCVSTC',
};

export default function GalleryPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-gradient-to-r from-[#0F2347] to-[#1B3A6B] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Media <span className="text-[#13A090]">Gallery</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-[#4A5568] max-w-2xl mx-auto">
                        Explore snapshots from recent NCVSTC events, vocational training seminars, award ceremonies, and institutional branch formations.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Placeholder for actual gallery masonry or grid */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img) => (
                        <div key={img} className="bg-white border border-[#DDE3F0] rounded-xl overflow-hidden shadow-sm group relative aspect-square">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                            {/* In a real scenario, use next/image here */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-4xl text-gray-300">📷</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-sm font-bold">Event Snippet {img}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-6 py-3 border border-[#0F7B6C] text-[#0F7B6C] hover:bg-[#0F7B6C] hover:text-white transition-colors rounded-lg font-bold text-sm">
                        Load More Images
                    </button>
                </div>
            </section>
        </div>
    );
}

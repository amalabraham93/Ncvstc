import React from 'react';
import { Camera } from 'lucide-react';

export const metadata = {
    title: 'Gallery | NCVSTC',
    description: 'Explore our campus, events, and activities through our photo gallery.',
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                        <Camera className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Life at NCVSTC</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Take a visual journey through our vibrant campus, state-of-the-art training centers,
                        and various events shaping the future of our students.
                    </p>
                </div>

                {/* 7-Tile Mosaic Gallery */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 md:h-[600px]">

                        {/* Tile 1: Large Feature (Span 2 cols, 2 rows) */}
                        <div className="group relative rounded-xl overflow-hidden md:col-span-2 md:row-span-2 bg-gradient-to-br from-navy-dark to-navy-mid flex items-center justify-center min-h-[250px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-white font-bold text-xl mb-1">Campus Life</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75">Vibrant student community interactions</p>
                            </div>
                            <span className="text-white/30 font-bold text-2xl uppercase tracking-widest z-0">Campus</span>
                        </div>

                        {/* Tile 2: Top Right Small */}
                        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Workshops</h3>
                            </div>
                            <span className="text-white/30 font-bold text-lg uppercase tracking-wider z-0">Skill</span>
                        </div>

                        {/* Tile 3: Top Right Far */}
                        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Seminars</h3>
                            </div>
                            <span className="text-white/30 font-bold text-lg uppercase tracking-wider z-0">Learn</span>
                        </div>

                        {/* Tile 4: Middle Right Wide (Span 2 cols) */}
                        <div className="group relative rounded-xl overflow-hidden md:col-span-2 bg-gradient-to-r from-blue-700 to-indigo-500 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Practical Training</h3>
                            </div>
                            <span className="text-white/30 font-bold text-xl uppercase tracking-widest z-0">Hands-on</span>
                        </div>

                        {/* Tile 5: Bottom Left Small */}
                        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-600 to-green-400 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Graduation</h3>
                            </div>
                            <span className="text-white/30 font-bold text-lg uppercase tracking-wider z-0">Success</span>
                        </div>

                        {/* Tile 6: Bottom Middle Small */}
                        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-fuchsia-400 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Industry Visits</h3>
                            </div>
                            <span className="text-white/30 font-bold text-lg uppercase tracking-wider z-0">Explore</span>
                        </div>

                        {/* Tile 7: Bottom Right Wide (Span 2 cols) */}
                        <div className="group relative rounded-xl overflow-hidden md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center min-h-[150px] shadow-sm hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                <h3 className="text-white font-bold text-lg">Events & Cultural Fests</h3>
                            </div>
                            <span className="text-white/30 font-bold text-xl uppercase tracking-widest z-0">Festivities</span>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}

'use client';

import React from 'react';

export default function BranchesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden bg-[#0F2347]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2347]/90 to-transparent"></div>

                <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col justify-center h-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide uppercase">
                        Branch List
                    </h1>
                    <div className="flex items-center gap-2 text-[#13A090] text-sm font-medium tracking-wider">
                        <span className="text-white">Home</span>
                        <span>//</span>
                        <span>Branch List</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800080] mb-12 uppercase leading-tight">
                        Welcome to NCVSTC Skill Development Mission
                    </h2>

                    <div className="bg-white">
                        <h3 className="text-red-600 font-bold mb-6 text-sm">
                            *Find Study Centre......
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-[#0F2347] font-bold text-sm mb-2 uppercase">
                                    State
                                </label>
                                <select className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-600 focus:outline-none focus:border-[#0F2347] appearance-none bg-white">
                                    <option value="">Select</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="DL">Delhi</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#0F2347] font-bold text-sm mb-2 uppercase">
                                    District
                                </label>
                                <select className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-600 focus:outline-none focus:border-[#0F2347] appearance-none bg-white">
                                    <option value="">Select</option>
                                </select>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#0F2347] text-white py-3 px-4 rounded-md font-medium hover:bg-[#1B3A6B] transition-colors mt-4"
                            >
                                Search Branch
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

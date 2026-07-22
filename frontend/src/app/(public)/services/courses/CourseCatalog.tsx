'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import coursesData from '@/data/courses.json';

interface SubCourse {
  slNo: string;
  title: string;
  duration: string;
  qualification: string;
}

interface CourseSector {
  id: string;
  sector: string;
  pdfFileName: string;
  subcourseCount: number;
  subcourses: SubCourse[];
}

const sectorImages: Record<string, string> = {
  "accounting-and-finance-education-training-sector": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
  "beauty-and-wellness-training-sector": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
  "computer-and-advanced-software-education-training-sector": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  "computer-hardware-and-networking-training-sector": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
  "fashion-designing-textile-training-sector": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
  "office-mangement-education-sector": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  "communicative-and-soft-skills-education-sector": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  "media-and-photography-training-sector-1": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
  "agriculture-education-training-sector": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
  "bio-medical-technology-sector": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
  "health-care-and-paramedical-science-sector": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
  "naturopathy-and-yoga-sciences-sector": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80",
  "vocational-education-training-sector": "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
  "aviation-training-sector": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
  "business-management-education-training-sector": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
  "shipping-management-training-sector": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
  "solar-energy-training-sector": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80",
  "nutrition-and-health-science-training-sector": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80",
  "engineering-software-training-sector": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
  "fire-and-safety-mangement-training-sector": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
};

const defaultImage = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80";

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<CourseSector | null>(null);
  const [modalSearch, setModalSearch] = useState('');

  const sectors = useMemo(() => coursesData as CourseSector[], []);

  // Filter sectors by main search term (matches sector name or subcourse titles)
  const filteredSectors = useMemo(() => {
    if (!searchTerm.trim()) return sectors;
    const term = searchTerm.toLowerCase();
    return sectors.filter(
      (s) =>
        s.sector.toLowerCase().includes(term) ||
        s.subcourses.some((c) => c.title.toLowerCase().includes(term))
    );
  }, [sectors, searchTerm]);

  // Filter subcourses inside the active modal
  const filteredSubcourses = useMemo(() => {
    if (!selectedSector) return [];
    if (!modalSearch.trim()) return selectedSector.subcourses;
    const term = modalSearch.toLowerCase();
    return selectedSector.subcourses.filter(
      (sc) =>
        sc.title.toLowerCase().includes(term) ||
        sc.duration.toLowerCase().includes(term) ||
        sc.qualification.toLowerCase().includes(term) ||
        sc.slNo.includes(term)
    );
  }, [selectedSector, modalSearch]);

  const openModal = (sector: CourseSector) => {
    setSelectedSector(sector);
    setModalSearch('');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSector(null);
    setModalSearch('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Header & Search */}
      <section className="bg-surface border-t border-gray-100 relative py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-teal mb-4">
            <div className="w-6 h-0.5 bg-teal"></div>
            Recognized Sector Skill Council Programs
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Full Course <span className="text-amber">Catalog</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-8">
            Explore 20 Specialized Training Sectors and hundreds of certified diploma & certificate courses aligned with industry standards.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search sector or course name (e.g. Accounting, Nursing, Fire Safety)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-navy-dark placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-teal focus:ring-4 focus:ring-teal/10 shadow-sm transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 text-gray-400 hover:text-gray-600 text-sm font-bold bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark">
              Training Sectors <span className="text-teal">({filteredSectors.length})</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Select a sector to view full subcourse details, duration, and minimum qualifications.
            </p>
          </div>
        </div>

        {filteredSectors.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-gray-700 mt-2">No Course Sectors Found</h3>
            <p className="text-gray-500 text-sm mt-1">Try searching with a different keyword</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-navy-dark text-white text-xs font-bold rounded-lg hover:bg-teal transition-colors"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSectors.map((sec, idx) => {
              const image = sectorImages[sec.id] || defaultImage;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-[0_16px_45px_rgba(15,35,71,0.12)] transition-all duration-300 flex flex-col group"
                >
                  <div className="h-48 relative overflow-hidden bg-gray-900">
                    <img
                      src={image}
                      alt={sec.sector}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-light text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md">
                        {sec.subcourseCount} Programs
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-dark mb-3 group-hover:text-teal transition-colors line-clamp-2">
                        {sec.sector}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                          Featured Courses:
                        </span>
                        {sec.subcourses.slice(0, 3).map((sub, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="text-amber shrink-0 mt-0.5">✦</span>
                            <span className="line-clamp-1 font-medium">{sub.title}</span>
                          </div>
                        ))}
                        {sec.subcourses.length > 3 && (
                          <p className="text-[11px] text-teal font-semibold pt-1">
                            + {sec.subcourses.length - 3} more specialized courses
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => openModal(sec)}
                        className="w-full py-2.5 px-4 rounded-xl bg-navy-dark hover:bg-teal text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <span>View Details & Syllabus</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {selectedSector && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200">
            <div className="bg-navy-dark p-6 text-white relative shrink-0">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-all"
              >
                ✕
              </button>
              <div className="inline-block px-3 py-1 rounded-md bg-teal text-xs font-bold uppercase tracking-wider mb-2">
                Official Curriculum
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold pr-10">
                {selectedSector.sector}
              </h2>
              <p className="text-xs text-white/70 mt-1">
                Total Offered Courses: <strong className="text-white">{selectedSector.subcourses.length}</strong>
              </p>

              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Filter courses in this sector..."
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:bg-white/20 transition-all"
                />
                <span className="absolute left-3 top-2.5 text-xs text-white/50">🔍</span>
                {modalSearch && (
                  <button
                    onClick={() => setModalSearch('')}
                    className="absolute right-3 top-2.5 text-xs text-white/60 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-[#FAFBFF]">
              {filteredSubcourses.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-sm">No courses matching "{modalSearch}"</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy-dark text-white text-[11px] uppercase tracking-wider font-bold">
                        <th className="py-3.5 px-4 text-center w-16">Sl No</th>
                        <th className="py-3.5 px-4">Course Title</th>
                        <th className="py-3.5 px-4 w-32">Duration</th>
                        <th className="py-3.5 px-4 w-36">Min Qualification</th>
                        <th className="py-3.5 px-4 text-center w-28">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs text-gray-700 font-medium">
                      {filteredSubcourses.map((sc, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50/50 transition-colors"
                        >
                          <td className="py-3.5 px-4 text-center font-bold text-teal bg-gray-50/50">
                            {sc.slNo}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-navy-dark">
                            {sc.title}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-1 bg-amber-50 text-amber border border-amber-200/60 rounded-md text-[11px] font-bold">
                              ⏱️ {sc.duration}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-1 bg-teal-50 text-teal border border-teal-200/60 rounded-md text-[11px] font-bold">
                              🎓 {sc.qualification}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <Link
                              href={`/registration/online?course=${encodeURIComponent(sc.title)}`}
                              onClick={closeModal}
                              className="inline-block px-3 py-1.5 bg-teal hover:bg-navy-dark text-white text-[10px] font-bold rounded-lg transition-colors shadow-sm"
                            >
                              Enroll
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white p-4 border-t border-gray-100 flex items-center justify-between shrink-0">
              <span className="text-xs text-gray-500 font-medium">
                Showing <strong>{filteredSubcourses.length}</strong> of {selectedSector.subcourses.length} courses
              </span>
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/registration/online"
                  onClick={closeModal}
                  className="px-5 py-2 bg-teal hover:bg-navy-dark text-white text-xs font-bold rounded-xl transition-colors shadow-md"
                >
                  Apply Online Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

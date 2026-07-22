
'use client';

import Link from 'next/link';

import React from 'react';
import './HomeHero.scss';

// Icons (using simple SVG paths or Unicode; for a real project, use react-icons)
const Icon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={`icon ${className || ''}`}>{children}</span>
);

const HomeHero: React.FC = () => {
    return (
        <div className="ncvstc-landing">
            {/* ========== HERO SECTION ========== */}
            <section className="hero">
                <div className="hero-background">
                    <div className="gradient-orb orb1"></div>
                    <div className="gradient-orb orb2"></div>
                    <div className="gradient-orb orb3"></div>
                    <div className="gradient-orb orb4"></div>
                    <div className="grid-lines">
                        <div className="grid-line"></div>
                        <div className="grid-line"></div>
                        <div className="grid-line"></div>
                        <div className="grid-line"></div>
                        <div className="grid-line"></div>
                        <div className="grid-line"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-content">
                            <div className="hero-tag">
                                <span className="pulse-dot"></span>
                                Empowering Skills • Building Careers
                                <span className="tag-shimmer"></span>
                            </div>

                            <h1 className="hero-title">
                                Welcome to
                                <span className="gradient-text"> NCVSTC</span>
                            </h1>

                            <p className="hero-subtitle">
                                Empowering India with Skill, Knowledge, and Professional Excellence!
                            </p>

                            <div className="hero-badges">
                                <span className="hero-badge">
                                    <span className="badge-icon">🏛️</span>
                                    Statutory Autonomous Body
                                </span>
                                <span className="hero-badge">
                                    <span className="badge-icon">📜</span>
                                    Non-Governmental Organization
                                </span>
                            </div>

                            <p className="hero-description">
                                Established under Article 29 & 30(1) of the Constitution of India
                                and incorporated under the Ministry of Corporate Affairs, Government of India.
                            </p>

                            <div className="hero-quote">
                                <div className="quote-mark">"</div>
                                <p>
                                    The Navigating Career for Vocational Skill Technology Council (NCVSTC) is an autonomous and non-governmental educational organization committed to enhancing vocational and technical education across India.
                                </p>
                            </div>

                            <div className="hero-actions">
                                <button className="btn btn-primary btn-lg">
                                    <span>Admissions Open 2026–27</span>
                                    <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="btn btn-glow btn-lg">
                                    <span>Explore Courses</span>
                                    <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="hero-right">
                            <div className="floating-card">
                                <div className="card-glow"></div>
                                <div className="card-header">
                                    <span className="card-title">Our Achievements</span>
                                    <span className="card-subtitle">Transforming Futures</span>
                                </div>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number" data-count="100">100+</div>
                                        <div className="stat-label">Career Courses</div>
                                        <div className="stat-bar"><span style={{ width: '100%' }}></span></div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">500+</div>
                                        <div className="stat-label">Study Centres</div>
                                        <div className="stat-bar"><span style={{ width: '85%' }}></span></div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">50K+</div>
                                        <div className="stat-label">Students Trained</div>
                                        <div className="stat-bar"><span style={{ width: '90%' }}></span></div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">25+</div>
                                        <div className="stat-label">State Offices</div>
                                        <div className="stat-bar"><span style={{ width: '70%' }}></span></div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">15+</div>
                                        <div className="stat-label">Years Excellence</div>
                                        <div className="stat-bar"><span style={{ width: '95%' }}></span></div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="footer-text">✨ Building Careers • Transforming Futures</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L60 50C120 60 240 80 360 75C480 70 600 40 720 35C840 30 960 50 1080 55C1200 60 1320 40 1380 30L1440 20V120H1380C1320 120 1200 120 1080 120H360C240 120 120 120 60 120H0V40Z" fill="#0a0a1a" />
                    </svg>
                </div>
            </section>

            {/* ========== PROGRAMMES ========== */}
            <section className="section programmes" id="programmes">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">🎓 What We Offer</span>
                        <h2 className="section-title">Our <span className="gradient-text">Programmes</span></h2>
                        <p className="section-subtitle">
                            NCVSTC offers a wide range of career-oriented programmes designed to suit every learner's needs
                        </p>
                    </div>
                    <div className="programme-grid">
                        <div className="programme-card">
                            <div className="card-glow-effect"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">📜</span>
                            </div>
                            <h3>Certificate Programmes</h3>
                            <p>Short-term skill-based certifications for quick career entry</p>
                            <div className="card-arrow">→</div>
                        </div>
                        <div className="programme-card">
                            <div className="card-glow-effect"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">📘</span>
                            </div>
                            <h3>Diploma Courses</h3>
                            <p>Comprehensive diploma programmes with practical training</p>
                            <div className="card-arrow">→</div>
                        </div>
                        <div className="programme-card">
                            <div className="card-glow-effect"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">📚</span>
                            </div>
                            <h3>Advanced Diploma</h3>
                            <p>In-depth advanced courses for specialized career paths</p>
                            <div className="card-arrow">→</div>
                        </div>
                        <div className="programme-card">
                            <div className="card-glow-effect"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">🎓</span>
                            </div>
                            <h3>Degree & PG</h3>
                            <p>Full-fledged degree and post-graduate programmes</p>
                            <div className="card-arrow">→</div>
                        </div>
                        <div className="programme-card">
                            <div className="card-glow-effect"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">🛠️</span>
                            </div>
                            <h3>Skill Development</h3>
                            <p>Industry-focused vocational training programmes</p>
                            <div className="card-arrow">→</div>
                        </div>
                    </div>
                    <div className="learning-modes-wrapper">
                        <h3 className="modes-title">📖 Learning Modes</h3>
                        <div className="modes-container">
                            <div className="mode-item">💻 Online Education</div>
                            <div className="mode-item">📖 Open Learning</div>
                            <div className="mode-item">📬 Distance Education</div>
                            <div className="mode-item">🏭 Industry-Oriented Training</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ANNOUNCEMENTS ========== */}
            <section className="section announcements" id="announcements">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">📢 Stay Updated</span>
                        <h2 className="section-title">Latest <span className="gradient-text">Announcements</span></h2>
                    </div>
                    <div className="announcements-grid">
                        <div className="announcement-card">
                            <div className="announcement-badge new">New</div>
                            <div className="announcement-icon">📢</div>
                            <p>Admissions Open for Academic Year 2026–27</p>
                            <span className="announcement-action">Apply Now →</span>
                        </div>
                        <div className="announcement-card">
                            <div className="announcement-badge">Exam</div>
                            <div className="announcement-icon">📅</div>
                            <p>Examination Schedule Released for March/April Session</p>
                            <span className="announcement-action">View Schedule →</span>
                        </div>
                        <div className="announcement-card">
                            <div className="announcement-badge">Training</div>
                            <div className="announcement-icon">🎯</div>
                            <p>New Skill Development Training Batches Commencing Soon</p>
                            <span className="announcement-action">Register Now →</span>
                        </div>
                        <div className="announcement-card">
                            <div className="announcement-badge">Verify</div>
                            <div className="announcement-icon">✅</div>
                            <p>Online Certificate Verification Facility Available</p>
                            <span className="announcement-action">Verify Now →</span>
                        </div>
                        <div className="announcement-card">
                            <div className="announcement-badge">Internship</div>
                            <div className="announcement-icon">💼</div>
                            <p>Internship & Apprenticeship Applications Open</p>
                            <span className="announcement-action">Apply Now →</span>
                        </div>
                        <div className="announcement-card">
                            <div className="announcement-badge">Placement</div>
                            <div className="announcement-icon">🌟</div>
                            <p>Placement Assistance and Career Guidance Support Available</p>
                            <span className="announcement-action">Get Support →</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TRAINING NETWORK ========== */}
            <section className="section training-network">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">🏛️ Our Network</span>
                        <h2 className="section-title">Training <span className="gradient-text">Network</span></h2>
                        <p className="section-subtitle">
                            NCVSTC operates through an extensive academic and vocational network
                        </p>
                    </div>
                    <div className="network-grid">
                        <div className="network-item">
                            <div className="network-icon">🏢</div>
                            <h4>VTP</h4>
                            <p>Vocational Training Providers</p>
                        </div>
                        <div className="network-item">
                            <div className="network-icon">🏫</div>
                            <h4>CC</h4>
                            <p>Community Colleges</p>
                        </div>
                        <div className="network-item">
                            <div className="network-icon">🔧</div>
                            <h4>ITI</h4>
                            <p>Industrial Training Institutions</p>
                        </div>
                        <div className="network-item">
                            <div className="network-icon">📐</div>
                            <h4>STI</h4>
                            <p>Skill Training Institutions</p>
                        </div>
                        <div className="network-item">
                            <div className="network-icon">📊</div>
                            <h4>STP & BTP</h4>
                            <p>Skill & Basic Training</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT & VISION ========== */}
            <section className="section about-vision" id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-content">
                            <span className="section-badge">About Us</span>
                            <h2>About <span className="gradient-text">NCVSTC</span></h2>
                            <p className="about-highlight">
                                Our primary objective is to develop a skilled workforce by providing industry-oriented training, professional certifications, and entrepreneurial guidance. We work closely with Vocational Training Centres (VTCs), industries, and educational institutions to bridge the gap between education and employment, ensuring that learners are well-equipped to meet national and global standards.
                            </p>
                            <div className="about-tags mt-6">
                                <span className="about-tag">🎯 Skill Enhancement</span>
                                <span className="about-tag">🚀 Entrepreneurship</span>
                                <span className="about-tag">💼 Employment Focus</span>
                                <span className="about-tag">🌍 Global Recognition</span>
                            </div>
                        </div>
                        <div className="vision-content">
                            <div className="vision-card">
                                <div className="vision-glow"></div>
                                <div className="vision-icon-wrapper">
                                    <span className="vision-icon">🌟</span>
                                </div>
                                
                                <h3 className="mb-2">Who We Are</h3>
                                <p className="vision-text text-sm mb-4">
                                    NCVSTC operates as a leading skill development and educational council, focusing on quality training, standardizing vocational education, and promoting self-reliance among students.
                                </p>

                                <h3 className="mb-2">What We Do</h3>
                                <p className="vision-text text-sm mb-4">
                                    We certify skill development programmes, manage VTCs, conduct standardized assessments, and offer placement assistance to support career growth.
                                </p>
                                
                                <h3 className="mb-2">Why Choose Us?</h3>
                                <p className="vision-text text-sm">
                                    Industry-aligned curriculum, nationally recognized certification, continuous skill enhancement, and strong corporate tie-ups for employment generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CAREER DEVELOPMENT ========== */}
            <section className="section career-dev" id="career">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">💼 Career Support</span>
                        <h2 className="section-title">Career <span className="gradient-text">Development</span></h2>
                        <p className="section-subtitle">
                            Strong industrial partnerships with leading companies, service industries, and corporate organizations
                        </p>
                    </div>
                    <div className="career-grid">
                        <div className="career-card">
                            <div className="career-icon-wrapper">
                                <span className="career-icon">🚀</span>
                            </div>
                            <h4>Skill Development</h4>
                            <p>Empowering youth with technical and professional skills for a brighter career.</p>
                            <div className="career-hover-glow"></div>
                        </div>
                        <div className="career-card">
                            <div className="career-icon-wrapper">
                                <span className="career-icon">🔧</span>
                            </div>
                            <h4>Vocational Training</h4>
                            <p>Practical, job-oriented training programmes for various industrial sectors.</p>
                            <div className="career-hover-glow"></div>
                        </div>
                        <div className="career-card">
                            <div className="career-icon-wrapper">
                                <span className="career-icon">🧭</span>
                            </div>
                            <h4>Career Guidance</h4>
                            <p>Expert counseling and placement support to connect students with employers.</p>
                            <div className="career-hover-glow"></div>
                        </div>
                        <div className="career-card">
                            <div className="career-icon-wrapper">
                                <span className="career-icon">💡</span>
                            </div>
                            <h4>Entrepreneurship</h4>
                            <p>Encouraging self-employment through startup guidance and business support.</p>
                            <div className="career-hover-glow"></div>
                        </div>
                    </div>
                    <div className="placement-highlight">
                        <div className="highlight-icon">🎯</div>
                        <div className="highlight-text">
                            <strong>Career & Placement Cell</strong>
                            <span>Working continuously to connect trained candidates with employment opportunities across multiple sectors</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== JOIN SECTION ========== */}
            <section className="section join-section">
                <div className="join-bg-pattern"></div>
                <div className="container">
                    <div className="join-wrapper">
                        <div className="join-content">
                            <span className="join-badge">🚀 Get Started</span>
                            <h2>Join the Future of <span className="gradient-text">Skill Education</span></h2>
                            <p>
                                NCVSTC welcomes students, institutions, trainers, and industry partners
                                to become part of a growing mission focused on education, employability,
                                innovation, and nation-building through skill development.
                            </p>
                            <div className="join-buttons">
                                <button className="btn btn-primary btn-lg">
                                    Apply Now
                                    <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="btn btn-glow-light btn-lg">Partner with Us</button>
                                <button className="btn btn-glow-light btn-lg">Download Brochure</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;





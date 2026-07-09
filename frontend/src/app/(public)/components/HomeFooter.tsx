'use client';

import Link from 'next/link';
import './HomeFooter.scss';

export default function HomeFooter() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Courses", link: "/programs" },
    { name: "Verify Student", link: "/verify" },
    { name: "Affiliation", link: "/contact" }
  ];

  const legalLinks = [
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "RTI Act",
    "Verification Guidelines"
  ];

  const socialIcons = ['FB', 'TW', 'IN', 'YT'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="logo">
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" fill="#FAFBFF" stroke="#E8920A" strokeWidth="4" />
                <circle cx="60" cy="60" r="48" fill="none" stroke="#1B3A6B" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M45,40 L75,40 L60,20 Z" fill="#0F7B6C" />
                <rect x="56" y="40" width="8" height="40" fill="#1B3A6B" />
                <path d="M40,80 L80,80" stroke="#0F2347" strokeWidth="4" />
                <circle cx="60" cy="60" r="15" fill="#E8920A" opacity="0.8" />
              </svg>
            </div>
            <h4 className="brand-title">NCVSTC</h4>
            <p className="brand-description">
              Navigating Career for Vocational Skill Technology Council. Empowering youth with industry-ready skills.
            </p>
            <div className="social-icons">
              {socialIcons.map((s) => (
                <a key={s} href="#" aria-label={s}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links Column */}
          <div className="footer-column">
            <h5>Explore Links</h5>
            <ul>
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info Column */}
          <div className="footer-column">
            <h5>Legal Info</h5>
            <ul>
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liaison Office Column */}
          <div className="footer-column">
            <h5>Liaison Office</h5>
            <div className="footer-contact">
              <div className="contact-item">
                <span>📍</span>
                <p>
                  4/1958, Samiyapuram Koot Road,<br />
                  Pappireddipatti, Dharmapuri – 636905,<br />
                  Tamil Nadu.
                </p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <a href="tel:9585343052">9585343052</a>
              </div>
              <div className="contact-item">
                <span>✉</span>
                <a href="mailto:info@ncvrtindia.org">info@ncvrtindia.org</a>
              </div>
              <div className="support-card">
                <div className="support-status">Support Desks Open</div>
                <div className="support-hours">Mon - Sat, 10:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} NCVSTC. All Rights Reserved. Established under Govt. of India / NCT Delhi Act.
          </p>
          <div className="certifications">
            {['ISO 9001:2015', 'MSME Registered', 'NITI Aayog'].map((cert, i) => (
              <span key={i}>{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
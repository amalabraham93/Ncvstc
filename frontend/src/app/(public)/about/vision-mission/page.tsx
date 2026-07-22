import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Commitment | NCVSTC",
  description:
    "Learn about NCVSTC's Vision, Commitment, and dedication towards modern vocational education and skill development.",
};

export default function VisionMissionPage() {
  const commitments = [
    {
      icon: "🏭",
      title: "Industry Integrated Learning",
      description:
        "Promote practical and industry-oriented education that prepares students for real-world careers.",
    },
    {
      icon: "💼",
      title: "Employability Skills",
      description:
        "Develop technical knowledge, communication, leadership, and workplace readiness for every learner.",
    },
    {
      icon: "🚀",
      title: "Innovation & Entrepreneurship",
      description:
        "Encourage innovation, creativity, entrepreneurship, and lifelong learning for sustainable career growth.",
    },
    {
      icon: "🌍",
      title: "Equal Learning Opportunities",
      description:
        "Provide accessible vocational education for students across rural and urban communities.",
    },
    {
      icon: "💻",
      title: "Technology-Driven Education",
      description:
        "Integrate modern technologies, digital learning, and quality training systems into every program.",
    },
    {
      icon: "🎓",
      title: "Future-Ready Professionals",
      description:
        "Create responsible, ethical, skilled, and globally competitive professionals.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2347] py-24 px-4">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#13A090]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#7FE5D8] text-sm font-semibold tracking-widest uppercase mb-6">
            NCVSTC
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Vision &{" "}
            <span className="text-[#13A090]">Commitment</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            Building a future through quality vocational education, innovation,
            practical learning, and technology-driven skill development.
          </p>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-10 hover:shadow-xl transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#E6F8F6] flex items-center justify-center text-3xl mb-6">
                👁️
              </div>

              <span className="uppercase tracking-widest text-sm font-semibold text-[#13A090]">
                Our Vision
              </span>

              <h2 className="font-serif text-3xl font-bold text-[#0F2347] mt-3 mb-6">
                Empowering Future Professionals Through Skill-Based Education
              </h2>

              <ul className="list-disc pl-5 text-gray-600 leading-8 text-lg space-y-2">
                  <li>To enhance vocational education by developing industry-oriented courses, modern training methods, and advanced learning technologies aligned with current labour market demands.</li>
                  <li>To strengthen the quality of skill development through teacher training, programme evaluation, and continuous improvement in vocational education systems.</li>
                  <li>To promote innovation, collaboration, and professional growth by supporting vocational institutions, encouraging research initiatives, and expanding participation in skill development networks.</li>
              </ul>

            </div>

            {/* Commitment */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0F2347] shadow-lg p-10 text-white">

              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#13A090]/20"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/10"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-6">
                  🤝
                </div>

                <span className="uppercase tracking-widest text-sm font-semibold text-[#7FE5D8]">
                  Our Mission
                </span>

                <h2 className="font-serif text-3xl font-bold mt-3 mb-6">
                  Dedicated to Quality Vocational Education
                </h2>

                <ul className="list-disc pl-5 text-slate-300 leading-8 text-lg space-y-2">
                  <li>To provide innovative and simplified educational frameworks in formal and informal learning systems that support lifelong skill development and career growth.</li>
                  <li>To build strong national and international collaborations while creating centres for educational excellence, consulting, and recognition of informal learning.</li>
                  <li>To ensure high-quality vocational and technical education by developing professional networks, promoting industry-relevant training, and empowering student success.</li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <span className="uppercase tracking-widest text-sm font-semibold text-[#13A090]">
              What We Focus On
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F2347] mt-4">
              Our Key Commitments
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
              We strive to provide learners with practical knowledge,
              technology-driven education, industry exposure, and lifelong
              opportunities for professional success.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {commitments.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F2FBFA] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0F2347] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0F2347] py-20 px-4">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Building Skills for a Better Tomorrow
          </h2>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
            Through technology-driven education, quality training systems,
            practical learning, and professional mentorship, NCVSTC empowers
            learners with the confidence and skills needed to succeed in today's
            competitive global workforce.
          </p>

        </div>

      </section>
    </div>
  );
}
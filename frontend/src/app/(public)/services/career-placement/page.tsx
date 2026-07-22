import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Development & Placement | NCVSTC",
  description:
    "NCVSTC Career Development & Placement Support provides career guidance, internships, apprenticeships, placement assistance, and industry exposure.",
};

export default function CareerPlacementPage() {
  const services = [
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Professional career counseling to help students identify suitable career opportunities and growth paths.",
    },
    {
      icon: "💼",
      title: "Placement Assistance",
      description:
        "Dedicated placement support connecting students with reputed companies across multiple industries.",
    },
    {
      icon: "🏢",
      title: "Internship Opportunities",
      description:
        "Industry internships that provide practical exposure and real-world work experience.",
    },
    {
      icon: "🛠️",
      title: "Apprenticeship Programmes",
      description:
        "Hands-on apprenticeship training designed to improve technical competency and workplace readiness.",
    },
    {
      icon: "🌐",
      title: "Industry Exposure",
      description:
        "Industrial visits, workshops, seminars, and interactions with professionals to understand industry trends.",
    },
    {
      icon: "🚀",
      title: "Skill Development",
      description:
        "Continuous technical, communication, leadership, and employability skill enhancement programmes.",
    },
  ];

  const process = [
    "Student Registration",
    "Career Counseling",
    "Skill Assessment",
    "Training & Workshops",
    "Interview Preparation",
    "Placement Support",
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F2347] py-24">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#13A090]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#7FE5D8] uppercase tracking-widest text-sm font-semibold mb-5">
            Career Support
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Career Development &
            <span className="text-[#13A090]"> Placement</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            NCVSTC partners with leading industries, corporate organizations,
            and training institutions to provide career guidance, internships,
            skill development, and placement opportunities for every learner.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>
              <span className="text-[#13A090] uppercase tracking-widest font-semibold text-sm">
                Career Development
              </span>

              <h2 className="font-serif text-4xl font-bold text-[#0F2347] mt-3 mb-6">
                Career & Placement Cell
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-6">
                The Career & Placement Cell of NCVSTC is dedicated to preparing students for successful careers through industry-oriented training, professional guidance, and placement support. The cell conducts structured training programmes focused on employability skills, communication, corporate etiquette, interview preparation, personality development, and workplace readiness to bridge the gap between education and industry expectations.
              </p>
              
              <p className="text-gray-600 text-lg leading-8 mb-8">
                NCVSTC has established strong industrial tie-ups and active engagement with leading manufacturing companies, service industries, corporate organizations, and business sectors across India. These collaborations enable the council to provide career guidance, industry exposure, internship opportunities, and placement assistance for trained candidates in various sectors.
              </p>

              <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-4">Key Objectives</h3>
              <ul className="list-disc pl-5 mb-8 text-gray-600 space-y-2">
                <li>Prepare students with industry-relevant professional and employability skills</li>
                <li>Provide career counseling and placement-oriented training support</li>
                <li>Connect students with employment opportunities through industrial partnerships</li>
                <li>Develop confidence, professionalism, and workplace readiness among candidates</li>
              </ul>

              <h3 className="font-serif text-2xl font-bold text-[#0F2347] mb-4">Placement Assistance Offered</h3>
              <ul className="list-disc pl-5 mb-8 text-gray-600 space-y-2">
                <li>Career guidance and placement preparation for all eligible candidates</li>
                <li>Interview scheduling and employer connections based on candidate skill levels</li>
                <li>Coordination with industries and recruiters until successful placement</li>
                <li>Support in securing suitable employment opportunities and career growth</li>
              </ul>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#EEF4FF] text-[#2A75C3] rounded-2xl flex items-center justify-center text-2xl">
                    💡
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F2347]">
                    Entrepreneurship Development Cell
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  The Entrepreneurship Development Cell encourages students to become self-employed professionals, innovators, and future entrepreneurs by promoting entrepreneurial thinking, business awareness, and leadership skills.
                </p>
                
                <p className="text-gray-600 mb-6">
                  The cell organizes awareness programmes, industrial interactions, project guidance sessions, and business development activities that help students understand startup opportunities, project planning, funding support, and market-oriented business practices.
                </p>

                <h4 className="font-bold text-[#0F2347] mb-2">Key Objectives</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-600 text-sm space-y-1">
                  <li>Promote entrepreneurship and self-employment opportunities</li>
                  <li>Guide students in project preparation and business planning</li>
                  <li>Create awareness about financial assistance, subsidies, and bank funding</li>
                  <li>Facilitate interaction with successful entrepreneurs and industry experts</li>
                </ul>

                <h4 className="font-bold text-[#0F2347] mb-2">Main Functions</h4>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  <li>Organize entrepreneurship awareness and motivational programmes</li>
                  <li>Conduct interactive sessions with successful business leaders</li>
                  <li>Provide guidance on project finance, subsidies, and startup support</li>
                  <li>Arrange industrial visits and industry interaction programmes for practical exposure</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <span className="uppercase tracking-widest text-[#13A090] font-semibold">
              Placement Support
            </span>

            <h2 className="font-serif text-4xl font-bold text-[#0F2347] mt-4">
              What We Provide
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border p-8 hover:-translate-y-2 hover:shadow-xl transition-all bg-white"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#F2FBFA] flex items-center justify-center text-4xl mb-6">
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

      {/* Process */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-[#13A090] font-semibold">
              Placement Journey
            </span>

            <h2 className="font-serif text-4xl font-bold text-[#0F2347] mt-4">
              Our Career Process
            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow border p-6 text-center"
              >

                <div className="w-14 h-14 rounded-full bg-[#13A090] text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-[#0F2347]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#0F2347] py-20">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Your Career Starts Here
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            At NCVSTC, we are committed to helping every learner achieve career
            success through quality education, industry partnerships,
            professional mentorship, internships, and dedicated placement
            support.
          </p>

        </div>

      </section>

    </div>
  );
}
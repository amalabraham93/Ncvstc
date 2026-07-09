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

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-[#13A090] uppercase tracking-widest font-semibold text-sm">
                Career Development
              </span>

              <h2 className="font-serif text-4xl font-bold text-[#0F2347] mt-3 mb-6">
                Empowering Students for Successful Careers
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                Our Career Development & Placement Cell works continuously to
                bridge the gap between education and employment by providing
                professional guidance, industry exposure, practical training,
                and placement assistance. Through strategic partnerships with
                leading companies and organizations, we prepare students for
                successful careers in today's competitive job market.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white rounded-3xl p-8 shadow-lg border">
                <h3 className="text-5xl font-bold text-[#13A090]">100+</h3>
                <p className="mt-3 text-gray-600">
                  Industry Partners
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border">
                <h3 className="text-5xl font-bold text-[#13A090]">95%</h3>
                <p className="mt-3 text-gray-600">
                  Placement Assistance
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border">
                <h3 className="text-5xl font-bold text-[#13A090]">50+</h3>
                <p className="mt-3 text-gray-600">
                  Skill Programmes
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border">
                <h3 className="text-5xl font-bold text-[#13A090]">24×7</h3>
                <p className="mt-3 text-gray-600">
                  Career Support
                </p>
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
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Director Message | NCVSTC',
};

export default function DirectorMessagePage() {
    return (
        <div className="bg-white">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
                        Director's <span className="text-[#13A090]">Message</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-gradient-to-br from-[#FAFBFF] to-white border border-[#DDE3F0] rounded-3xl p-8 md:p-14 shadow-lg relative overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[rgba(232,146,10,0.05)] rounded-full"></div>
                    <div className="absolute left-10 top-10 w-32 h-32 bg-[rgba(15,123,108,0.05)] rounded-full"></div>

                    <div className="relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                            <div className="lg:col-span-1">
                                <div className="bg-white border border-[#DDE3F0] rounded-2xl p-6 shadow-md text-center">
                                    <div className="w-48 h-48 bg-[#EEF2FA] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-inner">
                                        <span className="text-6xl">👤</span>
                                    </div>
                                    <h4 className="font-serif text-2xl font-bold text-[#0F2347]">Director</h4>
                                    <p className="text-[#0F7B6C] font-semibold text-sm uppercase tracking-wider mt-2">NCVSTC</p>
                                    <p className="text-[#718096] text-xs mt-1">Vocational Education Council</p>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <h3 className="font-serif text-3xl font-bold text-[#0F2347] mb-8 leading-relaxed">
                                    "It gives me great pleasure to welcome you to Navigating Career for Vocational Skill Technology Council."
                                </h3>
                                <div className="space-y-6 text-[#4A5568] text-lg leading-relaxed">
                                    <p>
                                        India is a resource of massive manpower and for the development of our country using this resource, NCVSTC leads the race by taking a proactive step to converge a wave of skill development in India by giving recognized certified training with present market relevant skills. The advantage of skill development wherein the implementation of such schemes will make a strong impact in empowering socio-economic status, mitigate poverty, reduce social challenges, and economic inclusion.
                                    </p>
                                    <p>
                                        Candidate joining these vocational courses will get an idea to find and sculpt their hidden inner talent, which will make their responsible character recognized in the society and will make them stand on their own feet and altogether will increase the work force of our country by making the livelihood of the millions of Indians.
                                    </p>
                                    <p>
                                        NCVSTC aims to catalyze skilling initiatives that can have a good impact in the economy and skill development. The quality team at NCVSTC focuses on enabling standardized structure to enhance the skill development across the country. All skill training programs adheres to the National Standards. To assure consistency and quality of skilling across the training initiatives for various jobs across the country, NCVSTC coordinates and leads many VTCs. NCVSTC evaluate the performance of skill development programs in different VTCs, to foster excellence and build effectiveness in training which enables the trainees to make informed choices regarding Training Centers.
                                    </p>
                                    <p>
                                        I would like to congratulate the candidates who had joined NCVSTC courses and those who have made a positive decision to join. Along with improvising the education, we have also worked on the entire process, starting from admission till getting the certificate. I encourage the students to get enrolled in different courses, and also get participated in various events organized by NCVSTC at regular intervals. NCVSTC will provide quality training and will play a vital role in professional skills development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

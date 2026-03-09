import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Question Bank | NCVSTC',
};

export default function QuestionBankPage() {
    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-[#0F2347] relative py-20 px-4 overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Question <span className="text-[#13A090]">Bank</span>
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-[#DDE3F0] p-8 md:p-12 text-center">
                    <div className="w-20 h-20 bg-[#EEF2FA] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                        ❓
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-[#0F2347] mb-4">Access Previous Year Questions</h2>
                    <p className="text-[#4A5568] max-w-2xl mx-auto mb-8">
                        The Question Bank archive contains previous year examination papers, model test papers, and sample questions to help you prepare effectively for your final assessment.
                    </p>

                    <div className="max-w-md mx-auto bg-[#F8FAFC] p-6 rounded-xl border border-[#EEF2FA] shadow-inner text-left">
                        <h3 className="font-bold text-[#0F2347] mb-4 text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E8920A]"></span>
                            Login Required
                        </h3>
                        <p className="text-sm text-[#718096] mb-6">
                            For security and academic integrity, full access to the Question Bank is restricted to enrolled students. Please log in to your student portal to download these resources.
                        </p>
                        <a href="/login" className="block w-full text-center bg-[#E8920A] hover:bg-[#C47A08] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-sm">
                            Go to Student Login
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

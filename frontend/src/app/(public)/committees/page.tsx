import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Scale, Users, FileText, Banknote, ShoppingCart, Heart, Activity, Briefcase, GraduationCap, Gavel, BookOpen, CheckSquare, List, Home, UsersRound } from 'lucide-react';

export const metadata = {
    title: 'Committees | NCVSTC',
    description: 'Statutory and Non-Statutory Committees of Navigating Career for Vocational Skill Technology Council',
};

const statutoryCommittees = [
    {
        title: '1. Establishment of Anti Ragging Committee',
        objective: 'Prevention and prohibition of Ragging in Skill/Vocational Institutions, Community College including set up VTP’S/STP,S imparting Skill /Vocational education.',
        activities: [
            {
                subtitle: 'ANTI-RAGGING COMMITTEE',
                desc: 'Every Institution community college including set up VTP’S/STP’S imparting Skill /Vocational /technical education shall constitute a Committee to be known as the Anti-ragging Committee to be nominated and headed by the Head of the Institution, and consisting of representatives of civil and police administration, local media, Non-Government Organizations involved in youth activities, representatives of faculty members, representatives of parents, representatives of students belonging to the fresher’s category as well as senior students, non-teaching staff; and shall have a diverse mix of membership in terms of level as well as gender.'
            },
            {
                subtitle: 'ANTI-RAGGING SQUAD',
                desc: 'Every Institution/ community college including set up VTP’S/STP’S imparting Skill /Vocational /technical education also constitute a smaller body to be known as the Anti-Ragging Squad to be nominated by the Head of the Institution with such representation as may be considered necessary for maintaining vigil, oversight and patrolling functions and shall remain mobile, alert and active at all times. Provided that the Anti-Ragging Squad shall have representation of various members of the campus community and shall have no outside representation.'
            }
        ],
        icon: Shield,
    },
    {
        title: '2. Establishment of Grievance Redressal Committee',
        objective: 'In order to ensure transparency by Institution/ community college including set up VTP’S/STP’S imparting Skill /Vocational /technical education, in admissions and with Paramount Objective of preventing unfair practices and to provide a mechanism to innocent students for redressal of their grievances.',
        activities: [
            {
                desc: 'Each Institution/ community college including set up VTP’S/STP’S shall establish a registry, headed by an employee of the institute of appropriate rank as the NCVSTC Council may decide, where an aggrieved student or person may make an applicant seeking redressal of grievance.'
            },
            {
                desc: 'The address of the registry so established shall be published widely including on the notice board and prospectus and placed on the website of the institution.'
            }
        ],
        icon: Scale,
    },
    {
        title: '3. Internal Complaint Committee (ICC)',
        objective: 'Prevention, prohibition and redressal of sexual harassment of women employees and students in higher educational institutions.',
        activities: [
            {
                desc: 'Internal Complaints Committee (ICC) to be constituted by an Skill and Vocational Education Institute shall ensure that the constitution of such a Body is as required for ICC under these regulations. Provided further that such a Body shall be bound by the provisions of these regulations.'
            },
            {
                desc: 'Publicly notify and commit itself to a zero tolerance policy towards sexual harassment by organise training programmes or as the case may be, workshops for the officers, functionaries, faculty and students'
            }
        ],
        icon: UsersRound,
    },
    {
        title: '4. Committee for SC/ST',
        objective: 'The Scheduled Caste (SC) and Scheduled Tribes (ST) Cell in an institute promotes the special interests of students in the reserved category. It is expected to provide special inputs in areas where the students experience difficulties.',
        activities: [
            {
                desc: 'The Cell may conduct regular remedial coaching classes on life skills, personality development, writing assignments and making presentations, as well as English and local language classes. The Cell also is expected to organize interactive sessions and informal meetings with students to attend to their personal, social and academic problems.'
            },
            {
                desc: 'Guide the SC/ST/OBC/PWD students of the Institute, to optimally utilize the benefits of the schemes offered by the State Governments, Government of India (GOI) and UGC.'
            }
        ],
        icon: Users,
    },
    {
        title: '5. Governing Council',
        objective: 'To govern and oversee the overall functioning and strategic direction of the institution.',
        activities: [],
        icon: Gavel,
    },
    {
        title: '6. Finance Committee',
        objective: 'To satisfy the financial requirements of the Institution.',
        activities: [
            {
                desc: 'The Governing Body shall arrange to have the college accounts audited by the end pf each financial year by a Chartered Accountant. The annual accounts and audit report of the college shall be made available to the University and to the Government for inspection whenever applicable. Annual general body meeting of the registered society / trust as applicable shall be convened regularly.'
            }
        ],
        icon: Banknote,
    },
    {
        title: '7. Purchase Committee',
        objective: 'Monitoring & Documenting Purchase related activities.',
        activities: [],
        icon: ShoppingCart,
    },
    {
        title: '8. Welfare Committee',
        objective: 'To monitor and meet the academic and welfare activities of student / staff',
        activities: [
            {
                desc: 'The academic and welfare activities of students belonging to SC/ST/BC physically challenged, women and other weaker sections are properly looked into and special attention should be taken.'
            },
            {
                desc: 'Co / Extra Curricular & Extension activities are conducted to the students.'
            },
            {
                desc: 'Facilities to staff members.'
            }
        ],
        icon: Heart,
    },
    {
        title: '9. Mentoring / Counselling Cell',
        objective: 'Young adults nowadays are faced with a number of issues related to academics and otherwise during their student life. They are in need of an outlet to express their emotional upheavals. This is where a student counselor comes into picture. We have a regular counselor. The most common issues faced by students are related to time management, stress management, peer pressure, procrastination, body language, communication skills etc. One-to-one counseling sessions with the student counselor helps our students to sort out these issues and unburden themselves of their problems.',
        activities: [
            {
                desc: 'By making the sessions light and interactive, the student counselor creates a conducive environment for the students to facilitate effective communication. Counseling helps the students concentrate better on their studies without getting emotionally drained by other issues.'
            }
        ],
        icon: Activity,
    },
    {
        title: '10. Women Empowerment Cell',
        objective: 'To empower women students and staff to make them understand and react suitable to the issues pertaining to women students.',
        activities: [
            {
                desc: '1. To sensitize the college community on the need for empowerment of women'
            },
            {
                desc: '2. To counsel women boarders and non-resident women students'
            },
            {
                desc: '3. To enable the College community understand the role of everyone in empowering women students'
            }
        ],
        icon: Briefcase,
    }
];

const nonStatutoryCommittees = [
    {
        title: '(1) External Relations',
        objective: 'A director of external relations is a communications manager tasked with creating a positive public image for an Institution. This type of public relations job requires an expert communicator with extensive experience in handling situations.',
        activities: [
            {
                desc: 'Directors may do this by overseeing the writing and editing of event scripts, speeches, shareholder documents and reports, advertising and promotional materials, press releases, interviews, and any other external communications.'
            },
            {
                desc: 'In the case of an unforeseen issue, crisis or other potentially problematic situation, the director of public relations generates communications to maintain a positive image for the Institute.'
            }
        ],
        icon: Users,
    },
    {
        title: '(2) R&D Activities',
        objective: 'The Research and Development Cell aims to nurture research culture in the College by promoting research in newly emerging and challenging areas of Engineering, Technology, Science and Humanities.',
        activities: [
            {
                desc: '1. To encourage faculty members of all the disciplines in Engineering/Science /Humanities in R&D activities for their professional growth.'
            },
            {
                desc: '2. To undertake research activities and development projects offered by agencies such as ISRO, DRDO, CSIR, DST, AICTE, UGC, DBT, INFOSYS, etc.'
            },
            {
                desc: '3. To encourage staff members and students to publish technical papers for publishing in National and reputed International Conferences/Journals'
            }
        ],
        icon: BookOpen,
    },
    {
        title: '(3) Student Extra Curricular Activities',
        objective: 'To motivate the students and coordinating them to carry out extra-curricular activities through various departmental clubs and other clubs in the college.',
        activities: [
            {
                desc: '1. Establishment of Departmental Clubs'
            },
            {
                desc: '2. Planning of activities through the established clubs'
            },
            {
                desc: '3. Executing the events planned through various clubs'
            }
        ],
        icon: GraduationCap,
    },
    {
        title: '(4) Hostel Committee',
        objective: 'To frame and monitor the rules and regulations of the Hostel and ensuring the proper conduction.',
        activities: [
            {
                desc: 'A certain measure of self-governing, decision-making and problem solving is involved in the hostel administration. This aspect of the college hostel life promotes the students\' sense of responsibility and sensitive self-awareness. Hostel students are expected to adhere to the rule.'
            }
        ],
        icon: Home,
    },
    {
        title: '(5) Library Advisory Committee',
        objective: 'To enhance the library facilities on timely basis and upgrading the library as per the updated regulations.',
        activities: [
            {
                desc: '1. To frame general rules for the management of the Library'
            },
            {
                desc: '2. To advise the Librarian regarding general library development'
            },
            {
                desc: '3. To prepare the annual budget estimates'
            },
            {
                desc: '4. To arrange for the stock taking of the library'
            }
        ],
        icon: FileText,
    },
    {
        title: '(6) Academic Audit',
        objective: 'To monitor the academic related activities and maintains the documentation related to various Departments.',
        activities: [
            {
                desc: 'Monitoring the academic activities of the Departments'
            },
            {
                desc: 'Academic document verification on timely basis'
            },
            {
                desc: 'Considation of academic data'
            }
        ],
        icon: CheckSquare,
    },
    {
        title: '(7) Examination Committee',
        objective: 'To coordinate with the University for the proper conduction of final semester exams and also taking role in the conduction of Internal Assessment Tests.',
        activities: [
            {
                desc: 'Conduction of Internal Assessment Tests'
            },
            {
                desc: 'Framing a committee and work towards the conduction of University Exams'
            }
        ],
        icon: List,
    },
    {
        title: '(8) Admission Committee',
        objective: 'To coordinate with the Government and University to carry out the government admissions for the respective academic years. To effectively carry out the admission process for Management Quota.',
        activities: [
            {
                desc: 'Admission procedure as per the regulations framed by the Government / University'
            }
        ],
        icon: Users,
    }
];

function CommitteeCard({ item }: { item: any }) {
    const Icon = item.icon;
    return (
        <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
            <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-navy-light/10 rounded-md text-navy">
                        <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy-dark leading-tight">{item.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                {item.objective && (
                    <div className="mb-4">
                        <h4 className="font-semibold text-teal mb-2">Objective:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.objective}</p>
                    </div>
                )}

                {item.activities && item.activities.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-teal mb-2">Associated Activities:</h4>
                        <div className="space-y-3">
                            {item.activities.map((act: any, index: number) => (
                                <div key={index} className="text-sm">
                                    {act.subtitle && <p className="font-medium text-navy-mid mb-1">{act.subtitle}</p>}
                                    <p className="text-gray-600 leading-relaxed">{act.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default function CommitteesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-dark mb-4">Committees</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Statutory and Non-Statutory Committees constituted to streamline the operations and ensure compliance and quality at NCVSTC.
                    </p>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-navy-dark mb-2 text-center">NCVSTC Statutory Committees</h2>
                    <p className="text-gray-500 text-center mb-12">Official committees established according to government regulations and norms</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {statutoryCommittees.map((committee, idx) => (
                            <CommitteeCard key={idx} item={committee} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-navy-dark mb-2 text-center">NCVSTC Non-Statutory Committees</h2>
                    <p className="text-gray-500 text-center mb-12">Committees established for the internal administration, development, and student welfare</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {nonStatutoryCommittees.map((committee, idx) => (
                            <CommitteeCard key={idx} item={committee} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

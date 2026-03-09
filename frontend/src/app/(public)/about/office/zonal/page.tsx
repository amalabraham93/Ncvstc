import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Zonal Offices | NCVSTC',
};

export default function ZonalOfficesPage() {
    const zones = [
        {
            name: 'CENTRAL ZONE',
            states: 'Uttarakhand\nDelhi\nMadhya Pradesh\nChhattisgarh',
            office: 'Central Zonal Officer\nNational Council of Vocational and Research Training.\n108-B, Jaina Tower II, District Center,\nJanakpuri, New Delhi - 110058\nPhone: 011 - 25610208,\n8527878208.',
            email: 'centralzone@ncvrtindia.org'
        },
        {
            name: 'EAST ZONE',
            states: 'Odisha\nSikkim\nBihar\nWest Bengal\nJharkhand\nArunachal Pradesh\nAssam\nMeghalaya\nManipur\nMizoram\nNagaland\nTripura',
            office: 'East Zonal Officer\nNational Council of Vocational and Research Training.\n14/1B, Palm Avenue,\nNear Junior Ashok Hall School,\nKolkata, West Bengal - 700019.\nPhone: 9831200077,\n9831311721.',
            email: 'eastzone@ncvrtindia.org'
        },
        {
            name: 'NORTH ZONE',
            states: 'Ladakh\nJammu and Kashmir\nHimachal Pradesh\nPunjab\nChandigarh\nHaryana\nUttar Pradesh',
            office: 'North Zonal Officer\nNational Council of Vocational and Research Training.\nRamgarhia Grurdwara Road,\nDhuri, Opp. Laxmi Iron Store,\nDhuri (TK), Sangrur - 148024, Punjab.\nPhone: 7009495865,\n7589080449',
            email: 'northzone@ncvrtindia.org'
        }
    ];

    return (
        <div className="bg-[#FAFBFF] min-h-screen">
            <section className="bg-[white] py-16 px-4">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl text-black mb-10">
                        Zonal Offices
                    </h1>
                </div>

                <div className="max-w-[1280px] mx-auto overflow-x-auto">
                    <table className="w-full border-collapse border border-[#DDE3F0] min-w-[800px] text-sm">
                        <thead>
                            <tr className="bg-[#2A75C3] text-white">
                                <th className="py-3 px-4 text-left border border-[#DDE3F0] font-medium w-1/4">STATE / UT ZONE WISE</th>
                                <th className="py-3 px-4 text-left border border-[#DDE3F0] font-medium w-2/4">ZONAL OFFICE</th>
                                <th className="py-3 px-4 text-left border border-[#DDE3F0] font-medium w-1/4">CONTACT INFO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zones.map((zone, idx) => (
                                <tr key={idx} className="bg-white">
                                    <td className="py-4 px-4 border border-[#DDE3F0] align-top">
                                        <h3 className="text-lg text-[#555] mb-2">{zone.name}</h3>
                                        <div className="text-[#666] whitespace-pre-line leading-relaxed">
                                            {zone.states}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 border border-[#DDE3F0] align-top text-[#666] whitespace-pre-line leading-relaxed">
                                        {zone.office}
                                    </td>
                                    <td className="py-4 px-4 border border-[#DDE3F0] align-top">
                                        <a href={`mailto:${zone.email}`} className="text-[#2A75C3] hover:underline">
                                            {zone.email}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

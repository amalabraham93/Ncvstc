import HomeHero from './components/HomeHero';
import HomeTicker from './components/HomeTicker';
import QuickLinks from './components/QuickLinks';
import HomeAbout from './components/HomeAbout';
import HomeStats from './components/HomeStats';
import HomePrograms from './components/HomePrograms';
import HomeOrgChart from './components/HomeOrgChart';
import HomeContactCTA from './components/HomeContactCTA';

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <HomeTicker />
            <QuickLinks />
            <HomeAbout />
            <HomeStats />
            <HomePrograms />
            <HomeOrgChart />
            <HomeContactCTA />
        </>
    );
}

import TopBar from './components/TopBar';
import Navbar from '../../components/Navbar';
import HomeFooter from './components/HomeFooter';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <TopBar />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <HomeFooter />
        </div>
    );
}

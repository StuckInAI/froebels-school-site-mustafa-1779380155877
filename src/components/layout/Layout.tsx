import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementTicker />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

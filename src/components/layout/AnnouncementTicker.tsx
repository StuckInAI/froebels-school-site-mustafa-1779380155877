import { announcements } from '@/lib/data';

export default function AnnouncementTicker() {
  const text = announcements.join('   •   ');

  return (
    <div className="bg-accent text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 bg-primary-dark text-white text-xs font-bold uppercase tracking-widest px-4 py-1 mr-4 z-10">
          News
        </div>
        <div className="ticker-wrapper flex-1">
          <div className="ticker-content text-sm font-medium">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

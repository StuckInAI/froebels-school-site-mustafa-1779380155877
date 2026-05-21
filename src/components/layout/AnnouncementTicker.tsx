import { announcementItems } from '@/lib/data';

export default function AnnouncementTicker() {
  const text = announcementItems.join('   |   ');

  return (
    <div className="bg-accent text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="bg-primary text-white text-xs font-bold px-3 py-1 mr-3 whitespace-nowrap shrink-0 uppercase tracking-wider">
          News
        </span>
        <div className="ticker-wrapper flex-1">
          <span className="ticker-content text-sm font-medium">{text}</span>
        </div>
      </div>
    </div>
  );
}

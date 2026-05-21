import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import ProgramsSection from '@/components/home/ProgramsSection';
import NewsSection from '@/components/home/NewsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutSnippet />
      <ProgramsSection />
      <AchievementsSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

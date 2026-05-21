import type { NavItem, NewsItem, Program, Testimonial, Achievement, GalleryItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our History', href: '/about' },
      { label: 'Mission & Vision', href: '/about' },
      { label: 'Leadership', href: '/about' },
      { label: 'Campuses', href: '/about' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Pre-Primary', href: '/academics' },
      { label: 'Primary', href: '/academics' },
      { label: 'Middle School', href: '/academics' },
      { label: 'O-Levels', href: '/academics' },
      { label: 'Matriculation', href: '/academics' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'News & Events', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const announcements: string[] = [
  '🎓 Admissions Open for 2025-26 — Apply Now!',
  '🏆 Froebel\'s students top the board exams — Congratulations to all!',
  '📅 Annual Sports Day: March 15, 2025',
  '📚 Summer Camp Registration Now Open',
  '🌟 Parent-Teacher Meeting scheduled for February 28, 2025',
  '🎨 Annual Art Exhibition: April 5, 2025',
];

export const stats = [
  { label: 'Years of Excellence', value: '49+' },
  { label: 'Campuses', value: '12' },
  { label: 'Students Enrolled', value: '3,500+' },
  { label: 'Qualified Teachers', value: '250+' },
  { label: 'Board Toppers', value: '500+' },
];

export const programs: Program[] = [
  {
    id: 1,
    name: 'Pre-Primary',
    description: 'A nurturing environment for early learners using Froebel\'s play-based methodology to ignite curiosity and creativity.',
    icon: '🌱',
    grades: 'Nursery – KG 2',
    color: 'bg-green-50 border-green-200',
  },
  {
    id: 2,
    name: 'Primary School',
    description: 'Building strong foundations in literacy, numeracy, science, and the arts with engaging, hands-on learning.',
    icon: '📖',
    grades: 'Grade 1 – 5',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 3,
    name: 'Middle School',
    description: 'Expanding horizons with a broad curriculum, critical thinking skills, and co-curricular activities.',
    icon: '🔬',
    grades: 'Grade 6 – 8',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    id: 4,
    name: 'Matriculation',
    description: 'Pakistan Board curriculum delivered by expert faculty with consistent top results at SSC examinations.',
    icon: '🎓',
    grades: 'Grade 9 – 10',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    id: 5,
    name: 'O-Levels',
    description: 'Cambridge International O-Level programme preparing students for global academic excellence.',
    icon: '🌍',
    grades: 'Grade 9 – 10',
    color: 'bg-red-50 border-red-200',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Froebel\'s Students Achieve Outstanding O-Level Results',
    date: 'January 15, 2025',
    category: 'Academics',
    excerpt: 'Our students have once again demonstrated exceptional performance in the Cambridge O-Level examinations, with multiple students achieving straight A*s.',
  },
  {
    id: 2,
    title: 'Annual Science Exhibition 2025',
    date: 'January 10, 2025',
    category: 'Events',
    excerpt: 'Students from all campuses showcased innovative projects at our Annual Science Exhibition, drawing praise from judges and parents alike.',
  },
  {
    id: 3,
    title: 'New State-of-the-Art Computer Labs Inaugurated',
    date: 'December 20, 2024',
    category: 'Infrastructure',
    excerpt: 'Froebel\'s inaugurated brand-new computer labs equipped with the latest technology to enhance digital literacy across all campuses.',
  },
  {
    id: 4,
    title: 'Inter-School Debate Competition — First Place',
    date: 'December 5, 2024',
    category: 'Co-Curricular',
    excerpt: 'Froebel\'s debate team brought home the gold trophy from the city-wide inter-school debate competition, showcasing outstanding oratory skills.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Raza',
    role: 'Parent of Class 8 Student',
    quote: 'Froebel\'s has been an incredible journey for my child. The teachers are dedicated, the environment is nurturing, and the academic standards are truly world-class.',
  },
  {
    id: 2,
    name: 'Sana Khan',
    role: 'Alumni — Batch 2020',
    quote: 'My time at Froebel\'s shaped who I am today. The school didn\'t just teach me academics — it built my character, confidence, and love for learning.',
  },
  {
    id: 3,
    name: 'Dr. Fatima Malik',
    role: 'Parent of Two Students',
    quote: 'Both my children have flourished at Froebel\'s. The balanced approach between academics and co-curricular activities is what sets this school apart.',
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Board Topper',
    description: 'Produced 12 district toppers in SSC 2024 examinations',
    year: '2024',
    icon: '🥇',
  },
  {
    id: 2,
    title: 'Cambridge Excellence Award',
    description: 'Recognized by Cambridge for outstanding O-Level results',
    year: '2024',
    icon: '🏆',
  },
  {
    id: 3,
    title: 'Best School Award',
    description: 'Awarded Best Private School by the Education Board of Karachi',
    year: '2023',
    icon: '⭐',
  },
  {
    id: 4,
    title: 'Sports Champions',
    description: 'Winners of the City Inter-School Cricket & Athletics Championship',
    year: '2024',
    icon: '🏅',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Annual Sports Day', category: 'Sports', image: '' },
  { id: 2, title: 'Science Exhibition', category: 'Academics', image: '' },
  { id: 3, title: 'Graduation Ceremony', category: 'Events', image: '' },
  { id: 4, title: 'Art & Craft Display', category: 'Arts', image: '' },
  { id: 5, title: 'Computer Lab', category: 'Infrastructure', image: '' },
  { id: 6, title: 'Library', category: 'Infrastructure', image: '' },
];

import type { NavItem, NewsItem, GalleryItem, Faculty, Testimonial, Program, StatItem, Achievement } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'History', href: '/about#history' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Principal\'s Message', href: '/about#principal' },
      { label: 'Board of Governors', href: '/about#board' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Pre-School', href: '/academics#preschool' },
      { label: 'Primary School', href: '/academics#primary' },
      { label: 'Middle School', href: '/academics#middle' },
      { label: 'Secondary School', href: '/academics#secondary' },
      { label: 'O-Levels', href: '/academics#olevels' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'How to Apply', href: '/admissions#apply' },
      { label: 'Fee Structure', href: '/admissions#fees' },
      { label: 'Scholarships', href: '/admissions#scholarships' },
    ],
  },
  { label: 'News & Events', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Annual Sports Day 2024 — A Grand Celebration',
    date: '2024-11-15',
    category: 'Events',
    excerpt: 'Froebel\'s Annual Sports Day was a vibrant celebration of athleticism, teamwork, and school spirit. Students from all classes participated with tremendous enthusiasm.',
  },
  {
    id: 2,
    title: 'O-Level Results — Outstanding Performance',
    date: '2024-10-20',
    category: 'Academic',
    excerpt: 'We are proud to announce that our O-Level students have achieved exceptional results with 95% of students scoring A* and A grades across all subjects.',
  },
  {
    id: 3,
    title: 'Science Fair 2024 — Innovation Unleashed',
    date: '2024-09-30',
    category: 'Academic',
    excerpt: 'Students showcased remarkable scientific projects at this year\'s Science Fair, demonstrating creativity and critical thinking skills.',
  },
  {
    id: 4,
    title: 'Inter-School Debate Competition Winners',
    date: '2024-09-10',
    category: 'Achievement',
    excerpt: 'Froebel\'s debate team clinched the first position at the inter-school debate competition, showcasing excellent oratory and analytical skills.',
  },
  {
    id: 5,
    title: 'Parent-Teacher Meeting — Term 1',
    date: '2024-08-25',
    category: 'Events',
    excerpt: 'The first term Parent-Teacher meeting provided parents with valuable insights into their children\'s academic progress and overall development.',
  },
  {
    id: 6,
    title: 'New Computer Lab Inauguration',
    date: '2024-08-10',
    category: 'Facility',
    excerpt: 'A state-of-the-art computer lab equipped with the latest technology was inaugurated to enhance students\' digital literacy and coding skills.',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Annual Sports Day', category: 'Sports', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { id: 2, title: 'Science Exhibition', category: 'Academic', image: 'https://images.unsplash.com/photo-1532094349884-543559059161?w=600&q=80' },
  { id: 3, title: 'Cultural Day Celebrations', category: 'Events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  { id: 4, title: 'Classroom Activities', category: 'Academic', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
  { id: 5, title: 'Library Reading Hour', category: 'Academic', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80' },
  { id: 6, title: 'Art & Craft Exhibition', category: 'Arts', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80' },
  { id: 7, title: 'Graduation Ceremony', category: 'Events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
  { id: 8, title: 'Football Tournament', category: 'Sports', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80' },
  { id: 9, title: 'Music Concert', category: 'Arts', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80' },
];

export const facultyMembers: Faculty[] = [
  { id: 1, name: 'Dr. Ayesha Malik', designation: 'Principal', department: 'Administration', qualification: 'Ph.D. Education, Cambridge University' },
  { id: 2, name: 'Mr. Hassan Ahmed', designation: 'Vice Principal', department: 'Administration', qualification: 'M.Ed., University of Karachi' },
  { id: 3, name: 'Ms. Sana Raza', designation: 'Head of Sciences', department: 'Science', qualification: 'M.Sc. Physics, LUMS' },
  { id: 4, name: 'Mr. Tariq Hussain', designation: 'Head of Mathematics', department: 'Mathematics', qualification: 'M.Sc. Mathematics, IBA' },
  { id: 5, name: 'Ms. Fatima Sheikh', designation: 'Head of English', department: 'Languages', qualification: 'M.A. English Literature, GCU' },
  { id: 6, name: 'Mr. Bilal Khan', designation: 'Head of Social Sciences', department: 'Humanities', qualification: 'M.A. History, Punjab University' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mrs. Zara Qureshi',
    role: 'Parent of Grade 8 Student',
    text: 'Froebel\'s has been an exceptional choice for our daughter. The teachers are dedicated and the overall environment fosters both academic excellence and character development.',
  },
  {
    id: 2,
    name: 'Ahmed Raza',
    role: 'Alumni, Class of 2020',
    text: 'The foundation I received at Froebel\'s was invaluable. The critical thinking and leadership skills I developed here helped me excel at university and beyond.',
  },
  {
    id: 3,
    name: 'Mr. Imran Siddiqui',
    role: 'Parent of Grade 5 Student',
    text: 'The school\'s commitment to holistic development is evident in my son\'s growth. He is not only excelling academically but has also developed wonderful social skills.',
  },
  {
    id: 4,
    name: 'Nadia Farooq',
    role: 'Alumni, Class of 2022',
    text: 'Froebel\'s gave me the confidence and knowledge to pursue my dreams. The teachers here go above and beyond to ensure every student reaches their potential.',
  },
];

export const programs: Program[] = [
  {
    id: 1,
    name: 'Pre-School',
    level: 'Nursery & KG',
    description: 'A nurturing foundation for early learners with play-based learning, creative exploration, and social skill development.',
    ageGroup: 'Ages 3-5',
    icon: '🌱',
  },
  {
    id: 2,
    name: 'Primary School',
    level: 'Grades 1-5',
    description: 'Building strong academic foundations in literacy, numeracy, science, and social studies with engaging, activity-based curriculum.',
    ageGroup: 'Ages 5-10',
    icon: '📚',
  },
  {
    id: 3,
    name: 'Middle School',
    level: 'Grades 6-8',
    description: 'Developing critical thinking, research skills, and subject expertise as students prepare for higher academic challenges.',
    ageGroup: 'Ages 10-13',
    icon: '🔬',
  },
  {
    id: 4,
    name: 'Secondary School',
    level: 'Grades 9-10 (Matric)',
    description: 'Rigorous preparation for board examinations with focused academic support, mentoring, and career guidance.',
    ageGroup: 'Ages 13-15',
    icon: '🎓',
  },
  {
    id: 5,
    name: 'O-Level Programme',
    level: 'Cambridge O-Levels',
    description: 'International Cambridge curriculum delivering globally recognized qualifications with world-class academic standards.',
    ageGroup: 'Ages 13-16',
    icon: '🌍',
  },
  {
    id: 6,
    name: 'Extra-Curricular',
    level: 'All Grades',
    description: 'Sports, arts, music, debate, robotics, and countless other activities to nurture every talent and interest.',
    ageGroup: 'All Ages',
    icon: '⭐',
  },
];

export const stats: StatItem[] = [
  { label: 'Years of Excellence', value: '49+', icon: '🏛️' },
  { label: 'Students Enrolled', value: '3500+', icon: '👨‍🎓' },
  { label: 'Qualified Teachers', value: '200+', icon: '👩‍🏫' },
  { label: 'Campuses', value: '12', icon: '🏫' },
];

export const achievements: Achievement[] = [
  { id: 1, title: 'Best School Award', description: 'Recognized as one of the top schools in Pakistan for academic excellence', icon: '🏆', year: '2023' },
  { id: 2, title: 'Cambridge Centre of Excellence', description: 'Designated Cambridge Centre of Excellence for outstanding O-Level results', icon: '🎖️', year: '2022' },
  { id: 3, title: 'ISO Certification', description: 'ISO 9001:2015 certified institution for quality management in education', icon: '✅', year: '2021' },
  { id: 4, title: 'Green School Award', description: 'Awarded for environmental initiatives and sustainable campus practices', icon: '🌿', year: '2023' },
];

export const announcementItems: string[] = [
  '📢 Admissions Open for Academic Year 2025-26 — Apply Now!',
  '🏆 Congratulations to our O-Level students for outstanding results!',
  '⚽ Annual Sports Day — 15th February 2025',
  '📚 Scholarship Applications for 2025-26 now open',
  '🎭 Annual Prize Distribution Ceremony — 20th March 2025',
  '🔬 Science Fair registrations open — Deadline: 28th January 2025',
];

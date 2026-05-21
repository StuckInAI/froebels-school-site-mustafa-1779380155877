export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: string;
  year: string;
};

export type Faculty = {
  id: number;
  name: string;
  designation: string;
  department: string;
  image?: string;
  qualification: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string;
};

export type Program = {
  id: number;
  name: string;
  level: string;
  description: string;
  ageGroup: string;
  icon: string;
};

export type StatItem = {
  label: string;
  value: string;
  icon: string;
};

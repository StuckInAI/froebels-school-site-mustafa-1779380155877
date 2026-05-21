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

export type Program = {
  id: number;
  name: string;
  description: string;
  icon: string;
  grades: string;
  color: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

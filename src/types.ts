export type TrackCategory = 
  | 'tech' 
  | 'enterprise' 
  | 'business' 
  | 'softskills' 
  | 'kids';

export interface Course {
  id: string;
  title: string;
  category: TrackCategory;
  categoryLabel: string;
  badgeTag: string;
  rating: number;
  ratingCount: number;
  price: string;
  originalPrice?: string;
  duration: string;
  mode: 'Hybrid' | 'Classroom' | 'Live Online' | 'Self-Paced';
  isPopular?: boolean;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
  targetAudience: string;
  curriculum: { module: string; topics: string[] }[];
  iconName: string;
  image: string;
}

export interface TrackInfo {
  id: TrackCategory;
  title: string;
  subtitle: string;
  iconSymbol: string;
  color: string;
  accentBg: string;
  textColor: string;
  borderColor: string;
  description: string;
  programsList: string[];
  bannerImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  year: string;
  rating: number;
  quote: string;
  avatar: string;
  isParent?: boolean;
  categoryTag: string;
}

export interface WonderTouchTier {
  id: 'lite' | 'standard' | 'premium';
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  isComingSoon?: boolean;
  priceNote: string;
  features: string[];
  hardwareIncludes: string[];
  recommendedFor: string;
  colorGradient: string;
  buttonText: string;
}

export interface DaycareScheduleItem {
  time: string;
  activity: string;
  description: string;
  icon: string;
  category: 'meal' | 'play' | 'rest' | 'learning';
}

export interface HiringPartner {
  name: string;
  type: string;
  logoText: string;
  color: string;
}

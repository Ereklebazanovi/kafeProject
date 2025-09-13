export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hot-drinks' | 'cold-drinks' | 'food' | 'desserts';
  image: string;
  isAvailable: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  slug: string;
  icon: string;
  items: MenuItem[];
}
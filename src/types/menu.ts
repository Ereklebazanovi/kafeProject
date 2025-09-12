export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  category: 'hot-drinks' | 'cold-drinks' | 'food' | 'desserts';
  image: string;
  isChefRecommended: boolean;
  allergens: string[];
  preparationTime: number; // minutes
  isAvailable: boolean;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
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
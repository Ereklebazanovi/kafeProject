export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: 'interior' | 'food' | 'staff' | 'events';
}
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import type { MenuItem as MenuItemType } from '../../types';

interface Category {
  id: string;
  name: string;
  nameEn: string;
}

interface MenuCategoryProps {
  category: Category;
  items: MenuItemType[];
}

const MenuCategory = ({ category, items }: MenuCategoryProps) => {
  if (items.length === 0) return null;

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'hot-drinks':
        return '☕';
      case 'cold-drinks':
        return '🥤';
      case 'food':
        return '🍽️';
      case 'desserts':
        return '🍰';
      default:
        return '🍴';
    }
  };

  const getCategoryDescription = (categoryId: string) => {
    switch (categoryId) {
      case 'hot-drinks':
        return 'ცხელი სასმელები, რომლებიც თბილს და კომფორტს მოგანიჭებთ';
      case 'cold-drinks':
        return 'გამაგრილებელი სასმელები ყველა დროისთვის';
      case 'food':
        return 'ტრადიციული ქართული და თანამედროვე კერძები';
      case 'desserts':
        return 'ტკბილი დასასრული თქვენი სადილისთვის';
      default:
        return 'გემრიელი კერძების შერჩევა';
    }
  };

  return (
    <section className="mb-16">
      {/* Category Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg mb-6">
          <span className="text-4xl">{getCategoryIcon(category.id)}</span>
          <div className="text-left">
            <h2 className="text-3xl font-serif font-bold text-primary">
              {category.name}
            </h2>
            <p className="text-gray text-sm">{category.nameEn}</p>
          </div>
        </div>
        
        <p className="text-lg text-gray max-w-2xl mx-auto">
          {getCategoryDescription(category.id)}
        </p>
        
        <div className="mt-4">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            {items.length} კერძი
          </span>
        </div>
      </motion.div>

      {/* Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <MenuItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Category Stats */}
      <motion.div
        className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-center bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-primary">
            {items.filter(item => item.isChefRecommended).length}
          </div>
          <div className="text-sm text-gray">შეფის რეკომენდაცია</div>
        </div>
        
        <div className="text-center bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-secondary">
            {items.filter(item => item.isAvailable).length}
          </div>
          <div className="text-sm text-gray">ხელმისაწვდომი</div>
        </div>
        
        <div className="text-center bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-accent">
            ₾{Math.min(...items.map(item => item.price)).toFixed(2)}
          </div>
          <div className="text-sm text-gray">მინ. ფასი</div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuCategory;
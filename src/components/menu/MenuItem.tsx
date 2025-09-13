import { motion } from 'framer-motion';
import type { MenuItem as MenuItemType } from '../../types';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const MenuItem = ({ item, index }: MenuItemProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-accent/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-2">
                {item.category === 'hot-drinks' && '☕'}
                {item.category === 'cold-drinks' && '🥤'}
                {item.category === 'food' && '🍽️'}
                {item.category === 'desserts' && '🍰'}
              </div>
              <p className="text-sm">ფოტო მალე დაემატება</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-serif font-bold text-primary mb-1">
              {item.name}
            </h3>
            <p className="text-gray text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <span className="text-xl font-bold text-primary">₾{item.price}</span>
          </div>
        </div>

        {/* Status indicator */}
        {!item.isAvailable && (
          <div className="text-xs text-error bg-error/10 px-2 py-1 rounded-full inline-block">
            დროებით მიუწვდომელია
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItem;
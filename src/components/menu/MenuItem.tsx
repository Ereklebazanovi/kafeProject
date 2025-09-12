import { motion } from 'framer-motion';
import { FaClock, FaLeaf, FaStar, FaExclamationTriangle } from 'react-icons/fa';
import type { MenuItem as MenuItemType } from '../../types';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const MenuItem = ({ item, index }: MenuItemProps) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        !item.isAvailable ? 'opacity-60' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: item.isAvailable ? 1 : 0.6, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={item.isAvailable ? { y: -5 } : {}}
    >
      {/* Item Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
        <div className="text-6xl text-primary/20">🍽️</div>
        {/* Placeholder for actual food image */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          <div className="text-center text-primary/60">
            <div className="text-4xl mb-2">
              {item.category === 'hot-drinks' && '☕'}
              {item.category === 'cold-drinks' && '🥤'}
              {item.category === 'food' && '🍽️'}
              {item.category === 'desserts' && '🍰'}
            </div>
            <p className="text-xs">კერძის ფოტო</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {item.isChefRecommended && (
            <div className="bg-accent text-white p-2 rounded-full shadow-lg">
              <FaStar size={12} />
            </div>
          )}
          {!item.isAvailable && (
            <div className="bg-error text-white p-2 rounded-full shadow-lg">
              <FaExclamationTriangle size={12} />
            </div>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <span className="text-lg font-bold text-primary">₾{item.price}</span>
        </div>
      </div>

      {/* Item Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-gray/70">{item.nameEn}</p>
          </div>
        </div>

        <p className="text-gray mb-4 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Item Details */}
        <div className="flex items-center justify-between text-sm text-gray mb-4">
          <div className="flex items-center space-x-2">
            <FaClock className="text-accent" />
            <span>{item.preparationTime} წუთი</span>
          </div>
          
          {item.allergens.length > 0 && (
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-warning" />
              <span className="text-xs">ალერგენები</span>
            </div>
          )}
        </div>

        {/* Allergens */}
        {item.allergens.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full"
                >
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Nutritional Info */}
        {item.nutritionalInfo && (
          <div className="border-t border-accent/10 pt-4">
            <div className="grid grid-cols-2 gap-2 text-xs text-gray">
              <div className="flex justify-between">
                <span>კალორია:</span>
                <span>{item.nutritionalInfo.calories}</span>
              </div>
              <div className="flex justify-between">
                <span>ცილა:</span>
                <span>{item.nutritionalInfo.protein}გ</span>
              </div>
              <div className="flex justify-between">
                <span>ნახშირწყალი:</span>
                <span>{item.nutritionalInfo.carbs}გ</span>
              </div>
              <div className="flex justify-between">
                <span>ცხიმი:</span>
                <span>{item.nutritionalInfo.fat}გ</span>
              </div>
            </div>
          </div>
        )}

        {/* Status Messages */}
        {!item.isAvailable && (
          <div className="mt-4 text-center">
            <span className="text-error font-medium">დროებით მიუწვდომელია</span>
          </div>
        )}

        {item.isChefRecommended && item.isAvailable && (
          <div className="mt-4 text-center">
            <span className="text-accent font-medium flex items-center justify-center space-x-1">
              <FaStar size={14} />
              <span>შეფის რეკომენდაცია</span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItem;
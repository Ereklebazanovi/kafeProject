import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaImage, FaUtensils, FaUsers, FaCalendarAlt, FaCrown } from 'react-icons/fa';
import { useGallery } from '../../hooks/useFirestore';

const Gallery = () => {
  const { galleryItems, loading, error } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'ყველა', icon: <FaImage /> },
    { id: 'interior', name: 'ინტერიერი', icon: <FaImage /> },
    { id: 'food', name: 'კერძები', icon: <FaUtensils /> },
    { id: 'staff', name: 'გუნდი', icon: <FaUsers /> },
    { id: 'events', name: 'ღონისძიებები', icon: <FaCalendarAlt /> }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-primary">გალერეის ჩატვირთვა...</div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state - no gallery items yet
  if (!loading && galleryItems.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-light via-white to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-light/50"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-warm rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl text-white">📸</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              გალერეა მალე შეივსება
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              ვამზადებთ საუკეთესო ფოტოებს ჩვენი კაფის ატმოსფეროსა და კერძების შესახებ
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gold/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
            <FaCrown className="text-accent" size={18} />
            <span>ვიზუალური გამოცდილება</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            ჩვენი გალერეა
          </h2>
          
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium">
              აღმოაჩინე ჩვენი კაფის <span className="text-accent font-bold">ატმოსფერო</span>, 
              <span className="text-warm font-bold"> გემრიელი კერძები</span> და 
              <span className="text-gold font-bold"> სპეციალური მომენტები</span>.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-accent to-warm text-white shadow-2xl transform -translate-y-1'
                    : 'bg-gray-light/80 text-primary hover:bg-gradient-to-r hover:from-accent/20 hover:to-warm/20 hover:text-accent hover:-translate-y-1'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-gradient-to-br from-accent/10 to-warm/10 rounded-3xl overflow-hidden aspect-square cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-light/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-warm rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">📷</span>
                </div>
              </div>
              
              {/* Image overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-display font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <span className="text-xs bg-white/30 backdrop-blur-sm px-3 py-2 rounded-full font-medium">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl text-accent shadow-lg">
                  {categories.find(cat => cat.id === item.category)?.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-light/50 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-warm/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-gray">📷</span>
              </div>
              <p className="text-xl text-gray">
                ამ კატეგორიაში ფოტოები ჯერ არ არის დამატებული
              </p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-light/50 max-w-2xl mx-auto">
            <p className="text-lg text-gray mb-6">
              გსურს ნახო ეს ყველაფერი პირადად?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-warm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>ვიზიტის დაგეგმვა</span>
                <span>📞</span>
              </motion.a>
              <motion.a
                href="/menu"
                className="inline-flex items-center justify-center space-x-2 border-2 border-accent text-accent hover:bg-gradient-to-r hover:from-accent hover:to-warm hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>მენიუს ნახვა</span>
                <span>🍽️</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
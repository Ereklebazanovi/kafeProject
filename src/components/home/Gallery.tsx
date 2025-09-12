import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaUtensils, FaUsers, FaCalendarAlt } from 'react-icons/fa';
// import { useGallery } from '../../hooks/useFirestore';
import { mockGalleryItems } from '../../data/mockData';

const Gallery = () => {
  // const { galleryItems: firebaseItems, loading } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Use mock data for now (Firebase disabled for faster loading)
  const galleryItems = mockGalleryItems;
  const loading = false;

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

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            ჩვენი გალერეა
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            აღმოაჩინე ჩვენი კაფის ატმოსფერო, გემრიელი კერძები და სპეციალური მომენტები
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 bg-background p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-primary/20">
                📷
              </div>
              
              {/* Image overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-serif font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-primary">
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
            <div className="text-6xl text-gray/20 mb-4">📷</div>
            <p className="text-xl text-gray">
              ამ კატეგორიაში ფოტოები ჯერ არ არის დამატებული
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray mb-6">
            გსურს ნახო ეს ყველაფერი პირადად?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ვიზიტის დაგეგმვა
            </motion.a>
            <motion.a
              href="/menu"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              მენიუს ნახვა
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
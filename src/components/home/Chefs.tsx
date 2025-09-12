import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaUtensils } from 'react-icons/fa';
// import { useChefs } from '../../hooks/useFirestore';
import { mockChefs } from '../../data/mockData';

const Chefs = () => {
  // const { chefs: firebaseChefs, loading } = useChefs();
  
  // Use mock data for now (Firebase disabled for faster loading)
  const chefs = mockChefs;
  const loading = false;

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-primary">შეფების ინფორმაციის ჩატვირთვა...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="chefs" className="py-20 bg-background">
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
            ჩვენი შეფები
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            გაეცანით ჩვენს პროფესიონალ გუნდს, რომლებიც ქმნიან ქართული სამზარეულოს ნამდვილ ხელოვნებას
          </p>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Chef Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-6xl text-primary/20">👨‍🍳</div>
                {/* Placeholder for actual chef image */}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                  <div className="text-center text-primary/60">
                    <FaUtensils size={40} className="mx-auto mb-2" />
                    <p className="text-sm">შეფის ფოტო</p>
                  </div>
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {chef.name}
                </h3>
                <p className="text-secondary font-semibold mb-2">{chef.role}</p>
                <p className="text-sm text-gray mb-3">{chef.specialty}</p>
                <p className="text-sm text-gray mb-4">{chef.experience}</p>
                
                <p className="text-sm text-gray leading-relaxed mb-4 line-clamp-3">
                  {chef.bio}
                </p>

                {/* Signature Dishes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">ფირმისეული კერძები:</h4>
                  <div className="flex flex-wrap gap-1">
                    {chef.signatureDishes.slice(0, 2).map((dish, dishIndex) => (
                      <span 
                        key={dishIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                      >
                        {dish}
                      </span>
                    ))}
                    {chef.signatureDishes.length > 2 && (
                      <span className="text-xs bg-gray/10 text-gray px-2 py-1 rounded-full">
                        +{chef.signatureDishes.length - 2} სხვა
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Media */}
                {chef.socialMedia && (
                  <div className="flex space-x-3">
                    {chef.socialMedia.instagram && (
                      <a
                        href={`https://instagram.com/${chef.socialMedia.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaInstagram size={16} />
                      </a>
                    )}
                    {chef.socialMedia.facebook && (
                      <a
                        href={`https://facebook.com/${chef.socialMedia.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaFacebook size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray mb-6">
            გსურს შეიგრძნო ჩვენი შეფების ოსტატობა?
          </p>
          <motion.a
            href="#menu"
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            მენიუს ნახვა
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Chefs;
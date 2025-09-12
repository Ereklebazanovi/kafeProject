import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCoffee, FaUtensils } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-primary/20">
          <FaCoffee size={60} />
        </div>
        <div className="absolute top-40 right-32 text-secondary/20">
          <FaUtensils size={40} />
        </div>
        <div className="absolute bottom-32 left-32 text-accent/20">
          <FaCoffee size={80} />
        </div>
        <div className="absolute bottom-20 right-20 text-primary/20">
          <FaUtensils size={50} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
            <span className="block">ქართული კაფე</span>
            <span className="block text-secondary">"ალუბანი"</span>
          </h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ტრადიციული ქართული სამზარეულო თანამედროვე გემოთი
          </motion.p>

          <motion.p 
            className="text-lg text-gray/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            აღმოაჩინე ქართული კულინარიული მემკვიდრეობა ყველაზე თბილ ატმოსფეროში
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/menu"
              className="group bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <span>მენიუს ნახვა</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#about"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>ჩვენს შესახებ</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 -left-20 text-primary/10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <FaCoffee size={120} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 -right-20 text-secondary/10"
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <FaUtensils size={100} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
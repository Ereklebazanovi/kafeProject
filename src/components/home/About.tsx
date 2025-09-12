import { motion } from 'framer-motion';
import { FaHeart, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaHeart className="text-2xl" />,
      title: 'ტრადიციული რეცეპტები',
      description: 'ჩვენ ვიყენებთ ძველ ქართულ რეცეპტებს, რომლებიც თაობებით გადმოგვრეს'
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: 'ეკოლოგიურად სუფთა',
      description: 'ყველა ინგრედიენტი ისუნთებს ადგილობრივი ფერმერებისგან'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'ოჯახური ატმოსფერო',
      description: 'ჩვენთან ყოველი სტუმარი ოჯახის წევრივით იგრძნობს თავს'
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: 'ხარისხიანი სერვისი',
      description: 'ჩვენი გუნდი მუშაობს თქვენი კმაყოფილებისთვის'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              ჩვენი ისტორია
            </h2>
            
            <p className="text-lg text-gray mb-6 leading-relaxed">
              კაფე "ალუბანი" დაარსდა 2015 წელს მარტივი იდეით - შეგვექმნა ადგილი, 
              სადაც ტრადიციული ქართული სამზარეულო შეხვდებოდა თანამედროვე ატმოსფეროს.
            </p>
            
            <p className="text-lg text-gray mb-8 leading-relaxed">
              ჩვენი სახელი "ალუბანი" მომდინარეობს ქართული სიტყვებისგან "ალუბალი" 
              და "ბანი" - ადგილი სადაც იზრდება ყველაზე ტკბილი ალუბალი. 
              ასევე ჩვენც ვზრდით ყველაზე ტკბილ გემოებს ჩვენს კაფეში.
            </p>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl p-8 min-h-96">
              {/* Placeholder for cafe image */}
              <div className="bg-white/80 rounded-2xl p-8 text-center">
                <div className="text-6xl text-primary mb-4">☕</div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  კაფე "ალუბანი"
                </h3>
                <p className="text-gray">
                  სადაც ტრადიცია შეხვდება თანამედროვეობას
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-full">
                <FaHeart size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-full">
                <FaLeaf size={24} />
              </div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center bg-primary/5 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-gray">წლიანი გამოცდილება</div>
              </div>
              <div className="text-center bg-secondary/5 p-4 rounded-xl">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-gray">კერძის ვარიაცია</div>
              </div>
              <div className="text-center bg-accent/5 p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-gray">კმაყოფილი კლიენტი</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
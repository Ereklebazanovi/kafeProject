import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-accent/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
            <FaStar className="text-gold" size={18} />
            <span>ქართული ტრადიციული სამზარეულო</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-black text-white mb-6">
            <span className="block text-6xl md:text-7xl lg:text-8xl leading-tight">
              კაფე ალუბანი
            </span>
            <span className="block text-2xl md:text-3xl text-gold font-bold mt-4">
              Georgian Restaurant & Café
            </span>
          </h1>
          
          {/* Description */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 mb-10 shadow-2xl max-w-2xl">
            <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium">
              ტრადიციული ქართული სამზარეულო პრემიუმ ხარისხით. 
              <span className="text-accent font-bold"> ავთენტური გემოები</span> და 
              <span className="text-warm font-bold"> უნიკალური ატმოსფერო</span> თბილისის გულში.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/menu"
              className="group bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1"
            >
              <span>მენიუს ნახვა</span>
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group bg-white/90 backdrop-blur-md text-primary hover:bg-gold hover:text-white border-2 border-gold px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 text-center shadow-2xl hover:-translate-y-1"
            >
              ჩვენს შესახებ
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 text-center shadow-2xl">
              <div className="text-3xl font-black text-accent mb-2">50+</div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">საუკეთესო კერძი</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 text-center shadow-2xl">
              <div className="text-3xl font-black text-gold mb-2">5★</div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">ექსკლუზივური შეფასება</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 text-center shadow-2xl">
              <div className="text-3xl font-black text-success mb-2">2015</div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">წლიდან ტრადიცია</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
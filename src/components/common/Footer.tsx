import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import { cafeInfo } from '../../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-warm/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>📍</span>
              <span>კონტაქტი</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">დაგვიკავშირდით</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaMapMarkerAlt className="text-accent" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{cafeInfo.address}</p>
                  <p className="text-white/70 text-sm mt-1">{cafeInfo.addressEn}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaPhone className="text-accent" size={16} />
                </div>
                <a href={`tel:${cafeInfo.phone}`} className="text-white hover:text-accent transition-colors font-medium">
                  {cafeInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaEnvelope className="text-accent" size={16} />
                </div>
                <a href={`mailto:${cafeInfo.email}`} className="text-white hover:text-accent transition-colors font-medium">
                  {cafeInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-warm/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>🕐</span>
              <span>სამუშაო საათები</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">ღიაა ყოველდღე</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-warm/20 p-3 rounded-xl">
                    <FaClock className="text-warm" size={16} />
                  </div>
                  <span className="text-white font-medium">სამუშაო გრაფიკი</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">ორშ-ხუთ:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.monday}</span>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">პარ-შაბ:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.friday}</span>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">კვირა:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About & Social */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>☕</span>
              <span>ჩვენს შესახებ</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">კაფე ალუბანი</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              {cafeInfo.description} - ადგილი სადაც შეგხვდებით ტრადიციული ქართული 
              სამზარეულო და თანამედროვე ატმოსფერო.
            </p>
            
            <div>
              <p className="text-white font-medium mb-4">გაეცანით სოციალურ ქსელებში:</p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-br hover:from-accent hover:to-warm transition-all duration-300 border border-white/10 hover:border-white/20"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-br hover:from-accent hover:to-warm transition-all duration-300 border border-white/10 hover:border-white/20"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-warm rounded-2xl flex items-center justify-center">
                  <span className="text-white font-display font-bold">კ</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{cafeInfo.name}</p>
                  <p className="text-white/70 text-sm">Georgian Restaurant & Café</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <p className="text-white/80 text-sm">
                  © {currentYear} ყველა უფლება დაცულია
                </p>
                <p className="text-accent/80 text-xs mt-1">
                  Made with ❤️ in Georgia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
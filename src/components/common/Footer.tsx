import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import { cafeInfo } from '../../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-background via-gray-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-warm/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray/10 shadow-lg">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>📍</span>
              <span>კონტაქტი</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-primary">დაგვიკავშირდით</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaMapMarkerAlt className="text-accent" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-primary font-medium">{cafeInfo.address}</p>
                  <p className="text-gray text-sm mt-1">{cafeInfo.addressEn}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaPhone className="text-accent" size={16} />
                </div>
                <a href={`tel:${cafeInfo.phone}`} className="text-primary hover:text-accent transition-colors font-medium">
                  {cafeInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors">
                  <FaEnvelope className="text-accent" size={16} />
                </div>
                <a href={`mailto:${cafeInfo.email}`} className="text-primary hover:text-accent transition-colors font-medium">
                  {cafeInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray/10 shadow-lg">
            <div className="inline-flex items-center space-x-2 bg-warm/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>🕐</span>
              <span>სამუშაო საათები</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-primary">ღიაა ყოველდღე</h3>
            <div className="space-y-4">
              <div className="bg-gray-light/30 rounded-2xl p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-warm/20 p-3 rounded-xl">
                    <FaClock className="text-warm" size={16} />
                  </div>
                  <span className="text-primary font-medium">სამუშაო გრაფიკი</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray">ორშ-ხუთ:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.monday}</span>
                  </div>
                  <div className="w-full h-px bg-gray/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray">პარ-შაბ:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.friday}</span>
                  </div>
                  <div className="w-full h-px bg-gray/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray">კვირა:</span>
                    <span className="text-warm font-semibold">{cafeInfo.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About & Social */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray/10 shadow-lg">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>☕</span>
              <span>ჩვენს შესახებ</span>
            </div>
            <h3 className="text-xl font-display font-bold mb-6 text-primary">კაფე ალუბანი</h3>
            <p className="text-gray mb-8 leading-relaxed">
              {cafeInfo.description} - ადგილი სადაც შეგხვდებით ტრადიციული ქართული 
              სამზარეულო და თანამედროვე ატმოსფერო.
            </p>
            
            <div>
              <p className="text-primary font-medium mb-4">გაეცანით სოციალურ ქსელებში:</p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="group bg-gray-light/30 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-br hover:from-accent hover:to-warm transition-all duration-300 border border-gray/20 hover:border-accent/40"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="text-primary group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
                <a 
                  href="#" 
                  className="group bg-gray-light/30 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-br hover:from-accent hover:to-warm transition-all duration-300 border border-gray/20 hover:border-accent/40"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} className="text-primary group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray/20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray/10 shadow-lg text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-warm rounded-2xl flex items-center justify-center">
                  <span className="text-white font-display font-bold">კ</span>
                </div>
                <div className="text-left">
                  <p className="text-primary font-semibold">{cafeInfo.name}</p>
                  <p className="text-gray text-sm">Georgian Restaurant & Café</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <p className="text-gray text-sm">
                  © {currentYear} ყველა უფლება დაცულია
                </p>
                <p className="text-accent text-xs mt-1">
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
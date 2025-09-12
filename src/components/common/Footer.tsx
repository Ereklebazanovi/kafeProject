import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import { cafeInfo } from '../../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">კონტაქტი</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p>{cafeInfo.address}</p>
                  <p className="text-accent/80 text-sm">{cafeInfo.addressEn}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accent flex-shrink-0" />
                <a href={`tel:${cafeInfo.phone}`} className="hover:text-accent transition-colors">
                  {cafeInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <a href={`mailto:${cafeInfo.email}`} className="hover:text-accent transition-colors">
                  {cafeInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">სამუშაო საათები</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaClock className="text-accent flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>ორშ-ხუთ:</span>
                    <span className="text-accent">{cafeInfo.workingHours.monday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>პარ-შაბ:</span>
                    <span className="text-accent">{cafeInfo.workingHours.friday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>კვირა:</span>
                    <span className="text-accent">{cafeInfo.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About & Social */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">ჩვენს შესახებ</h3>
            <p className="text-sm mb-6 leading-relaxed">
              {cafeInfo.description} - ადგილი სადაც შეგხვდებით ტრადიციული ქართული 
              სამზარეულო და თანამედროვე ატმოსფერო.
            </p>
            
            <div>
              <p className="text-sm font-medium mb-3">გაეცანით სოციალურ ქსელებში:</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="text-sm text-accent/80">
            © {currentYear} {cafeInfo.name}. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaDownload, FaMobile, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { generateQRCode, downloadQRCode } from '../../utils/qrGenerator';

const QRPreview = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate QR code for menu URL
  useEffect(() => {
    const generateMenuQR = async () => {
      setIsGenerating(true);
      try {
        const menuUrl = `${window.location.origin}/menu`;
        const qrUrl = await generateQRCode(menuUrl, 200);
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateMenuQR();
  }, []);

  const handleDownloadQR = () => {
    if (qrCodeUrl) {
      downloadQRCode(qrCodeUrl, 'alubani-cafe-menu-qr');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <FaQrcode size={80} />
        </div>
        <div className="absolute bottom-20 right-20">
          <FaMobile size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <FaQrcode size={40} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              დაასკანირე და შეუკვეთე
            </h2>
            
            <p className="text-xl mb-6 opacity-90">
              გამოიყენე QR კოდი ჩვენი ციფრული მენიუს სანახავად თქვენს ტელეფონზე
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <FaMobile className="text-accent" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">მარტივი და სწრაფი</h3>
                  <p className="text-sm opacity-80">
                    ერთი სკანირებით მიიღე მთელი მენიუ თქვენს ტელეფონზე
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <FaQrcode className="text-accent" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ყოვულდღიურად განახლებული</h3>
                  <p className="text-sm opacity-80">
                    ყოველთვის ნახავთ ყველაზე ახალ მენიუს და ფასებს
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <FaDownload className="text-accent" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">უკონტაქტო სერვისი</h3>
                  <p className="text-sm opacity-80">
                    უსაფრთხო და ყოვლისმომცველი გამოცდილება
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="group flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>მენიუს ნახვა</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {qrCodeUrl && (
                <button
                  onClick={handleDownloadQR}
                  className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <FaDownload />
                  <span>QR კოდის გადმოწერა</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* QR Code Display */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 inline-block">
              <div className="bg-white rounded-2xl p-8 mb-6">
                {isGenerating ? (
                  <div className="w-48 h-48 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : qrCodeUrl ? (
                  <motion.img
                    src={qrCodeUrl}
                    alt="Menu QR Code"
                    className="w-48 h-48 mx-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center text-gray">
                    <FaQrcode size={64} />
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2 text-accent">
                  მენიუს QR კოდი
                </h3>
                <p className="text-sm opacity-80">
                  დაასკანირე ტელეფონის კამერით
                </p>
              </div>
            </div>

            {/* Instructions */}
            <motion.div
              className="mt-8 text-left max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h4 className="font-semibold mb-3 text-accent">როგორ გამოვიყენო:</h4>
              <ol className="text-sm space-y-2 opacity-90">
                <li className="flex items-start space-x-2">
                  <span className="bg-accent text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                  <span>გახსენი ტელეფონის კამერა</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-accent text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                  <span>მიადექი კამერა QR კოდს</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-accent text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                  <span>დააჭირე ნოტიფიკაციას მენიუს გასახსნელად</span>
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRPreview;
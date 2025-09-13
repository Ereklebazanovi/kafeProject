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
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-secondary/80 to-accent/75"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <FaQrcode size={80} className="text-gold" />
        </div>
        <div className="absolute bottom-20 right-20">
          <FaMobile size={60} className="text-warm" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <FaQrcode size={40} className="text-accent" />
        </div>
        <div className="absolute top-20 right-1/3">
          <div className="w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-32 left-1/4">
          <div className="w-24 h-24 bg-warm/20 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-warm/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
            <FaQrcode className="text-gold" size={18} />
            <span>ციფრული მენიუ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            დაასკანირე და შეუკვეთე
          </h2>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium">
              გამოიყენე <span className="text-accent font-bold">QR კოდი</span> ჩვენი ციფრული მენიუს სანახავად
              <span className="text-warm font-bold"> თქვენს ტელეფონზე</span>.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6 mb-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-accent text-white p-4 rounded-2xl w-fit mb-4 shadow-lg">
                  <FaMobile size={20} />
                </div>
                <h3 className="font-bold text-primary mb-3 text-lg">მარტივი და სწრაფი</h3>
                <p className="text-gray leading-relaxed">
                  ერთი სკანირებით მიიღე მთელი მენიუ თქვენს ტელეფონზე
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-warm text-white p-4 rounded-2xl w-fit mb-4 shadow-lg">
                  <FaQrcode size={20} />
                </div>
                <h3 className="font-bold text-primary mb-3 text-lg">ყოველდღიურად განახლებული</h3>
                <p className="text-gray leading-relaxed">
                  ყოველთვის ნახავთ ყველაზე ახალ მენიუს და ფასებს
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gold text-white p-4 rounded-2xl w-fit mb-4 shadow-lg">
                  <FaDownload size={20} />
                </div>
                <h3 className="font-bold text-primary mb-3 text-lg">უკონტაქტო სერვისი</h3>
                <p className="text-gray leading-relaxed">
                  უსაფრთხო და ყოვლისმომცველი გამოცდილება
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/menu"
                className="group bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1"
              >
                <span>მენიუს ნახვა</span>
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>

              {qrCodeUrl && (
                <button
                  onClick={handleDownloadQR}
                  className="group bg-white/90 backdrop-blur-md text-primary hover:bg-gold hover:text-white border-2 border-gold px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 text-center shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <FaDownload className="text-lg" />
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
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl inline-block">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg">
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
                <h3 className="text-2xl font-display font-bold mb-2 text-primary">
                  მენიუს QR კოდი
                </h3>
                <p className="text-gray">
                  დაასკანირე ტელეფონის კამერით
                </p>
              </div>
            </div>

            {/* Instructions */}
            <motion.div
              className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h4 className="font-bold mb-4 text-primary text-center">როგორ გამოვიყენო:</h4>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray">გახსენი ტელეფონის კამერა</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-warm text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray">მიადექი კამერა QR კოდს</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray">დააჭირე ნოტიფიკაციას მენიუს გასახსნელად</span>
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
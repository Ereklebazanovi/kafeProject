import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaDownload, FaShare, FaCopy } from 'react-icons/fa';
import { generateQRCode, downloadQRCode } from '../../utils/qrGenerator';

interface QRGeneratorProps {
  url?: string;
  title?: string;
  description?: string;
  size?: number;
}

const QRGenerator = ({ 
  url, 
  title = 'მენიუს QR კოდი',
  description = 'დაასკანირე ტელეფონის კამერით',
  size = 200 
}: QRGeneratorProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const targetUrl = url || `${window.location.origin}/menu`;

  useEffect(() => {
    const generateQR = async () => {
      setIsGenerating(true);
      try {
        const qrUrl = await generateQRCode(targetUrl, size);
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateQR();
  }, [targetUrl, size]);

  const handleDownload = () => {
    if (qrCodeUrl) {
      downloadQRCode(qrCodeUrl, 'cafe-alubani-menu');
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'კაფე ალუბანი - მენიუ',
          text: 'აღმოაჩინე ჩვენი გემრიელი მენიუ!',
          url: targetUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopyUrl();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">
          {title}
        </h3>
        <p className="text-gray mb-6">{description}</p>

        {/* QR Code Display */}
        <div className="bg-background rounded-2xl p-6 mb-6 inline-block">
          {isGenerating ? (
            <div className="flex items-center justify-center" style={{ width: size, height: size }}>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : qrCodeUrl ? (
            <motion.img
              src={qrCodeUrl}
              alt="QR Code"
              className="mx-auto"
              style={{ width: size, height: size }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          ) : (
            <div className="flex items-center justify-center text-gray" style={{ width: size, height: size }}>
              <FaQrcode size={64} />
            </div>
          )}
        </div>

        {/* URL Display */}
        <div className="bg-background rounded-lg p-3 mb-6">
          <p className="text-sm text-gray break-all">{targetUrl}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            onClick={handleDownload}
            disabled={!qrCodeUrl}
            className="flex items-center justify-center space-x-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload size={16} />
            <span>გადმოწერა</span>
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaShare size={16} />
            <span>გაზიარება</span>
          </motion.button>

          <motion.button
            onClick={handleCopyUrl}
            className={`flex items-center justify-center space-x-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              copySuccess ? 'bg-success border-success text-white' : ''
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCopy size={16} />
            <span>{copySuccess ? 'დაკოპირებულია!' : 'კოპირება'}</span>
          </motion.button>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-left max-w-sm mx-auto">
          <h4 className="font-semibold mb-3 text-primary">გამოყენების ინსტრუქცია:</h4>
          <ol className="text-sm space-y-2 text-gray">
            <li className="flex items-start space-x-2">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
              <span>გახსენი ტელეფონის კამერის აპლიკაცია</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
              <span>მიადექი კამერა QR კოდს</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
              <span>დააჭირე ნოტიფიკაციას ბმულის გასახსნელად</span>
            </li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default QRGenerator;
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

interface LoadingProps {
  message?: string;
}

const Loading = ({ message = 'ჩატვირთვა...' }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        className="relative mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 border-4 border-accent/20 border-t-primary rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCoffee className="text-primary text-xl" />
        </div>
      </motion.div>
      
      <motion.p
        className="text-lg text-gray"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default Loading;
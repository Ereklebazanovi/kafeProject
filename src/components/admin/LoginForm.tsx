import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaSignInAlt className="text-primary text-2xl" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-primary mb-2">
          შესვლა
        </h2>
        <p className="text-gray">
          შეიყვანეთ თქვენი დეტალები ადმინისტრაციული პანელში შესასვლელად
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            ელ. ფოსტა
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-accent/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
            placeholder="admin@alubani.ge"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
            პაროლი
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 border-2 border-accent/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray hover:text-primary transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            className="bg-error/10 border border-error/20 text-error p-4 rounded-lg text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading || !email || !password}
          className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <FaSignInAlt />
              <span>შესვლა</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Admin Credentials */}
      <div className="mt-8 p-4 bg-background rounded-lg">
        <h3 className="text-sm font-semibold text-primary mb-2">შესვლის მონაცემები:</h3>
        <div className="text-xs text-gray space-y-1">
          <p><strong>Email:</strong> admin@alubani.ge</p>
          <p><strong>Password:</strong> Alubani2025!</p>
          <p className="text-success mt-2">
            ✅ რეალური Firebase Authentication
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginForm;
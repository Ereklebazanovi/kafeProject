import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'მთავარი', nameEn: 'Home', href: '/' },
    { name: 'მენიუ', nameEn: 'Menu', href: '/menu' },
    { name: 'შესახებ', nameEn: 'About', href: '/about' },
    { name: 'გალერეა', nameEn: 'Gallery', href: '/gallery' },
    { name: 'კონტაქტი', nameEn: 'Contact', href: '/#contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.substring(1);
    return location.pathname === href;
  };

  return (
    <header className="bg-black/95 backdrop-blur-xl shadow-2xl border-b-2 border-yellow-500/30 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
              <span className="text-black font-bold text-xl">კ</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                კაფე ალუბანი
              </h1>
              <p className="text-xs text-yellow-400 hidden md:block font-medium">GEORGIAN RESTAURANT & CAFÉ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'bg-yellow-500 text-black shadow-lg' 
                    : 'text-white hover:bg-yellow-500/20 hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-40">
            <div className="bg-black/95 backdrop-blur-xl mx-4 rounded-xl shadow-2xl border border-yellow-500/30">
              <div className="p-4">
                <div className="grid grid-cols-1 gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center ${
                        isActive(item.href) 
                          ? 'bg-yellow-500 text-black shadow-lg' 
                          : 'text-white hover:bg-yellow-500/20 hover:text-yellow-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
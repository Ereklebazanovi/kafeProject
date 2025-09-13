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
    <header className="bg-white/98 backdrop-blur-xl shadow-2xl border-b-4 border-accent sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-warm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl border-2 border-gold">
              <span className="text-white font-display font-black text-2xl">კ</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-black text-primary">
                კაფე ალუბანი
              </h1>
              <p className="text-sm text-accent hidden md:block font-bold tracking-wide">GEORGIAN RESTAURANT & CAFÉ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-light/80 rounded-2xl p-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'bg-accent text-white shadow-2xl transform -translate-y-0.5' 
                    : 'text-primary hover:bg-white hover:text-accent hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 bg-accent text-white rounded-2xl hover:bg-warm hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-2xl"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-6">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-4 border-accent/20">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 text-center shadow-xl ${
                      isActive(item.href) 
                        ? 'bg-accent text-white shadow-2xl transform -translate-y-1' 
                        : 'bg-gray-light text-primary hover:bg-gold hover:text-white hover:-translate-y-1'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
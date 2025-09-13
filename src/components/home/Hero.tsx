import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Award, Calendar, Users } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoDisabled, setVideoDisabled] = useState(false);

  useEffect(() => {
    // Check user preference from localStorage
    const savedPreference = localStorage.getItem('disableVideo');
    if (savedPreference === 'true') {
      setVideoDisabled(true);
      return;
    }

    // Check if device is mobile or has slow connection
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 768;
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.effectiveType === '3g'
      );

      setIsMobile(isMobileDevice);
      // Only load video on desktop with good connection and user hasn't disabled it
      setShouldLoadVideo(!isMobileDevice && !isSlowConnection && !videoDisabled);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [videoDisabled]);

  const toggleVideo = () => {
    const newState = !videoDisabled;
    setVideoDisabled(newState);
    localStorage.setItem('disableVideo', newState.toString());
    if (!newState && !isMobile) {
      setShouldLoadVideo(true);
    } else {
      setShouldLoadVideo(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fallback Background Image - loads immediately */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      {/* Video Background - conditional loading */}
      {shouldLoadVideo && (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onLoadedData={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onError={(e) => {
              // Hide video if it fails to load, fallback image will show
              e.currentTarget.style.display = 'none';
            }}
          >
            <source src="https://www.pexels.com/download/video/2583490/" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Video Control Button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleVideo}
          className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 text-white text-xs hover:bg-black/70 transition-all duration-300 border border-white/20"
          title={shouldLoadVideo ? 'ვიდეოს გამორთვა' : 'ვიდეოს ჩართვა'}
        >
          {shouldLoadVideo ? '🎥 ვიდეო ჩართულია' : '📷 სურათის რეჟიმი'}
        </button>
      </div>

      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-orange-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-full px-6 py-3 border border-yellow-400/30">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm tracking-wide">პრემიუმ ბრენდი 2024</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-black text-white leading-tight">
                  <span className="block text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
                    კაფე ალუბანი
                  </span>
                  <span className="block text-xl md:text-2xl text-yellow-400 font-bold mt-2 tracking-wide">
                    Georgian Restaurant & Café
                  </span>
                </h1>
                
                {/* Subtitle with elegant typography */}
                <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-lg">
                  ავთენტური ქართული სამზარეულოს სულისკვეთება თანამედროვე ელეგანტურობასთან ერთად
                </p>
              </div>
              
              {/* Enhanced Description Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    ტრადიციული ქართული სამზარეულო პრემიუმ ხარისხით.
                    <span className="text-yellow-400 font-semibold"> ავთენტური გემოები</span> და
                    <span className="text-orange-400 font-semibold"> უნიკალური ატმოსფერო</span> თბილისის გულში.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">მენიუს ნახვა</span>
                  <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-black/30 backdrop-blur-xl text-white hover:bg-yellow-400 hover:text-black border-2 border-yellow-400/50 hover:border-yellow-400 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                  <span>ჩვენს შესახებ</span>
                </button>
              </div>
            </div>

            {/* Right Column - Stats & Features */}
            <div className="space-y-6">
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-red-400">50+</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">საუკეთესო კერძი</div>
                    </div>
                  </div>
                </div>

                <div className="group bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-yellow-400 flex items-center">
                        5<Star className="w-4 h-4 fill-current ml-1" />
                      </div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">შეფასება</div>
                    </div>
                  </div>
                </div>

                <div className="group bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-green-400">2015</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">წლიდან</div>
                    </div>
                  </div>
                </div>

                <div className="group bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-blue-400">1K+</div>
                      <div className="text-xs text-gray-300 uppercase tracking-wide">კმაყოფილი კლიენტი</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4">განსაკუთრებული მომსახურება</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">ყოველდღიური ახალი წინადადებები</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">ღვინის დეგუსტაცია შაბათ-კვირას</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">პრივატული ღონისძიებების ორგანიზება</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">ტრადიციული სუფრის გაწყობა</span>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-2xl rounded-2xl p-6 border border-yellow-400/20">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">დაგვიკავშირდით</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>📍 თბილისი, რუსთაველის გამზირი 45</div>
                  <div>📞 +995 32 2 XX XX XX</div>
                  <div>🕐 ყოველდღე 10:00 - 00:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-red-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Smooth Transition to Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-32 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
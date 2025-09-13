import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaUtensils } from 'react-icons/fa';
import { useChefs } from '../../hooks/useFirestore';

const Chefs = () => {
  const { chefs, loading, error } = useChefs();

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-primary">შეფების ინფორმაციის ჩატვირთვა...</div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state - no chefs added yet
  if (!loading && chefs.length === 0) {
    return (
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577308856961-8e0ec50d3017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-white/20 max-w-3xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-warm rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
              <span className="text-4xl text-white">👨‍🍳</span>
            </div>
            <h2 className="text-4xl font-display font-black text-primary mb-6">
              ჩვენი გუნდის წარდგენა მალე
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed mb-8">
              ჩვენი <span className="text-accent font-bold">ტალანტური შეფები</span> მზადებენ 
              <span className="text-warm font-bold"> განსაკუთრებულ კერძებს</span> თქვენთვის
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-lg">⭐</span>
                </div>
                <p className="text-sm font-semibold text-primary">პროფესიონალი</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-lg">🔥</span>
                </div>
                <p className="text-sm font-semibold text-primary">გამოცდილი</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-lg">❤️</span>
                </div>
                <p className="text-sm font-semibold text-primary">თავდადებული</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="chefs" className="relative py-24 overflow-hidden">
      {/* Background Image - same style as About */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1577308856961-8e0ec50d3017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-warm/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
            <span>👨‍🍳</span>
            <span>ჩვენი პროფესიონალი გუნდი</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            ჩვენი შეფები
          </h2>
          
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium">
              გაეცანით ჩვენს პროფესიონალ გუნდს, რომლებიც ქმნიან ქართული სამზარეულოს ნამდვილ ხელოვნებას. 
              <span className="text-accent font-bold"> ყოველი კერძი</span> მზადდება 
              <span className="text-warm font-bold"> სიყვარულითა და ოსტატობით</span>.
            </p>
          </div>
        </div>

        {/* Chefs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className="group bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/25 transition-all duration-500 border border-white/20 hover:-translate-y-3 hover:scale-105"
            >
              {/* Chef Image */}
              <div className="relative h-64 bg-gradient-to-br from-accent/20 to-warm/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Chef Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-white">👨‍🍳</span>
                  </div>
                </div>
                
                {/* Chef Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gold text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                    CHEF
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <FaUtensils className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-8">
                {/* Name and Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-black text-primary mb-2">
                    {chef.name}
                  </h3>
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold inline-block shadow-lg">
                    {chef.role}
                  </div>
                </div>
                
                {/* Specialty & Experience */}
                <div className="bg-gradient-to-r from-accent/10 to-warm/10 rounded-2xl p-6 mb-6">
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary mb-2">{chef.specialty}</p>
                    <p className="text-warm font-semibold">{chef.experience}</p>
                  </div>
                </div>
                
                {/* Bio */}
                <p className="text-gray leading-relaxed mb-6 text-center">
                  {chef.bio}
                </p>

                {/* Signature Dishes */}
                {chef.signatureDishes && chef.signatureDishes.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-primary mb-3 text-center">ფირმისეული კერძები</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {chef.signatureDishes.slice(0, 2).map((dish, dishIndex) => (
                        <span 
                          key={dishIndex}
                          className="bg-gradient-to-r from-gold/20 to-warm/20 text-primary px-4 py-2 rounded-full font-semibold border-2 border-gold/30 shadow-lg"
                        >
                          {dish}
                        </span>
                      ))}
                      {chef.signatureDishes.length > 2 && (
                        <span className="bg-gray-light text-gray px-4 py-2 rounded-full font-semibold">
                          +{chef.signatureDishes.length - 2} სხვა
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Social Media */}
                {chef.socialMedia && (
                  <div className="flex justify-center space-x-4">
                    {chef.socialMedia.instagram && (
                      <a
                        href={`https://instagram.com/${chef.socialMedia.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-br from-accent to-warm text-white p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <FaInstagram size={20} className="group-hover:rotate-12 transition-transform" />
                      </a>
                    )}
                    {chef.socialMedia.facebook && (
                      <a
                        href={`https://facebook.com/${chef.socialMedia.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-br from-accent to-warm text-white p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <FaFacebook size={20} className="group-hover:rotate-12 transition-transform" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-warm rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-2xl text-white">🍽️</span>
            </div>
            
            <h3 className="text-3xl font-display font-black text-primary mb-4">
              გსურს შეიგრძნო ჩვენი ოსტატობა?
            </h3>
            
            <p className="text-xl text-gray mb-8 leading-relaxed">
              ჩვენი შეფების მიერ მომზადებული <span className="text-accent font-bold">ექსკლუზივური კერძები</span> 
              გველოდება მთავარ გვერდზე!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="group bg-gradient-to-r from-accent to-warm text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-accent/25 hover:-translate-y-2 flex items-center justify-center space-x-3"
              >
                <span>მენიუს ნახვა</span>
                <span className="group-hover:rotate-12 transition-transform">🍽️</span>
              </Link>
              
              <Link
                to="/"
                className="group bg-white/90 border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-2 flex items-center justify-center space-x-3"
              >
                <span>მთავარ გვერდზე</span>
                <span className="group-hover:bounce transition-transform">🏠</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Chefs;
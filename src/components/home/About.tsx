import { FaHeart, FaLeaf, FaUsers, FaAward, FaCrown } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'ტრადიციული რეცეპტები',
      description: 'ჩვენ ვიყენებთ ძველ ქართულ რეცეპტებს, რომლებიც თაობებით გადმოგვრეს'
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'ეკოლოგიურად სუფთა',
      description: 'ყველა ინგრედიენტი მოვიპოვებთ ადგილობრივი ფერმერებისგან'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'ოჯახური ატმოსფერო',
      description: 'ჩვენთან ყოველი სტუმარი ოჯახის წევრივით იგრძნობს თავს'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'ხარისხიანი სერვისი',
      description: 'ჩვენი გუნდი მუშაობს თქვენი კმაყოფილებისთვის'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      <div className="relative z-10 container mx-auto px-10">
        {/* Section Header */}
      

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <div className="flex flex-col h-full">
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
              ჩვენი ისტორია
            </h2>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 mb-10 shadow-2xl flex-grow">
              <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium mb-6">
                კაფე "ალუბანი" დაარსდა 2015 წელს მარტივი იდეით - შეგვექმნა ადგილი,
                სადაც ტრადიციული ქართული სამზარეულო შეხვდებოდა თანამედროვე ატმოსფეროს.
              </p>

              <p className="text-lg text-gray leading-relaxed">
                ჩვენი სახელი "ალუბანი" მომდინარეობს ქართული სიტყვებისგან "ალუბალი"
                და "ბანი" - ადგილი სადაც იზრდება ყველაზე ტკბილი ალუბალი.
                <span className="text-accent font-bold"> ასევე ჩვენც ვზრდით ყველაზე ტკბილ გემოებს</span> ჩვენს კაფეში.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-accent text-white p-4 rounded-2xl w-fit mb-4 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-3 text-lg">{feature.title}</h3>
                  <p className="text-gray leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-22">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-2 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg"
                alt="კაფე ალუბანი ინტერიერი"
                className="w-full h-[500px] rounded-2xl object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
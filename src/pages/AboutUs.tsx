import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import About from '../components/home/About';
import Chefs from '../components/home/Chefs';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Chefs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
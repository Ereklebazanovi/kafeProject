import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Chefs from '../components/home/Chefs';
import Gallery from '../components/home/Gallery';
import QRPreview from '../components/home/QRPreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Chefs />
        <Gallery />
        <QRPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
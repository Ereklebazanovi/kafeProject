import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Gallery from '../components/home/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;